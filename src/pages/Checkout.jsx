import { useState } from 'react'
import { buildCartView } from '../lib/cart.js'

const PROVINCIAS = [
  'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
  'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
  'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
  'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
  'Tierra del Fuego', 'Tucumán'
]

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

export default function Checkout({ cart, onNavigate }) {
  const view = buildCartView(cart)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    calle: '',
    numero: '',
    depto: '',
    ciudad: '',
    provincia: 'CABA',
    cp: ''
  })

  function update(field, value) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (cart.length === 0) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cart,
          customer: form,
          totals: { subtotal: view.subtotal, shipping: view.shipping, total: view.total }
        })
      })
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || `HTTP ${res.status}`)
      }
      const data = await res.json()
      if (!data.redirectUrl) throw new Error('Respuesta inválida del servidor')
      window.location.href = data.redirectUrl
    } catch (err) {
      setError(err.message || 'No pudimos iniciar el pago. Probá de nuevo.')
      setSubmitting(false)
    }
  }

  if (cart.length === 0) {
    return (
      <main className="container checkout-empty">
        <h1 className="checkout-title">Tu carrito está vacío</h1>
        <p className="checkout-empty-sub">Sumá productos al catálogo antes de continuar.</p>
        <button className="checkout-back-btn" onClick={() => onNavigate('/')}>
          Volver al catálogo
        </button>
      </main>
    )
  }

  return (
    <main className="container checkout-page">
      <button className="checkout-back" onClick={() => onNavigate('/')}>← Seguir comprando</button>
      <h1 className="checkout-title">Finalizá tu compra</h1>

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={onSubmit} noValidate>
          <fieldset className="form-block">
            <legend className="form-legend">Tus datos</legend>
            <div className="form-row">
              <label className="form-field">
                <span>Nombre</span>
                <input required value={form.nombre} onChange={e => update('nombre', e.target.value)} autoComplete="given-name" />
              </label>
              <label className="form-field">
                <span>Apellido</span>
                <input required value={form.apellido} onChange={e => update('apellido', e.target.value)} autoComplete="family-name" />
              </label>
            </div>
            <div className="form-row">
              <label className="form-field">
                <span>Email</span>
                <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} autoComplete="email" />
              </label>
              <label className="form-field">
                <span>Teléfono</span>
                <input type="tel" required value={form.telefono} onChange={e => update('telefono', e.target.value)} autoComplete="tel" placeholder="11 5555-5555" />
              </label>
            </div>
          </fieldset>

          <fieldset className="form-block">
            <legend className="form-legend">Dirección de envío</legend>
            <div className="form-row form-row--3-1">
              <label className="form-field">
                <span>Calle</span>
                <input required value={form.calle} onChange={e => update('calle', e.target.value)} autoComplete="address-line1" />
              </label>
              <label className="form-field">
                <span>Número</span>
                <input required value={form.numero} onChange={e => update('numero', e.target.value)} />
              </label>
            </div>
            <div className="form-row">
              <label className="form-field">
                <span>Depto / piso (opcional)</span>
                <input value={form.depto} onChange={e => update('depto', e.target.value)} autoComplete="address-line2" />
              </label>
              <label className="form-field">
                <span>Código postal</span>
                <input required value={form.cp} onChange={e => update('cp', e.target.value)} autoComplete="postal-code" inputMode="numeric" />
              </label>
            </div>
            <div className="form-row">
              <label className="form-field">
                <span>Ciudad</span>
                <input required value={form.ciudad} onChange={e => update('ciudad', e.target.value)} autoComplete="address-level2" />
              </label>
              <label className="form-field">
                <span>Provincia</span>
                <select value={form.provincia} onChange={e => update('provincia', e.target.value)} autoComplete="address-level1">
                  {PROVINCIAS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </label>
            </div>
          </fieldset>

          {error && (
            <div className="form-error">{error}</div>
          )}

          <button className="checkout-submit" type="submit" disabled={submitting}>
            {submitting ? 'Redirigiendo a Mercado Pago…' : `Pagar $${formatARS(view.total)} con Mercado Pago`}
          </button>
          <p className="checkout-trust">
            Vas a ser redirigido a Mercado Pago para completar el pago de forma segura.
          </p>
        </form>

        <aside className="checkout-summary">
          <h3 className="checkout-summary-h">Tu pedido</h3>
          <ul className="checkout-summary-lines">
            {view.lines.map(line => (
              <li key={line.id}>
                <div className="checkout-summary-img">
                  {line.product.imageUrl
                    ? <img src={line.product.imageUrl} alt="" loading="lazy" />
                    : <span>{line.product.image}</span>}
                  <span className="checkout-summary-qty">{line.qty}</span>
                </div>
                <div className="checkout-summary-info">
                  <div className="checkout-summary-name">{line.product.name}</div>
                  <div className="checkout-summary-brand">{line.product.brand}</div>
                </div>
                <div className="checkout-summary-price">${formatARS(line.lineTotal)}</div>
              </li>
            ))}
          </ul>
          <div className="checkout-summary-totals">
            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <span>${formatARS(view.subtotal)}</span>
            </div>
            <div className="checkout-summary-row">
              <span>Envío</span>
              <span>{view.shipping === 0 ? 'Gratis' : `$${formatARS(view.shipping)}`}</span>
            </div>
            <div className="checkout-summary-row checkout-summary-row--total">
              <span>Total</span>
              <span>${formatARS(view.total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
