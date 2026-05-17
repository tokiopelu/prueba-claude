// Run after `vite build` to emit dist/sitemap.xml with all product URLs.
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://romahair.vercel.app'

const productsPath = resolve(__dirname, '../src/data/products.js')
const { products } = await import(pathToFileURL(productsPath).href)

const today = new Date().toISOString().slice(0, 10)

const urls = [
  { loc: `${SITE_URL}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${SITE_URL}/quiz`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITE_URL}/favoritos`, changefreq: 'monthly', priority: '0.3' },
  ...products.map(p => ({
    loc: `${SITE_URL}/p/${encodeURIComponent(p.id)}`,
    changefreq: 'weekly',
    priority: '0.8'
  }))
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const outPath = resolve(__dirname, '../dist/sitemap.xml')
writeFileSync(outPath, xml, 'utf8')
console.log(`✓ sitemap.xml written with ${urls.length} URLs → ${outPath}`)
