export default function CheckoutError({ onNavigate }) {
  return (
    <main className="container checkout-result">
      <div className="checkout-result-card checkout-result-card--error">
        <div className="checkout-result-icon">!</div>
        <h1 className="checkout-result-title">No pudimos procesar el pago</h1>
        <p className="checkout-result-sub">
          El pago fue rechazado o cancelado. Tus productos siguen en la bolsa,
          podés reintentar el checkout cuando quieras.
        </p>
        <div className="checkout-result-actions">
          <button className="checkout-result-btn" onClick={() => onNavigate('/checkout')}>
            Reintentar pago
          </button>
          <button className="checkout-result-btn checkout-result-btn--ghost" onClick={() => onNavigate('/')}>
            Volver al catálogo
          </button>
        </div>
      </div>
    </main>
  )
}
