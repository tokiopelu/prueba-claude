import { useEffect } from 'react'
import { getQuery } from '../lib/route.js'

export default function CheckoutSuccess({ onClearCart, onMarkDiscountUsed, onNavigate }) {
  const orderId = getQuery('orderId') || getQuery('payment_id') || '—'
  const isStub = getQuery('stub') === 'true'

  useEffect(() => {
    onClearCart()
    onMarkDiscountUsed?.()
  }, [onClearCart, onMarkDiscountUsed])

  return (
    <main className="container checkout-result">
      <div className="checkout-result-card checkout-result-card--success">
        <div className="checkout-result-icon">✓</div>
        <h1 className="checkout-result-title">¡Gracias por tu compra!</h1>
        <p className="checkout-result-sub">
          Recibimos tu pedido. Te vamos a escribir por email con el detalle del envío.
        </p>
        <div className="checkout-result-meta">
          <span className="checkout-result-meta-label">N° de orden</span>
          <span className="checkout-result-meta-val">{orderId}</span>
        </div>
        {isStub && (
          <div className="checkout-result-stub">
            <strong>Modo demo:</strong> esta orden no se cobró de verdad.
            Para activar Mercado Pago real, configurá <code>MP_ACCESS_TOKEN</code> en Vercel.
          </div>
        )}
        <button className="checkout-result-btn" onClick={() => onNavigate('/')}>
          Volver al catálogo
        </button>
      </div>
    </main>
  )
}
