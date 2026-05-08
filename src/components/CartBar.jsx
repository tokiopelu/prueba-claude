import { buildCartView } from '../lib/cart.js'

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

export default function CartBar({ cart, onOpen }) {
  if (cart.length === 0) return null
  const view = buildCartView(cart)
  return (
    <button className="cart-bar" onClick={onOpen}>
      <span className="cart-bar-count">{view.itemCount}</span>
      <span className="cart-bar-text">
        {view.itemCount === 1 ? 'producto en tu carrito' : 'productos en tu carrito'}
      </span>
      <span className="cart-bar-price">${formatARS(view.total)}</span>
      <span className="cart-bar-action">Ver carrito →</span>
    </button>
  )
}
