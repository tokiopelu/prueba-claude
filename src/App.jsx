import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Chips from './components/Chips.jsx'
import Ranking from './components/Ranking.jsx'
import WeightControls from './components/WeightControls.jsx'
import Catalog from './components/Catalog.jsx'
import TopBar from './components/TopBar.jsx'
import { products, subcategories, brands } from './data/products.js'
import { rankProducts } from './lib/score.js'
import { productMeta } from './lib/meta.js'

export default function App() {
  const [selectedIds, setSelectedIds] = useState([])
  const [activeSubcategory, setActiveSubcategory] = useState('Todos')
  const [activeBrand, setActiveBrand] = useState('Todas')
  const [weights, setWeights] = useState({ rating: 50, reviews: 30, price: 20 })
  const [showWeights, setShowWeights] = useState(false)

  const selected = useMemo(
    () => selectedIds.map(id => products.find(p => p.id === id)).filter(Boolean),
    [selectedIds]
  )

  const filtered = useMemo(() => {
    return selected.filter(p =>
      (activeSubcategory === 'Todos' || p.subcategory === activeSubcategory) &&
      (activeBrand === 'Todas' || p.brand === activeBrand)
    )
  }, [selected, activeSubcategory, activeBrand])

  const catalogFiltered = useMemo(() => {
    return products.filter(p =>
      (activeSubcategory === 'Todos' || p.subcategory === activeSubcategory) &&
      (activeBrand === 'Todas' || p.brand === activeBrand)
    )
  }, [activeSubcategory, activeBrand])

  const offersFeed = useMemo(() => {
    return catalogFiltered
      .map(p => ({ p, m: productMeta(p) }))
      .filter(x => x.m.discount > 0)
      .sort((a, b) => b.m.discount - a.m.discount)
      .slice(0, 8)
      .map(x => x.p)
  }, [catalogFiltered])

  const ranked = useMemo(() => rankProducts(filtered, weights), [filtered, weights])

  function add(id) {
    setSelectedIds(prev => (prev.includes(id) ? prev : [...prev, id]))
  }
  function remove(id) {
    setSelectedIds(prev => prev.filter(x => x !== id))
  }
  function clear() {
    setSelectedIds([])
  }

  const showRanking = ranked.length > 0

  return (
    <div className="app">
      <TopBar />
      <header className="site-header">
        <div className="container header-row">
          <a href="/" className="brand">
            <span className="brand-mark">R</span>
            <span className="brand-name">
              <span className="brand-name-mark">ROMA</span>
              <span className="brand-name-italic">beauty</span>
            </span>
          </a>
          {selectedIds.length > 0 && (
            <a href="#comparar" className="nav-cta">
              Ver comparación · {selectedIds.length}
            </a>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-eyebrow">Cuidado capilar profesional · {products.length} productos seleccionados</div>
          <h1 className="hero-title">
            La belleza, en su forma <em>más cuidada</em>.
          </h1>

          <div className="search-shell">
            <SearchBar
              products={products}
              selectedIds={selectedIds}
              onAdd={add}
            />
          </div>

          <div className="filter-section">
            <div className="filter-bar">
              <button
                className={'pill pill--brand' + (activeBrand === 'Todas' ? ' is-on' : '')}
                onClick={() => setActiveBrand('Todas')}
              >
                Todas las marcas
              </button>
              {brands.map(b => (
                <button
                  key={b}
                  className={'pill pill--brand' + (activeBrand === b ? ' is-on' : '')}
                  onClick={() => setActiveBrand(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section filter-section--types">
            <div className="filter-bar">
              <button
                className={'pill' + (activeSubcategory === 'Todos' ? ' is-on' : '')}
                onClick={() => setActiveSubcategory('Todos')}
              >
                Todos
              </button>
              {subcategories.map(c => (
                <button
                  key={c}
                  className={'pill' + (activeSubcategory === c ? ' is-on' : '')}
                  onClick={() => setActiveSubcategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container main-stack">
        {offersFeed.length > 0 && (
          <Catalog
            products={offersFeed}
            selectedIds={selectedIds}
            onAdd={add}
            onRemove={remove}
            title={`🔥 Ofertas · ${offersFeed.length} productos en promo`}
            subtitle={<>Promos por tiempo limitado. <strong>¡No te lo pierdas!</strong></>}
          />
        )}

        <Catalog
          products={catalogFiltered}
          selectedIds={selectedIds}
          onAdd={add}
          onRemove={remove}
          title={`🛍️ Catálogo · ${catalogFiltered.length} productos`}
        />

        {showRanking && (
          <section id="comparar" className="ranking-section">
            <div className="ranking-section-head">
              <div>
                <Chips items={selected} onRemove={remove} onClear={clear} />
              </div>
              <button
                className="link-btn"
                onClick={() => setShowWeights(s => !s)}
              >
                {showWeights ? '✕ Cerrar prioridades' : '⚙ Ajustar prioridades'}
              </button>
            </div>

            {showWeights && (
              <div className="weights-inline">
                <WeightControls weights={weights} onChange={setWeights} />
              </div>
            )}

            <Ranking items={ranked} />
          </section>
        )}
      </main>

      {selectedIds.length > 0 && (
        <a href="#comparar" className="compare-bar">
          <span className="compare-bar-count">{selectedIds.length}</span>
          <span className="compare-bar-text">
            {selectedIds.length === 1 ? 'producto seleccionado' : 'productos seleccionados'}
          </span>
          <span className="compare-bar-action">Ver comparación →</span>
        </a>
      )}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-col--brand">
              <div className="brand">
                <span className="brand-mark">R</span>
                <span className="brand-name">
                  <span className="brand-name-mark">ROMA</span>
                  <span className="brand-name-italic">beauty</span>
                </span>
              </div>
              <p className="footer-tag">
                Una curaduría de productos profesionales para el pelo.<br />
                Hecho con cuidado en Argentina.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Instagram">Instagram</a>
                <span className="footer-dot">·</span>
                <a href="#" aria-label="TikTok">TikTok</a>
                <span className="footer-dot">·</span>
                <a href="#" aria-label="WhatsApp">WhatsApp</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-h">Marcas</h4>
              <ul className="footer-list">
                {brands.map(b => {
                  const count = products.filter(p => p.brand === b).length
                  return (
                    <li key={b}>
                      <button
                        className="footer-link"
                        onClick={() => { setActiveBrand(b); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                      >
                        {b} <span className="footer-count">{count}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-h">Categorías</h4>
              <ul className="footer-list">
                {subcategories.slice(0, 7).map(c => (
                  <li key={c}>
                    <button
                      className="footer-link"
                      onClick={() => { setActiveSubcategory(c); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col footer-col--news">
              <h4 className="footer-h">Recibí ofertas</h4>
              <p className="footer-news-sub">
                10% off en tu primera compra y novedades semanales de las tres marcas.
              </p>
              <form
                className="footer-news"
                onSubmit={e => { e.preventDefault(); alert('¡Gracias! Te vamos a escribir pronto.') }}
              >
                <input
                  type="email"
                  required
                  placeholder="Tu email"
                  className="footer-news-input"
                />
                <button type="submit" className="footer-news-btn">Suscribirme</button>
              </form>
              <ul className="footer-perks">
                <li>· Envío gratis +$80.000</li>
                <li>· 3 cuotas sin interés</li>
                <li>· Cambios sin costo en 30 días</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} ROMAbeauty · Todos los derechos reservados.</p>
            <p className="footer-credit">
              Imágenes oficiales: lapuissance.com.ar · fidelite.com.ar · opcionsalon.com.ar — Precios mayo 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
