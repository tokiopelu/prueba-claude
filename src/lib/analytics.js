const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

let loaded = false

export function loadAnalytics() {
  if (loaded || !GA_ID || typeof window === 'undefined') return
  loaded = true

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true })
}

export function trackPageView(path, title) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  })
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', name, params)
}

export const ANALYTICS_ENABLED = Boolean(GA_ID)
