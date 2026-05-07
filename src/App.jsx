import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Chips from './components/Chips.jsx'
import Ranking from './components/Ranking.jsx'
import WeightControls from './components/WeightControls.jsx'
import Catalog from './components/Catalog.jsx'
import { products, subcategories, brands } from './data/products.js'
import { rankProducts } from './lib/score.js'

const STARTERS = ['fc05', 'op02', 'fa05']

export default function App() {
  const [selectedIds, setSelectedIds] = useState(STARTERS)
  const [activeSubcategory, setActiveSubcategory] = useState('Todos')
  const [activeBrand, setActiveBrand] = useState('Todas')
  const [weights, setWeights] = useState({ rating: 50, reviews: 30, price: 20 })

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

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-row">
          <a href="/" className="brand">
            <span className="brand-mark">t</span>
            <span className="brand-name">tubelleza</span>
          </a>
          <nav className="nav">
            <a href="#comparador">Comparador</a>
            <a href="#cómo">Cómo funciona</a>
            <a href="#categorías">Categorías</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-eyebrow">Issue 01 · Fidelité × Opción</div>
          <h1 className="hero-title">
            El producto<br />ideal para <em>tu&nbsp;pelo</em>.
          </h1>
          <p className="hero-sub">
            Catálogo curado con productos reales de <strong>Fidelité</strong> y{' '}
            <strong>Opción</strong>. Compará características, precios y rating —
            elegí el ganador según tus prioridades.
          </p>

          <div id="comparador" className="search-shell">
            <SearchBar
              products={products}
              selectedIds={selectedIds}
              onAdd={add}
            />
          </div>

          <Chips items={selected} onRemove={remove} onClear={clear} />

          <div className="filter-section">
            <div className="filter-label">Marca</div>
            <div className="filter-bar">
              <button
                className={'pill pill--brand' + (activeBrand === 'Todas' ? ' is-on' : '')}
                onClick={() => setActiveBrand('Todas')}
              >
                Todas
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

          <div className="filter-section">
            <div className="filter-label">Tipo de producto</div>
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

      <main className="container main-grid">
        <aside className="sidebar">
          <WeightControls weights={weights} onChange={setWeights} />

          <div className="howto" id="cómo">
            <h3>Cómo funciona</h3>
            <ol>
              <li>Explorá el catálogo y agregá productos a comparar.</li>
              <li>Ajustá las prioridades (calificación, reseñas, precio).</li>
              <li>Mirá el ranking ordenado por tu criterio.</li>
            </ol>
          </div>
        </aside>

        <section className="content">
          <Ranking items={ranked} />
          <Catalog
            products={catalogFiltered}
            selectedIds={selectedIds}
            onAdd={add}
            onRemove={remove}
          />
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="brand">
              <span className="brand-mark">t</span>
              <span className="brand-name">tubelleza</span>
            </div>
            <p className="footer-tag">Tu comparador de productos para el pelo.</p>
          </div>
          <p className="footer-meta">
            © {new Date().getFullYear()} tubelleza · Imágenes y fichas: fidelite.com.ar y opcionsalon.com.ar · Precios actualizados (mayo 2026) desde BM Distribuidora, Simple Insumos y otros retailers AR
          </p>
        </div>
      </footer>
    </div>
  )
}
