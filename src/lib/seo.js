import { useEffect } from 'react'

const SITE_URL = 'https://romabeauty.vercel.app'
const SITE_NAME = 'ROMAbeauty'
const DEFAULT_IMAGE = `${SITE_URL}/og-default.jpg`

function setMetaTag(key, value, isProperty = false) {
  if (!value) return
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setLinkTag(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function clearJsonLd(id) {
  const el = document.getElementById(id)
  if (el) el.remove()
}

export function useSEO(opts) {
  const skip = opts === null || opts === undefined || opts.skip === true
  const { title, description, image, path, jsonLd } = opts || {}
  const fullTitle = title ? `${SITE_NAME} · ${title}` : `${SITE_NAME} · cuidado capilar profesional`
  const fullImage = image || DEFAULT_IMAGE
  const fullUrl = `${SITE_URL}${path || '/'}`

  useEffect(() => {
    if (skip) return
    document.title = fullTitle
    setMetaTag('description', description)
    setMetaTag('og:title', fullTitle, true)
    setMetaTag('og:description', description, true)
    setMetaTag('og:image', fullImage, true)
    setMetaTag('og:url', fullUrl, true)
    setMetaTag('og:type', path?.startsWith('/p/') ? 'product' : 'website', true)
    setMetaTag('og:site_name', SITE_NAME, true)
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', fullTitle)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', fullImage)
    setLinkTag('canonical', fullUrl)

    if (jsonLd) {
      setJsonLd('seo-route-jsonld', jsonLd)
    } else {
      clearJsonLd('seo-route-jsonld')
    }
  }, [skip, fullTitle, description, fullImage, fullUrl, jsonLd && JSON.stringify(jsonLd)])
}

export function buildProductJsonLd(product, meta) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.imageUrl ? [product.imageUrl] : undefined,
    description: product.description,
    sku: product.id,
    brand: { '@type': 'Brand', name: product.brand },
    aggregateRating: product.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          reviewCount: product.reviews || 0
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/p/${product.id}`,
      priceCurrency: 'ARS',
      price: meta?.finalPrice || product.price,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE_NAME }
    }
  }
}

export { SITE_URL, SITE_NAME, DEFAULT_IMAGE }
