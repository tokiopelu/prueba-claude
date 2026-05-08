// Deterministic per-product sale metadata. Same product id always returns the
// same offer + urgency so the page is stable on refresh.

function hash(id) {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0
  return Math.abs(h)
}

const DISCOUNT_TIERS = [15, 20, 25, 30, 35]
const URGENCY = [
  '¡Últimas unidades!',
  'Pocas en stock',
  '¡No te lo pierdas!',
  'Más vendido'
]

// Promo windows are anchored to the start of each ISO week (Monday 00:00 local)
// so all clients see the same countdown. Each on-sale product gets either a
// 3-day or 7-day window based on its hash.
function currentPromoEnd(h) {
  const now = new Date()
  const day = now.getDay() // 0=Sun..6=Sat
  const daysSinceMonday = (day + 6) % 7
  const monday = new Date(now)
  monday.setHours(0, 0, 0, 0)
  monday.setDate(monday.getDate() - daysSinceMonday)
  // 3-day windows end Wednesday 23:59:59; 7-day windows end Sunday 23:59:59
  const isShort = h % 2 === 0
  const end = new Date(monday)
  end.setDate(monday.getDate() + (isShort ? 3 : 7))
  end.setHours(23, 59, 59, 999)
  return end.getTime()
}

export function productMeta(p) {
  const h = hash(p.id)

  // ~33% of products on sale
  let discount = 0
  if (h % 3 === 0) discount = DISCOUNT_TIERS[h % DISCOUNT_TIERS.length]

  // Stock urgency on a different ~22% of products
  let urgency = null
  if (h % 9 === 0) urgency = URGENCY[h % URGENCY.length]
  else if (h % 7 === 0 && discount > 0) urgency = '¡No te lo pierdas!'

  // Installments — most products eligible
  const installmentMonths = 6
  const finalPrice = discount > 0
    ? Math.round((p.price * (100 - discount)) / 100 / 100) * 100
    : p.price
  const installmentValue = Math.round(finalPrice / installmentMonths / 100) * 100

  const promoEndsAt = discount > 0 ? currentPromoEnd(h) : null

  return {
    discount,
    urgency,
    finalPrice,
    installmentMonths,
    installmentValue,
    promoEndsAt
  }
}
