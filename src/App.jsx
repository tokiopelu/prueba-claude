import { useEffect, useMemo, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import Catalog from './components/Catalog.jsx'
import TopBar from './components/TopBar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import CartBar from './components/CartBar.jsx'
import AuthButton from './components/AuthButton.jsx'
import CategoriesDropdown from './components/CategoriesDropdown.jsx'
import SignInModal from './components/SignInModal.jsx'
import PromoModal from './components/PromoModal.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Checkout from './pages/Checkout.jsx'
import CheckoutSuccess from './pages/CheckoutSuccess.jsx'
import CheckoutError from './pages/CheckoutError.jsx'
import CheckoutPending from './pages/CheckoutPending.jsx'
import Product from './pages/Product.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Quiz from './pages/Quiz.jsx'
import { products, subcategories, brands } from './data/products.js'
import { productMeta } from './lib/meta.js'
import { useCart, buildCartView } from './lib/cart.js'
import { useAuth } from './lib/auth.js'
import { useDiscount } from './lib/discount.js'
import { useWishlist } from './lib/wishlist.js'
import { useReviews } from './lib/reviews.js'
import { useRoute } from './lib/route.js'
import { useSEO } from './lib/seo.js'
import { loadAnalytics, trackPageView } from './lib/analytics.js'

export default function App() {
  const cartHook = useCart()
  const { cart, add, remove, setQty, clear, qtyOf } = cartHook
  const { user, signInWithGoogleCredential, signInDemo, signOut } = useAuth()
  const discount = useDiscount(user)
  const wishlist = useWishlist(user)
  const reviewsHook = useReviews()
  const { path, navigate } = useRoute()

  useEffect(() => {
    loadAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(path)
  }, [path])

  // Skip when child component (Product, Quiz) sets its own SEO
  const childHandlesSEO = path.startsWith('/p/') || path === '/quiz'
  useSEO({
    skip: childHandlesSEO,
    title: path === '/'
      ? 'cuidado capilar profesional · La Puissance, Fidelité, Opción'
      : path === '/favoritos'
        ? 'Tus favoritos'
        : path.startsWith('/checkout')
          ? 'Finalizá tu compra'
          : null,
    description: path === '/'
      ? 'Curaduría argentina de productos profesionales para el pelo. Champús, mascarillas, aceites y tratamientos. Envío a todo el país, 3 cuotas sin interés.'
      : 'Cuidado capilar profesional, envío a todo el país.',
    path
  })
  const [activeSubcategory, setActiveSubcategory] = useState('Todos')
  const [activeBrand, setActiveBrand] = useState('Todas')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [signInOpen, setSignInOpen] = useState(false)
  const [promoOpen, setPromoOpen] = useState(false)
  const [justSignedIn, setJustSignedIn] = useState(false)
  const [pendingCheckout, setPendingCheckout] = useState(false)

  useEffect(() => {
    if (justSignedIn && user && !discount.isUsed) {
      setPromoOpen(true)
      setJustSignedIn(false)
    }
  }, [justSignedIn, user, discount.isUsed])

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

  const cartView = buildCartView(cart, {
    discountActive: discount.isActive,
    discountRate: discount.rate
  })

  function addAndOpen(id) {
    add(id)
    setDrawerOpen(true)
  }

  function goToCheckout() {
    setDrawerOpen(false)
    if (!user) {
      setPendingCheckout(true)
      setSignInOpen(true)
      return
    }
    navigate('/checkout')
  }

  function buyNow(id) {
    add(id)
    setDrawerOpen(false)
    if (!user) {
      setPendingCheckout(true)
      setSignInOpen(true)
      return
    }
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

  function openSignIn() {
    setDrawerOpen(false)
    setSignInOpen(true)
  }

  function openPromo() {
    setDrawerOpen(false)
    setPromoOpen(true)
  }

  function handleGoogleCredential(token) {
    const u = signInWithGoogleCredential(token)
    if (u) {
      setSignInOpen(false)
      setJustSignedIn(true)
      if (pendingCheckout) {
        setPendingCheckout(false)
        navigate('/checkout')
      }
    }
  }

  function handleDemoSignIn(email) {
    const u = signInDemo(email)
    if (u) {
      setSignInOpen(false)
      setJustSignedIn(true)
      if (pendingCheckout) {
        setPendingCheckout(false)
        navigate('/checkout')
      }
    }
  }

  function closeSignIn() {
    setSignInOpen(false)
    setPendingCheckout(false)
  }

  function handleClaim() {
    discount.claim()
  }

  const productSlug = path.startsWith('/p/') ? decodeURIComponent(path.slice(3)) : null

  const headerProps = {
    user,
    discount,
    wishlistCount: wishlist.count,
    onCartOpen: () => setDrawerOpen(true),
    cartCount: cartView.itemCount,
    onLogoClick: () => navigate('/'),
    onSignIn: openSignIn,
    onSignOut: signOut,
    onOpenPromo: openPromo,
    onOpenWishlist: () => navigate('/favoritos'),
    onPickSubcategory: s => jumpFilter({ subcategory: s }),
    onPickBrand: b => jumpFilter({ brand: b })
  }

  const drawerProps = {
    cart,
    discount,
    user,
    onSetQty: setQty,
    onRemove: remove,
    isOpen: drawerOpen,
    onClose: () => setDrawerOpen(false),
    onCheckout: goToCheckout,
    onProductClick: id => { setDrawerOpen(false); navigate(`/p/${id}`) },
    onSignIn: openSignIn,
    onOpenPromo: openPromo
  }

  const catalogCommonProps = {
    qtyOf,
    onAdd: addAndOpen,
    onSetQty: setQty,
    onProductClick: id => navigate(`/p/${id}`),
    user,
    wishlist,
    onSignIn: openSignIn
  }

  const overlays = (
    <>
      <SignInModal
        isOpen={signInOpen}
        onClose={closeSignIn}
        gateForCheckout={pendingCheckout}
        onGoogleCredential={handleGoogleCredential}
        onDemoSignIn={handleDemoSignIn}
      />
      <PromoModal
        isOpen={promoOpen}
        onClose={() => setPromoOpen(false)}
        onClaim={handleClaim}
        isClaimed={discount.isClaimed}
        isUsed={discount.isUsed}
        isActive={discount.isActive}
        monthLabel={discount.monthLabel}
      />
    </>
  )

  if (productSlug) {
    return (
      <div className="app">
        <a href="#main" className="skip-link">Saltar al contenido</a>
        <TopBar />
        <Header {...headerProps} />
        <Product
          slug={productSlug}
          qtyOf={qtyOf}
          onAdd={addAndOpen}
          onSetQty={setQty}
          onNavigate={navigate}
          onJumpFilter={jumpFilter}
          onBuyNow={buyNow}
          user={user}
          wishlist={wishlist}
          reviewsHook={reviewsHook}
          onSignIn={openSignIn}
        />
        <CartBar cart={cart} discount={discount} onOpen={() => setDrawerOpen(true)} />
        <CartDrawer {...drawerProps} />
        <Footer onJumpFilter={jumpFilter} />
        <WhatsAppFloat />
        {overlays}
      </div>
    )
  }

  if (path === '/quiz') {
    return (
      <div className="app">
        <a href="#main" className="skip-link">Saltar al contenido</a>
        <Header {...headerProps} />
        <Quiz user={user} onAdd={addAndOpen} onNavigate={navigate} onSignIn={openSignIn} />
        <CartBar cart={cart} discount={discount} onOpen={() => setDrawerOpen(true)} />
        <CartDrawer {...drawerProps} />
        <Footer onJumpFilter={jumpFilter} />
        <WhatsAppFloat />
        {overlays}
      </div>
    )
  }

  if (path === '/favoritos') {
    return (
      <div className="app">
        <Header {...headerProps} />
        <Wishlist
          user={user}
          items={wishlist.items}
          qtyOf={qtyOf}
          onAdd={addAndOpen}
          onSetQty={setQty}
          onProductClick={id => navigate(`/p/${id}`)}
          onSignIn={openSignIn}
          onNavigate={navigate}
        />
        <CartBar cart={cart} discount={discount} onOpen={() => setDrawerOpen(true)} />
        <CartDrawer {...drawerProps} />
        <Footer onJumpFilter={jumpFilter} />
        <WhatsAppFloat />
        {overlays}
      </div>
    )
  }

  if (path === '/checkout') {
    return (
      <div className="app">
        <Header {...headerProps} />
        <Checkout
          cart={cart}
          user={user}
          discount={discount}
          onNavigate={navigate}
          onSignIn={openSignIn}
          onOpenPromo={openPromo}
        />
        <Footer onJumpFilter={jumpFilter} />
        {overlays}
      </div>
    )
  }

  if (path === '/checkout/exito') {
    return (
      <div className="app">
        <Header {...headerProps} />
        <CheckoutSuccess
          onClearCart={clear}
          onMarkDiscountUsed={discount.markUsed}
          onNavigate={navigate}
        />
        <Footer />
        {overlays}
      </div>
    )
  }

  if (path === '/checkout/error') {
    return (
      <div className="app">
        <Header {...headerProps} />
        <CheckoutError onNavigate={navigate} />
        <Footer />
        {overlays}
      </div>
    )
  }

  if (path === '/checkout/pendiente') {
    return (
      <div className="app">
        <Header {...headerProps} />
        <CheckoutPending onClearCart={clear} onNavigate={navigate} />
        <Footer />
        {overlays}
      </div>
    )
  }

  return (
    <div className="app">
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <TopBar />
      <Header {...headerProps} />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-eyebrow">Cuidado capilar profesional · {products.length} productos seleccionados</div>
          <h1 className="hero-title">
            <a
              className="hero-title-link"
              href={`https://wa.me/5491100000000?text=${encodeURIComponent('Hola ROMAhair! Quiero hacer una consulta con un estilista.')}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Somos estilistas, <em>hacenos tu consulta</em>.
            </a>
          </h1>

          <div className="search-shell">
            <SearchBar
              products={products}
              qtyOf={qtyOf}
              onPick={p => navigate(`/p/${p.id}`)}
            />
          </div>

          <button className="hero-quiz-cta" onClick={() => navigate('/quiz')}>
            <span>¿No sabés por dónde empezar? <strong>Hacé el quiz</strong> y armamos tu rutina ideal</span>
            <span className="hero-quiz-arrow" aria-hidden>→</span>
          </button>

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

      <main id="main" className="container main-stack">
        {offersFeed.length > 0 && (
          <Catalog
            {...catalogCommonProps}
            products={offersFeed}
            title={`Ofertas · ${offersFeed.length} productos en promo`}
            subtitle={<>Promos por tiempo limitado. <strong>¡No te lo pierdas!</strong></>}
          />
        )}

        <Catalog
          {...catalogCommonProps}
          products={catalogFiltered}
          title={`Catálogo · ${catalogFiltered.length} productos`}
        />
      </main>

      <CartBar cart={cart} discount={discount} onOpen={() => setDrawerOpen(true)} />

      <CartDrawer {...drawerProps} />

      <Footer onJumpFilter={jumpFilter} />
      <WhatsAppFloat />
      {overlays}
    </div>
  )
}

function Header({ user, discount, wishlistCount, onCartOpen, cartCount, onLogoClick, onSignIn, onSignOut, onOpenPromo, onOpenWishlist, onPickSubcategory, onPickBrand }) {
  return (
    <header className="site-header">
      <div className="container header-row">
        <button className="brand brand--btn" onClick={onLogoClick}>
          <span className="brand-name">
            <span className="brand-name-mark">ROMA</span>
            <span className="brand-name-italic">hair</span>
          </span>
        </button>
        <CategoriesDropdown
          subcategories={subcategories}
          brands={brands}
          onPickSubcategory={onPickSubcategory}
          onPickBrand={onPickBrand}
        />
        <div className="header-actions">
          <AuthButton
            user={user}
            discount={discount}
            wishlistCount={wishlistCount}
            onSignIn={onSignIn}
            onSignOut={onSignOut}
            onOpenPromo={onOpenPromo}
            onOpenWishlist={onOpenWishlist}
          />
          <button className="nav-cta" onClick={onCartOpen}>
            <span>Carrito</span>
            {cartCount > 0 && <span className="nav-cta-count">{cartCount}</span>}
          </button>
        </div>
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
              <span className="brand-name">
                <span className="brand-name-mark">ROMA</span>
                <span className="brand-name-italic">hair</span>
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
              <a href="https://wa.me/5491100000000" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp">WhatsApp</a>
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
          <p>© {new Date().getFullYear()} ROMAhair · Todos los derechos reservados.</p>
          <p className="footer-credit">
            Imágenes oficiales: lapuissance.com.ar · fidelite.com.ar · opcionsalon.com.ar — Precios mayo 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
