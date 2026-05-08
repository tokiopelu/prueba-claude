import { test } from '@playwright/test'

const SITE = process.env.SITE_URL || 'https://romabeauty.vercel.app'

// Mobile viewport on chromium (avoids needing webkit install)
test.use({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  actionTimeout: 30000
})

test('audit: home', async ({ page }) => {
  await page.goto(SITE)
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'test-results/audit-home.png', fullPage: false, timeout: 30000 })
})

test('audit: home filters', async ({ page }) => {
  await page.goto(SITE)
  await page.evaluate(() => window.scrollTo(0, 200))
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'test-results/audit-home-filters.png', clip: { x: 0, y: 0, width: 390, height: 844 } })
})

test('audit: product detail', async ({ page }) => {
  await page.goto(SITE)
  await page.waitForTimeout(300)
  await page.locator('.cat-name-btn').first().click()
  await page.waitForURL(/\/p\//)
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'test-results/audit-product.png', fullPage: false })
})

test('audit: cart drawer open', async ({ page }) => {
  await page.goto(SITE)
  await page.getByRole('button', { name: /Sumar al carrito/i }).first().click()
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'test-results/audit-cart-drawer.png', fullPage: false })
})

test('audit: signin modal', async ({ page }) => {
  await page.goto(SITE)
  await page.locator('.auth-btn--ghost').click()
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'test-results/audit-signin.png', fullPage: false })
})

test('audit: checkout gate', async ({ page }) => {
  await page.goto(SITE)
  await page.getByRole('button', { name: /Sumar al carrito/i }).first().click()
  await page.locator('.cart-drawer-close').click()
  await page.goto(`${SITE}/checkout`)
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'test-results/audit-checkout-gate.png', fullPage: false })
})

test('audit: footer', async ({ page }) => {
  await page.goto(SITE)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(800)
  await page.screenshot({ path: 'test-results/audit-footer.png', fullPage: false })
})
