import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'romabeauty:user:v1'
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed && parsed.email ? parsed : null
  } catch {
    return null
  }
}

export function decodeGoogleCredential(token) {
  if (!token || typeof token !== 'string') return null
  const parts = token.split('.')
  if (parts.length < 2) return null
  const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4)
  try {
    const bin = atob(padded)
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0))
    const json = new TextDecoder().decode(bytes)
    const data = JSON.parse(json)
    if (!data.email) return null
    const fullName = data.name || data.email
    return {
      provider: 'google',
      email: data.email,
      name: fullName,
      firstName: data.given_name || fullName.split(' ')[0] || fullName,
      avatar: data.picture || null,
      sub: data.sub || data.email
    }
  } catch {
    return null
  }
}

function demoUserFromEmail(email) {
  const clean = (email || '').trim()
  if (!clean.includes('@')) return null
  const handle = clean.split('@')[0].replace(/[._-]+/g, ' ').trim()
  const name = handle
    .split(' ')
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ') || clean
  return {
    provider: 'demo',
    email: clean,
    name,
    firstName: name.split(' ')[0] || name,
    avatar: null,
    sub: `demo:${clean}`
  }
}

export function useAuth() {
  const [user, setUser] = useState(load)

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* storage disabled — ignore */
    }
  }, [user])

  const signInWithGoogleCredential = useCallback(token => {
    const u = decodeGoogleCredential(token)
    if (u) setUser(u)
    return u
  }, [])

  const signInDemo = useCallback(email => {
    const u = demoUserFromEmail(email)
    if (u) setUser(u)
    return u
  }, [])

  const signOut = useCallback(() => setUser(null), [])

  return { user, signInWithGoogleCredential, signInDemo, signOut }
}
