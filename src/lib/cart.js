import { useEffect, useState } from 'react'
import { products } from '../data/products.js'
import { productMeta } from './meta.js'

const STORAGE_KEY = 'romabeauty:cart:v1'
const SHIPPING_COST = 4500
const FREE_SHIPPING_FROM = 80000

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    const validIds = new Set(products.map(p => p.id))
    return parsed.filter(
      x => x && validIds.has(x.id) && Number.isFinite(x.qty) && x.qty > 0
    )
  } catch {
    return []
  }
}

function save(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  } catch {
    /* quota or disabled storage — ignore */
  }
}

export function useCart() {
  const [cart, setCart] = useState(load)

  useEffect(() => {
    save(cart)
  }, [cart])

  function add(id) {
    setCart(prev => {
      const existing = prev.find(x => x.id === id)
      if (existing) {
        return prev.map(x => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
      }
      return [...prev, { id, qty: 1 }]
    })
  }

  function remove(id) {
    setCart(prev => prev.filter(x => x.id !== id))
  }

  function setQty(id, qty) {
    setCart(prev =>
      qty <= 0
        ? prev.filter(x => x.id !== id)
        : prev.map(x => (x.id === id ? { ...x, qty } : x))
    )
  }

  function clear() {
    setCart([])
  }

  function qtyOf(id) {
    return cart.find(x => x.id === id)?.qty ?? 0
  }

  return { cart, add, remove, setQty, clear, qtyOf }
}

export function buildCartView(cart, opts = {}) {
  const lines = cart
    .map(({ id, qty }) => {
      const product = products.find(p => p.id === id)
      if (!product) return null
      const meta = productMeta(product)
      const unit = meta.finalPrice
      return {
        id,
        product,
        meta,
        qty,
        unit,
        lineTotal: unit * qty
      }
    })
    .filter(Boolean)

  const itemCount = lines.reduce((acc, l) => acc + l.qty, 0)
  const subtotal = lines.reduce((acc, l) => acc + l.lineTotal, 0)

  const discountActive = !!opts.discountActive && lines.length > 0
  const discountRate = discountActive ? (opts.discountRate || 0) : 0
  const discount = discountActive ? Math.round(subtotal * discountRate) : 0
  const subtotalAfterDiscount = subtotal - discount

  const freeShipping = subtotal >= FREE_SHIPPING_FROM
  const shipping = lines.length === 0 || freeShipping ? 0 : SHIPPING_COST
  const total = subtotalAfterDiscount + shipping

  return {
    lines,
    itemCount,
    subtotal,
    discount,
    discountRate,
    discountActive,
    subtotalAfterDiscount,
    shipping,
    freeShipping,
    freeShippingFrom: FREE_SHIPPING_FROM,
    freeShippingMissing: Math.max(0, FREE_SHIPPING_FROM - subtotal),
    total
  }
}
