import Catalog from '../components/Catalog.jsx'

export default function Wishlist({ user, items, qtyOf, onAdd, onSetQty, onProductClick, onSignIn, onNavigate }) {
  if (!user) {
    return (
      <main className="container checkout-empty">
        <div className="checkout-gate-icon" aria-hidden>🔒</div>
        <h1 className="checkout-title">Iniciá sesión para ver tus favoritos</h1>
        <p className="checkout-empty-sub">
          Guardá tus productos preferidos para volver a comprarlos en cualquier momento.
        </p>
        <div className="checkout-gate-actions">
          <button className="checkout-back-btn" onClick={onSignIn}>Iniciar sesión</button>
          <button className="checkout-back-btn checkout-back-btn--ghost" onClick={() => onNavigate('/')}>
            Volver al catálogo
          </button>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="container checkout-empty">
        <div className="checkout-gate-icon" aria-hidden>♡</div>
        <h1 className="checkout-title">Todavía no tenés favoritos</h1>
        <p className="checkout-empty-sub">
          Tocá el corazón en cualquier producto del catálogo para guardarlo acá.
        </p>
        <button className="checkout-back-btn" onClick={() => onNavigate('/')}>
          Explorar catálogo
        </button>
      </main>
    )
  }

  return (
    <main className="container main-stack">
      <Catalog
        products={items}
        qtyOf={qtyOf}
        onAdd={onAdd}
        onSetQty={onSetQty}
        onProductClick={onProductClick}
        title={`♡ Tus favoritos · ${items.length} ${items.length === 1 ? 'producto' : 'productos'}`}
        subtitle={<>Productos que guardaste para más tarde.</>}
      />
    </main>
  )
}
