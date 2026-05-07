import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Chips from './components/Chips.jsx'
import Ranking from './components/Ranking.jsx'
import WeightControls from './components/WeightControls.jsx'
import { products, subcategories } from './data/products.js'
import { rankProducts } from './lib/score.js'

const STARTERS = ['h01', 'h03', 'h04']

export default function App() {
  const [selectedIds, setSelectedIds] = useState(STARTERS)
  const [activeSubcategory, setActiveSubcategory] = useState('Todos')
  const [weights, setWeights] = useState({ rating: 50, reviews: 30, price: 20 })

  const selected = useMemo(
    () => selectedIds.map(id => products.find(p => p.id === id)).filter(Boolean),
    [selectedIds]
  )

  const filtered = useMemo(() => {
    if (activeSubcategory === 'Todos') return selected
    return selected.filter(p => p.subcategory === activeSubcategory)
  }, [selected, activeSubcategory])

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
          <div className="hero-eyebrow">Comparador de productos para el pelo</div>
          <h1 className="hero-title">
            El producto ideal<br /><em>para tu pelo</em>.
          </h1>
          <p className="hero-sub">
            Champús, acondicionadores, mascarillas, aceites, tratamientos y más.
            Buscá, compará características y precios, y obtené tu ranking en segundos.
          </p>

          <div id="comparador" className="search-shell">
            <SearchBar
              products={products}
              selectedIds={selectedIds}
              onAdd={add}
            />
          </div>

          <Chips items={selected} onRemove={remove} onClear={clear} />

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
      </section>

      <main className="container main-grid">
        <aside className="sidebar">
          <WeightControls weights={weights} onChange={setWeights} />

          <div className="howto" id="cómo">
            <h3>Cómo funciona</h3>
            <ol>
              <li>Buscá productos en la barra superior.</li>
              <li>Ajustá las prioridades (calificación, reseñas, precio).</li>
              <li>Mirá el ranking ordenado por tu criterio.</li>
            </ol>
          </div>
        </aside>

        <section className="content">
          <Ranking items={ranked} />
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
          <p className="footer-meta">© {new Date().getFullYear()} tubelleza · Datos de muestra</p>
        </div>
      </footer>
    </div>
  )
}
