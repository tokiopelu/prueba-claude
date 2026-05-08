import { useEffect } from 'react'

export default function CheckoutPending({ onClearCart, onNavigate }) {
  useEffect(() => {
    onClearCart()
  }, [onClearCart])

  return (
    <main className="container checkout-result">
      <div className="checkout-result-card checkout-result-card--pending">
        <div className="checkout-result-icon">…</div>
        <h1 className="checkout-result-title">Tu pago está pendiente</h1>
        <p className="checkout-result-sub">
          Mercado Pago está procesando tu pago (puede tardar unos minutos si pagaste con
          efectivo en Pago Fácil o Rapipago). En cuanto se acredite te avisamos por email.
        </p>
        <button className="checkout-result-btn" onClick={() => onNavigate('/')}>
          Volver al catálogo
        </button>
      </div>
    </main>
  )
}
