import { useCallback, useEffect, useState } from 'react'
import { products } from '../data/products.js'

const STORAGE_KEY = 'romabeauty:wishlist:v1'

function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

function saveAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    /* ignore */
  }
}

export function useWishlist(user) {
  const [all, setAll] = useState(loadAll)

  useEffect(() => {
    saveAll(all)
  }, [all])

  const userKey = user?.email || null
  const ids = userKey ? all[userKey] || [] : []
  const validIds = new Set(products.map(p => p.id))
  const cleanIds = ids.filter(id => validIds.has(id))

  const toggle = useCallback(id => {
    if (!userKey) return
    setAll(prev => {
      const current = prev[userKey] || []
      const next = current.includes(id)
        ? current.filter(x => x !== id)
        : [...current, id]
      return { ...prev, [userKey]: next }
    })
  }, [userKey])

  const remove = useCallback(id => {
    if (!userKey) return
    setAll(prev => {
      const current = prev[userKey] || []
      return { ...prev, [userKey]: current.filter(x => x !== id) }
    })
  }, [userKey])

  const has = useCallback(id => cleanIds.includes(id), [cleanIds])

  const items = cleanIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean)

  return {
    ids: cleanIds,
    items,
    count: cleanIds.length,
    has,
    toggle,
    remove
  }
}
