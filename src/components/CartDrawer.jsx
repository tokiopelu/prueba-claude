import { useEffect } from 'react'
import { buildCartView } from '../lib/cart.js'

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

export default function CartDrawer({ cart, discount, user, onSetQty, onRemove, isOpen, onClose, onCheckout, onProductClick, onSignIn, onOpenPromo }) {
  const view = buildCartView(cart, {
    discountActive: discount?.isActive,
    discountRate: discount?.rate
  })

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  return (
    <div className={'cart-drawer-root' + (isOpen ? ' is-open' : '')} aria-hidden={!isOpen}>
      <div className="cart-drawer-backdrop" onClick={onClose} />
      <aside className="cart-drawer" role="dialog" aria-label="Tu carrito">
        <header className="cart-drawer-head">
          <div>
            <div className="cart-drawer-eyebrow">Tu carrito</div>
            <h3 className="cart-drawer-title">
              {view.itemCount === 0
                ? 'Vacía por ahora'
                : `${view.itemCount} ${view.itemCount === 1 ? 'producto' : 'productos'}`}
            </h3>
          </div>
          <button className="cart-drawer-close" onClick={onClose} aria-label="Cerrar carrito">×</button>
        </header>

        {view.lines.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-title">Tu carrito está vacío.</p>
            <p className="cart-empty-sub">
              Sumá productos del catálogo para empezar.
            </p>
            <button className="cart-empty-btn" onClick={onClose}>Seguir explorando</button>
          </div>
        ) : (
          <>
            {!user && (
              <button className="cart-promo-banner" onClick={onSignIn}>
                <span className="cart-promo-emoji" aria-hidden>🎁</span>
                <span className="cart-promo-text">
                  Iniciá sesión y llevate <strong>10% off</strong> de bienvenida
                </span>
                <span className="cart-promo-cta">Entrar →</span>
              </button>
            )}
            {user && discount?.isEligible && (
              <button className="cart-promo-banner cart-promo-banner--claim" onClick={onOpenPromo}>
                <span className="cart-promo-emoji" aria-hidden>🎁</span>
                <span className="cart-promo-text">
                  Tenés <strong>10% off</strong> sin reclamar este mes
                </span>
                <span className="cart-promo-cta">Reclamar →</span>
              </button>
            )}
            {!view.freeShipping && view.lines.length > 0 && (
              <div className="cart-ship-progress">
                <div className="cart-ship-text">
                  Te faltan <strong>${formatARS(view.freeShippingMissing)}</strong> para envío gratis
                </div>
                <div className="cart-ship-bar">
                  <div
                    className="cart-ship-fill"
                    style={{ width: `${Math.min(100, (view.subtotal / view.freeShippingFrom) * 100)}%` }}
                  />
                </div>
              </div>
            )}
            {view.freeShipping && (
              <div className="cart-ship-won">✓ Envío gratis incluido</div>
            )}

            <ul className="cart-lines">
              {view.lines.map(line => (
                <li key={line.id} className="cart-line">
                  <button
                    type="button"
                    className="cart-line-img"
                    onClick={() => onProductClick?.(line.id)}
                    aria-label={`Ver ${line.product.name}`}
                  >
                    {line.product.imageUrl
                      ? <img src={line.product.imageUrl} alt={line.product.name} loading="lazy" />
                      : <span>{line.product.image}</span>}
                  </button>
                  <div className="cart-line-body">
                    <div className="cart-line-brand">{line.product.brand}</div>
                    <button
                      type="button"
                      className="cart-line-name"
                      onClick={() => onProductClick?.(line.id)}
                    >
                      {line.product.name}
                    </button>
                    <div className="cart-line-foot">
                      <div className="cart-qty">
                        <button
                          className="cart-qty-btn"
                          onClick={() => onSetQty(line.id, line.qty - 1)}
                          aria-label="Quitar uno"
                        >−</button>
                        <span className="cart-qty-val">{line.qty}</span>
                        <button
                          className="cart-qty-btn"
                          onClick={() => onSetQty(line.id, line.qty + 1)}
                          aria-label="Sumar uno"
                        >+</button>
                      </div>
                      <div className="cart-line-price">${formatARS(line.lineTotal)}</div>
                    </div>
                  </div>
                  <button
                    className="cart-line-remove"
                    onClick={() => onRemove(line.id)}
                    aria-label={`Quitar ${line.product.name}`}
                  >×</button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div className="cart-row">
                <span>Subtotal</span>
                <span className="cart-num">${formatARS(view.subtotal)}</span>
              </div>
              {view.discountActive && (
                <div className="cart-row cart-row--discount">
                  <span>Descuento bienvenida (10%)</span>
                  <span className="cart-num">−${formatARS(view.discount)}</span>
                </div>
              )}
              <div className="cart-row">
                <span>Envío</span>
                <span className="cart-num">
                  {view.shipping === 0 ? 'Gratis' : `$${formatARS(view.shipping)}`}
                </span>
              </div>
              <div className="cart-row cart-row--total">
                <span>Total</span>
                <span className="cart-num">${formatARS(view.total)}</span>
              </div>
              <button className="cart-checkout-btn" onClick={onCheckout}>
                Continuar al checkout
              </button>
              <p className="cart-trust">
                Pago seguro con Mercado Pago · 3 cuotas sin interés
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
