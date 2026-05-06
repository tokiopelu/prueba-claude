// Compute a 0-100 score per product, normalized within the selected set.
// Weights are tuneable from the UI.
export function rankProducts(items, weights) {
  if (items.length === 0) return []

  const ratings = items.map(p => p.rating)
  const reviews = items.map(p => p.reviews)
  const prices = items.map(p => p.price)

  const minR = Math.min(...ratings)
  const maxR = Math.max(...ratings)
  const minN = Math.min(...reviews)
  const maxN = Math.max(...reviews)
  const minP = Math.min(...prices)
  const maxP = Math.max(...prices)

  const norm = (v, min, max) => (max === min ? 1 : (v - min) / (max - min))
  const invNorm = (v, min, max) => (max === min ? 1 : 1 - (v - min) / (max - min))

  const totalW = weights.rating + weights.reviews + weights.price || 1

  return items
    .map(p => {
      const ratingScore = norm(p.rating, minR, maxR)
      const reviewsScore = norm(p.reviews, minN, maxN)
      const priceScore = invNorm(p.price, minP, maxP)
      const score =
        (ratingScore * weights.rating +
          reviewsScore * weights.reviews +
          priceScore * weights.price) /
        totalW
      return { ...p, score: Math.round(score * 100) }
    })
    .sort((a, b) => b.score - a.score)
}
