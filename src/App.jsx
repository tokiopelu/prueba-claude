import { useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Catalog from './components/Catalog.jsx'
import TopBar from './components/TopBar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import CartBar from './components/CartBar.jsx'
import Checkout from './pages/Checkout.jsx'
import CheckoutSuccess from './pages/CheckoutSuccess.jsx'
import CheckoutError from './pages/CheckoutError.jsx'
import CheckoutPending from './pages/CheckoutPending.jsx'
import Product from './pages/Product.jsx'
import { products, subcategories, brands } from './data/products.js'
import { productMeta } from './lib/meta.js'
import { useCart, buildCartView } from './lib/cart.js'
import { useRoute } from './lib/route.js'

export default function App() {
  const cartHook = useCart()
  const { cart, add, remove, setQty, clear, qtyOf } = cartHook
  const { path, navigate } = useRoute()
  const [activeSubcategory, setActiveSubcategory] = useState('Todos')
  const [activeBrand, setActiveBrand] = useState('Todas')
  const [drawerOpen, setDrawerOpen] = useState(false)

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

  const cartView = buildCartView(cart)

  function addAndOpen(id) {
    add(id)
    setDrawerOpen(true)
  }

  function goToCheckout() {
    setDrawerOpen(false)
    navigate('/checkout')
  }

  function buyNow(id) {
    add(id)
    setDrawerOpen(false)
    navigate('/checkout')
  }

  function jumpFilter({ brand, subcategory }) {
    if (brand) setActiveBrand(brand)
    if (subcategory) setActiveSubcategory(subcategory)
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const productSlug = path.startsWith('/p/') ? decodeURIComponent(path.slice(3)) : null

  if (productSlug) {
    return (
      <div className="app">
        <TopBar />
        <Header onCartOpen={() => setDrawerOpen(true)} cartCount={cartView.itemCount} onLogoClick={() => navigate('/')} />
        <Product
          slug={productSlug}
          qtyOf={qtyOf}
          onAdd={addAndOpen}
          onSetQty={setQty}
          onNavigate={navigate}
          onJumpFilter={jumpFilter}
          onBuyNow={buyNow}
        />
        <CartBar cart={cart} onOpen={() => setDrawerOpen(true)} />
        <CartDrawer
          cart={cart}
          onSetQty={setQty}
          onRemove={remove}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onCheckout={goToCheckout}
          onProductClick={id => { setDrawerOpen(false); navigate(`/p/${id}`) }}
        />
        <Footer onJumpFilter={jumpFilter} />
      </div>
    )
  }

  if (path === '/checkout') {
    return (
      <div className="app">
        <Header onCartOpen={() => setDrawerOpen(true)} cartCount={cartView.itemCount} onLogoClick={() => navigate('/')} />
        <Checkout cart={cart} onNavigate={navigate} />
        <Footer onJumpFilter={jumpFilter} />
      </div>
    )
  }

  if (path === '/checkout/exito') {
    return (
      <div className="app">
        <Header onCartOpen={() => setDrawerOpen(true)} cartCount={cartView.itemCount} onLogoClick={() => navigate('/')} />
        <CheckoutSuccess onClearCart={clear} onNavigate={navigate} />
        <Footer />
      </div>
    )
  }

  if (path === '/checkout/error') {
    return (
      <div className="app">
        <Header onCartOpen={() => setDrawerOpen(true)} cartCount={cartView.itemCount} onLogoClick={() => navigate('/')} />
        <CheckoutError onNavigate={navigate} />
        <Footer />
      </div>
    )
  }

  if (path === '/checkout/pendiente') {
    return (
      <div className="app">
        <Header onCartOpen={() => setDrawerOpen(true)} cartCount={cartView.itemCount} onLogoClick={() => navigate('/')} />
        <CheckoutPending onClearCart={clear} onNavigate={navigate} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="app">
      <TopBar />
      <Header onCartOpen={() => setDrawerOpen(true)} cartCount={cartView.itemCount} onLogoClick={() => navigate('/')} />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-eyebrow">Cuidado capilar profesional · {products.length} productos seleccionados</div>
          <h1 className="hero-title">
            La belleza, en su forma <em>más cuidada</em>.
          </h1>

          <div className="search-shell">
            <SearchBar
              products={products}
              qtyOf={qtyOf}
              onPick={p => navigate(`/p/${p.id}`)}
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
            qtyOf={qtyOf}
            onAdd={addAndOpen}
            onSetQty={setQty}
            onProductClick={id => navigate(`/p/${id}`)}
            title={`🔥 Ofertas · ${offersFeed.length} productos en promo`}
            subtitle={<>Promos por tiempo limitado. <strong>¡No te lo pierdas!</strong></>}
          />
        )}

        <Catalog
          products={catalogFiltered}
          qtyOf={qtyOf}
          onAdd={addAndOpen}
          onSetQty={setQty}
          onProductClick={id => navigate(`/p/${id}`)}
          title={`🛍️ Catálogo · ${catalogFiltered.length} productos`}
        />
      </main>

      <CartBar cart={cart} onOpen={() => setDrawerOpen(true)} />

      <CartDrawer
        cart={cart}
        onSetQty={setQty}
        onRemove={remove}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onCheckout={goToCheckout}
        onProductClick={id => { setDrawerOpen(false); navigate(`/p/${id}`) }}
      />

      <Footer onJumpFilter={jumpFilter} />
    </div>
  )
}

function Header({ onCartOpen, cartCount, onLogoClick }) {
  return (
    <header className="site-header">
      <div className="container header-row">
        <button className="brand brand--btn" onClick={onLogoClick}>
          <span className="brand-mark">R</span>
          <span className="brand-name">
            <span className="brand-name-mark">ROMA</span>
            <span className="brand-name-italic">beauty</span>
          </span>
        </button>
        <button className="nav-cta" onClick={onCartOpen}>
          <span className="nav-cta-icon" aria-hidden>🛍</span>
          <span>Carrito</span>
          {cartCount > 0 && <span className="nav-cta-count">{cartCount}</span>}
        </button>
      </div>
    </header>
  )
}

function Footer({ onJumpFilter }) {
  return (
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
                      onClick={() => onJumpFilter?.({ brand: b })}
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
                    onClick={() => onJumpFilter?.({ subcategory: c })}
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
  )
}
