import { useEffect, useRef } from 'react'

let sharedObserver = null

function getObserver() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return null
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sharedObserver.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
  }
  return sharedObserver
}

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = getObserver()
    const node = ref.current
    if (!obs || !node) return
    obs.observe(node)
    return () => obs.unobserve(node)
  }, [])
  return ref
}
