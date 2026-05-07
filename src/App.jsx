import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Chips from './components/Chips.jsx'
import Ranking from './components/Ranking.jsx'
import WeightControls from './components/WeightControls.jsx'
import Catalog from './components/Catalog.jsx'
import { products, subcategories, brands } from './data/products.js'
import { rankProducts } from './lib/score.js'

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
        <Catalog
          products={catalogFiltered}
          selectedIds={selectedIds}
          onAdd={add}
          onRemove={remove}
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
        <div className="container footer-inner">
          <div>
            <div className="brand">
              <span className="brand-mark">R</span>
              <span className="brand-name">
                <span className="brand-name-mark">ROMA</span>
                <span className="brand-name-italic">beauty</span>
              </span>
            </div>
            <p className="footer-tag">Belleza capilar profesional · Argentina</p>
          </div>
          <p className="footer-meta">
            © {new Date().getFullYear()} ROMAbeauty<br />
            Imágenes oficiales de lapuissance.com.ar, fidelite.com.ar y opcionsalon.com.ar<br />
            Precios actualizados mayo 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
