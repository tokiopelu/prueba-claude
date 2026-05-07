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
    const node = ref.current
    if (!node) return

    // Already in viewport at mount → reveal immediately so filter changes don't
    // re-fade the visible row. The IntersectionObserver fires async (next frame),
    // which causes a 1-frame flash for re-mounted in-view elements.
    const rect = node.getBoundingClientRect()
    const inViewport =
      rect.top < window.innerHeight && rect.bottom > 0 &&
      rect.left < window.innerWidth && rect.right > 0
    if (inViewport) {
      node.classList.add('is-visible')
      return
    }

    const obs = getObserver()
    if (!obs) {
      node.classList.add('is-visible')
      return
    }
    obs.observe(node)
    return () => obs.unobserve(node)
  }, [])
  return ref
}
