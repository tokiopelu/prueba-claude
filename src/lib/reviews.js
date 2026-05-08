import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'romabeauty:reviews:v1'

function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    /* ignore */
  }
}

function makeId() {
  return `r_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

export function useReviews() {
  const [all, setAll] = useState(loadAll)

  useEffect(() => {
    saveAll(all)
  }, [all])

  const addReview = useCallback(({ productId, user, rating, text }) => {
    if (!user?.email || !productId) return null
    const cleanRating = Math.max(1, Math.min(5, Math.round(rating || 0)))
    const cleanText = (text || '').trim().slice(0, 1000)
    const review = {
      id: makeId(),
      productId,
      userEmail: user.email,
      userName: user.firstName || user.name || user.email.split('@')[0],
      userAvatar: user.avatar || null,
      rating: cleanRating,
      text: cleanText,
      createdAt: new Date().toISOString()
    }
    setAll(prev => {
      // One review per user per product. Replace existing.
      const without = prev.filter(r => !(r.productId === productId && r.userEmail === user.email))
      return [review, ...without]
    })
    return review
  }, [])

  const removeReview = useCallback((id, userEmail) => {
    setAll(prev => prev.filter(r => !(r.id === id && r.userEmail === userEmail)))
  }, [])

  const getProductReviews = useCallback(productId => {
    return all
      .filter(r => r.productId === productId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  }, [all])

  const getMyReview = useCallback((productId, userEmail) => {
    if (!userEmail) return null
    return all.find(r => r.productId === productId && r.userEmail === userEmail) || null
  }, [all])

  const getProductStats = useCallback(productId => {
    const reviews = all.filter(r => r.productId === productId)
    if (reviews.length === 0) {
      return { count: 0, average: 0, distribution: [0, 0, 0, 0, 0] }
    }
    const distribution = [0, 0, 0, 0, 0]
    let sum = 0
    for (const r of reviews) {
      distribution[r.rating - 1]++
      sum += r.rating
    }
    return {
      count: reviews.length,
      average: sum / reviews.length,
      distribution
    }
  }, [all])

  return {
    addReview,
    removeReview,
    getProductReviews,
    getMyReview,
    getProductStats
  }
}
