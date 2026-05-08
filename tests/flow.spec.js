import { test, expect } from '@playwright/test'

const SITE = process.env.SITE_URL || 'https://romabeauty.vercel.app'
const DEMO_EMAIL = `test+${Date.now()}@romabeauty.test`

test.describe('ROMAbeauty checkout-with-login flow', () => {
  test.beforeEach(async ({ page, context }) => {
    await context.clearCookies()
    // Clear localStorage once via a real page visit. Don't use addInitScript
    // because it would re-clear on every navigation in the test.
    await page.goto(SITE)
    await page.evaluate(() => {
      try {
        localStorage.removeItem('romabeauty:cart:v1')
        localStorage.removeItem('romabeauty:user:v1')
        localStorage.removeItem('romabeauty:discount:v1')
      } catch {}
    })
  })

  test('1. Home shows sign-in button and cart in header', async ({ page }) => {
    await page.goto(SITE)
    await expect(page.getByRole('button', { name: /^Iniciar sesión$/i })).toBeVisible()
    await expect(page.locator('.nav-cta')).toBeVisible()
    await expect(page.locator('.nav-cta')).toContainText('Carrito')
  })

  test('2. Anonymous: clicking checkout opens sign-in modal with gate copy', async ({ page }) => {
    await page.goto(SITE)
    // Add first product to cart
    await page.getByRole('button', { name: /Sumar al carrito/i }).first().click()
    // Drawer should auto-open
    const drawer = page.getByRole('dialog', { name: /Tu carrito/i })
    await expect(drawer).toBeVisible()
    await expect(drawer.getByText(/1 producto/i)).toBeVisible()
    // Click checkout button
    await drawer.getByRole('button', { name: /Continuar al checkout/i }).click()
    // Sign-in modal opens with gate copy
    const signIn = page.getByRole('dialog', { name: /Iniciar sesión/i })
    await expect(signIn).toBeVisible()
    await expect(signIn.getByText(/Falta un paso/i)).toBeVisible()
    await expect(signIn.getByText(/Iniciá sesión para finalizar tu compra/i)).toBeVisible()
  })

  test('3. Direct hit on /checkout without session shows gate page', async ({ page }) => {
    await page.goto(SITE)
    await page.getByRole('button', { name: /Sumar al carrito/i }).first().click()
    const drawer = page.getByRole('dialog', { name: /Tu carrito/i })
    await expect(drawer).toBeVisible()
    await drawer.getByRole('button', { name: /Cerrar carrito/i }).click()
    await page.goto(`${SITE}/checkout`)
    await expect(page.getByText(/Iniciá sesión para finalizar tu compra/i)).toBeVisible()
    const gateActions = page.locator('.checkout-gate-actions')
    await expect(gateActions.getByRole('button', { name: /^Iniciar sesión$/i })).toBeVisible()
    await expect(gateActions.getByRole('button', { name: /Volver al catálogo/i })).toBeVisible()
  })

  test('4. Demo sign-in from gate navigates to checkout and auto-opens promo modal', async ({ page }) => {
    await page.goto(SITE)
    await page.getByRole('button', { name: /Sumar al carrito/i }).first().click()
    const drawer = page.getByRole('dialog', { name: /Tu carrito/i })
    await expect(drawer).toBeVisible()
    await drawer.getByRole('button', { name: /Continuar al checkout/i }).click()

    const signIn = page.getByRole('dialog', { name: /Iniciar sesión/i })
    await expect(signIn).toBeVisible()
    await signIn.getByPlaceholder(/tu@email/i).fill(DEMO_EMAIL)
    await signIn.getByRole('button', { name: /Entrar \(demo\)/i }).click()

    // Should navigate to /checkout
    await expect(page).toHaveURL(/\/checkout$/)

    // Promo modal should auto-open
    const promo = page.getByRole('dialog', { name: /10% de descuento/i })
    await expect(promo).toBeVisible()
    await expect(promo.getByText(/10% off en tu primera compra del mes/i)).toBeVisible()

    // Three social CTAs visible
    await expect(promo.getByText(/Instagram/i)).toBeVisible()
    await expect(promo.getByText(/TikTok/i)).toBeVisible()
    await expect(promo.getByText(/WhatsApp/i)).toBeVisible()

    // Header now shows the user
    await expect(page.getByText(/Hola,/i)).toBeVisible()
  })

  test('5. Claim 10% → discount line appears in checkout summary → submit succeeds', async ({ page }) => {
    await page.goto(SITE)
    await page.getByRole('button', { name: /Sumar al carrito/i }).first().click()
    const drawer = page.getByRole('dialog', { name: /Tu carrito/i })
    await expect(drawer).toBeVisible()

    // Capture subtotal from drawer
    const subtotalRow = drawer.locator('.cart-row', { hasText: 'Subtotal' })
    const subtotalText = await subtotalRow.locator('.cart-num').textContent()

    await drawer.getByRole('button', { name: /Continuar al checkout/i }).click()
    const signIn = page.getByRole('dialog', { name: /Iniciar sesión/i })
    await signIn.getByPlaceholder(/tu@email/i).fill(DEMO_EMAIL)
    await signIn.getByRole('button', { name: /Entrar \(demo\)/i }).click()

    // Promo modal — claim
    const promo = page.getByRole('dialog', { name: /10% de descuento/i })
    await expect(promo).toBeVisible()
    await promo.getByRole('button', { name: /Ya los sigo/i }).click()
    // State should switch to active
    await expect(promo.getByText(/Cupón reclamado|10% está activo/i)).toBeVisible()
    // Close promo
    await promo.getByRole('button', { name: /Cerrar/i }).click()

    // Now on /checkout — discount line should be visible
    await expect(page.getByText(/Descuento bienvenida \(10%\)/i)).toBeVisible()

    // Form pre-filled with demo email
    const emailInput = page.locator('input[type="email"]').first()
    await expect(emailInput).toHaveValue(DEMO_EMAIL)

    // Fill remaining required fields
    await page.locator('input[autocomplete="given-name"]').fill('Test')
    await page.locator('input[autocomplete="family-name"]').fill('User')
    await page.locator('input[autocomplete="tel"]').fill('1155555555')
    await page.locator('input[autocomplete="address-line1"]').fill('Av. Test')
    await page.locator('input[autocomplete="address-line1"] + label, label:has-text("Número") input').first().fill('123').catch(() => {})
    // Fallback for número and CP via order
    const allInputs = page.locator('.checkout-form input')
    // Make sure all required fields are filled
    await page.evaluate(() => {
      document.querySelectorAll('.checkout-form input').forEach(el => {
        if (el.required && !el.value) el.value = el.type === 'email' ? '' : 'X'
      })
    })

    // Re-fill specific fields properly
    await page.locator('label:has-text("Número") input').fill('123')
    await page.locator('label:has-text("Código postal") input').fill('1414')
    await page.locator('label:has-text("Ciudad") input').fill('CABA')

    // Submit
    await page.getByRole('button', { name: /Pagar .* con Mercado Pago/i }).click()
    // Should land on success page
    await page.waitForURL(/\/checkout\/exito/, { timeout: 15000 })
    await expect(page.getByText(/Gracias por tu compra/i)).toBeVisible()

    // Subtotal text was something like "$26.900"; just log it
    console.log('Captured subtotal:', subtotalText)
  })

  test('6. After "used this month", dropdown shows the used label', async ({ page }) => {
    // Sign in
    await page.goto(SITE)
    await page.getByRole('button', { name: /^Iniciar sesión$/i }).click()
    const signIn = page.getByRole('dialog', { name: /Iniciar sesión/i })
    await signIn.getByPlaceholder(/tu@email/i).fill(DEMO_EMAIL)
    await signIn.getByRole('button', { name: /Entrar \(demo\)/i }).click()

    // Promo modal opens — close it
    const promo = page.getByRole('dialog', { name: /10% de descuento/i })
    await expect(promo).toBeVisible()
    await promo.getByRole('button', { name: /Cerrar/i }).click()

    // Mark "used this month" directly in localStorage (faster than full checkout)
    await page.evaluate(email => {
      const month = new Date().toISOString().slice(0, 7)
      const all = JSON.parse(localStorage.getItem('romabeauty:discount:v1') || '{}')
      all[email] = { ...(all[email] || {}), [month]: { claimedAt: new Date().toISOString(), usedAt: new Date().toISOString() } }
      localStorage.setItem('romabeauty:discount:v1', JSON.stringify(all))
    }, DEMO_EMAIL)
    await page.reload()

    // Open user dropdown — button name starts with "Hola,"
    await page.locator('.auth-btn--user').click()
    await expect(page.getByText(/10% ya usado este mes/i)).toBeVisible()
  })
})
