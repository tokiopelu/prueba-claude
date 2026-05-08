import { useEffect, useState } from 'react'

export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    function onPop() {
      setPath(window.location.pathname)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  function navigate(to, { replace = false } = {}) {
    if (to === window.location.pathname + window.location.search) return
    if (replace) window.history.replaceState({}, '', to)
    else window.history.pushState({}, '', to)
    setPath(window.location.pathname)
    window.scrollTo(0, 0)
  }

  return { path, navigate }
}

export function getQuery(name) {
  return new URLSearchParams(window.location.search).get(name)
}
