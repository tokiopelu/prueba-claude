import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'romabeauty:discount:v1'
export const DISCOUNT_RATE = 0.10

const MONTH_NAMES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]

function monthKey(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  return `${y}-${m}`
}

function monthLabel(d = new Date()) {
  return `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`
}

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

export function useDiscount(user) {
  const [all, setAll] = useState(loadAll)

  useEffect(() => {
    saveAll(all)
  }, [all])

  const userKey = user?.email || null
  const month = monthKey()
  const userState = userKey ? all[userKey] || {} : {}
  const monthEntry = userState[month] || null

  const isClaimed = !!monthEntry
  const isUsed = !!(monthEntry && monthEntry.usedAt)
  const isActive = isClaimed && !isUsed
  const isEligible = !!userKey && !isClaimed

  const claim = useCallback(() => {
    if (!userKey) return
    setAll(prev => {
      const u = prev[userKey] || {}
      if (u[month]) return prev
      return {
        ...prev,
        [userKey]: { ...u, [month]: { claimedAt: new Date().toISOString(), usedAt: null } }
      }
    })
  }, [userKey, month])

  const markUsed = useCallback(() => {
    if (!userKey) return
    setAll(prev => {
      const u = prev[userKey] || {}
      if (!u[month] || u[month].usedAt) return prev
      return {
        ...prev,
        [userKey]: { ...u, [month]: { ...u[month], usedAt: new Date().toISOString() } }
      }
    })
  }, [userKey, month])

  return {
    rate: DISCOUNT_RATE,
    monthLabel: monthLabel(),
    isClaimed,
    isUsed,
    isActive,
    isEligible,
    claim,
    markUsed
  }
}
