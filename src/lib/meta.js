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

  return {
    discount,
    urgency,
    finalPrice,
    installmentMonths,
    installmentValue
  }
}
