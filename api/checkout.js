// Vercel Function: POST /api/checkout
//
// Hoy: stub. Recibe el carrito + datos del cliente y devuelve una redirectUrl
// que apunta a la página de éxito con un orderId fake. Cuando configuremos
// Mercado Pago, esto pasa a crear una preference real con la SDK oficial y
// devuelve `init_point`. El frontend ya está preparado: solo cambia esta función.
//
// Para activar Mercado Pago real:
//   1. npm i mercadopago
//   2. vercel env add MP_ACCESS_TOKEN  (paste el token PROD o TEST)
//   3. Reemplazar el bloque marcado abajo con la llamada al SDK
//
// Docs: https://www.mercadopago.com.ar/developers/es/docs/checkout-pro

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { cart, customer, totals } = req.body || {}

  if (!Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: 'Carrito vacío' })
  }
  if (!customer?.email || !customer?.nombre) {
    return res.status(400).json({ error: 'Datos del cliente incompletos' })
  }

  const origin = `https://${req.headers.host}`

  // ─── BLOQUE A REEMPLAZAR cuando conectemos Mercado Pago ────────────────
  // const { MercadoPagoConfig, Preference } = require('mercadopago')
  // const mp = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN })
  // const pref = await new Preference(mp).create({
  //   body: {
  //     items: cart.map(...),
  //     payer: { name: customer.nombre, email: customer.email, ... },
  //     back_urls: {
  //       success: `${origin}/checkout/exito`,
  //       failure: `${origin}/checkout/error`,
  //       pending: `${origin}/checkout/pendiente`
  //     },
  //     auto_return: 'approved',
  //     notification_url: `${origin}/api/mp-webhook`
  //   }
  // })
  // return res.status(200).json({ redirectUrl: pref.init_point })
  // ───────────────────────────────────────────────────────────────────────

  // Stub: simulamos un orderId y mandamos directo a la página de éxito.
  const orderId = 'STUB-' + Math.random().toString(36).slice(2, 10).toUpperCase()
  console.log('[checkout stub]', {
    orderId,
    customer: { email: customer.email, nombre: customer.nombre },
    items: cart.length,
    total: totals?.total
  })

  return res.status(200).json({
    redirectUrl: `${origin}/checkout/exito?orderId=${orderId}&stub=true`
  })
}
