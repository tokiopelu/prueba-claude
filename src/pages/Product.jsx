import { useMemo } from 'react'
import { products } from '../data/products.js'
import { productMeta } from '../lib/meta.js'
import { useSEO, buildProductJsonLd } from '../lib/seo.js'
import Countdown from '../components/Countdown.jsx'
import WishlistButton from '../components/WishlistButton.jsx'
import ReviewSection from '../components/ReviewSection.jsx'

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

function ProductRelatedCard({ p, onNavigate }) {
  const meta = productMeta(p)
  return (
    <button className="related-card" onClick={() => onNavigate(`/p/${p.id}`)}>
      <div className="related-img">
        {p.imageUrl
          ? <img src={p.imageUrl} alt={p.name} loading="lazy" />
          : <span>{p.image}</span>}
        {meta.discount > 0 && <span className="related-discount">−{meta.discount}%</span>}
      </div>
      <div className="related-body">
        <div className="related-brand">{p.brand}</div>
        <div className="related-name">{p.name}</div>
        <div className="related-price">${formatARS(meta.finalPrice)}</div>
      </div>
    </button>
  )
}

export default function Product({ slug, qtyOf, onAdd, onSetQty, onNavigate, onJumpFilter, onBuyNow, user, wishlist, reviewsHook, onSignIn }) {
  const product = useMemo(() => products.find(p => p.id === slug), [slug])
  const meta = useMemo(() => (product ? productMeta(product) : null), [product])
  const related = useMemo(() => {
    if (!product) return []
    return products
      .filter(p =>
        p.id !== product.id &&
        (p.subcategory === product.subcategory || p.brand === product.brand)
      )
      .slice(0, 4)
  }, [product])

  const seoTitle = product
    ? `${product.name} · ${product.brand}`
    : 'Producto no encontrado'
  const seoDescription = product
    ? `${product.description?.slice(0, 155) || ''}`
    : null
  const seoJsonLd = product && meta ? buildProductJsonLd(product, meta) : null

  useSEO({
    title: seoTitle,
    description: seoDescription,
    image: product?.imageUrl,
    path: product ? `/p/${product.id}` : '/',
    jsonLd: seoJsonLd
  })

  if (!product) {
    return (
      <main className="container product-404">
        <h1 className="product-404-title">Producto no encontrado</h1>
        <p className="product-404-sub">Quizás fue retirado o el link no es correcto.</p>
        <button className="checkout-back-btn" onClick={() => onNavigate('/')}>Volver al catálogo</button>
      </main>
    )
  }

  const qty = qtyOf(product.id)
  const inCart = qty > 0
  const c = product.characteristics || {}
  const isFavorite = wishlist?.has(product.id) || false

  return (
    <main className="product-page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Migas de pan">
          <button onClick={() => onNavigate('/')}>Inicio</button>
          <span className="breadcrumb-sep">›</span>
          <button onClick={() => onJumpFilter({ brand: product.brand })}>{product.brand}</button>
          <span className="breadcrumb-sep">›</span>
          <button onClick={() => onJumpFilter({ subcategory: product.subcategory })}>
            {product.subcategory}
          </button>
        </nav>

        <article className="product-hero">
          <div className="product-gallery">
            <div className="product-img">
              {product.imageUrl
                ? <img src={product.imageUrl} alt={product.name} />
                : <span className="product-img-fallback">{product.image}</span>}
              {meta.discount > 0 && (
                <span className="product-discount">−{meta.discount}%</span>
              )}
            </div>
          </div>

          <div className="product-info">
            <div className="product-eyebrow">
              <span className="product-brand">{product.brand}</span>
              <span className="product-line">· {product.line}</span>
            </div>
            <div className="product-name-row">
              <h1 className="product-name">{product.name}</h1>
              <WishlistButton
                productId={product.id}
                isFavorite={isFavorite}
                isLoggedIn={!!user}
                onToggle={wishlist?.toggle}
                onSignIn={onSignIn}
                size="lg"
              />
            </div>

            <div className="product-rating">
              <span className="product-stars" aria-label={`${product.rating} de 5`}>
                {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
              </span>
              <span className="product-rating-num">{product.rating.toFixed(1)}</span>
              <span className="product-rating-count">({product.reviews.toLocaleString('es-AR')} reseñas)</span>
            </div>

            <div className="product-pricing">
              {meta.discount > 0 ? (
                <>
                  <span className="product-price-was">${formatARS(product.price)}</span>
                  <span className="product-price">${formatARS(meta.finalPrice)}</span>
                  <span className="product-save">Ahorrás ${formatARS(product.price - meta.finalPrice)}</span>
                </>
              ) : (
                <span className="product-price">${formatARS(product.price)}</span>
              )}
            </div>
            <div className="product-installments">
              {meta.installmentMonths}× ${formatARS(meta.installmentValue)} sin interés con todas las tarjetas
            </div>

            {meta.urgency && (
              <div className="product-urgency">⏳ {meta.urgency}</div>
            )}

            {meta.promoEndsAt && (
              <div className="product-countdown">
                <Countdown endsAt={meta.promoEndsAt} label="🔥 Oferta termina en" />
              </div>
            )}

            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              {inCart ? (
                <div className="product-qty">
                  <button
                    className="cat-qty-btn"
                    onClick={() => onSetQty(product.id, qty - 1)}
                    aria-label="Quitar uno"
                  >−</button>
                  <span className="cat-qty-val">
                    {qty} <span className="cat-qty-tag">en carrito</span>
                  </span>
                  <button
                    className="cat-qty-btn"
                    onClick={() => onSetQty(product.id, qty + 1)}
                    aria-label="Sumar uno"
                  >+</button>
                </div>
              ) : (
                <button className="product-add-btn" onClick={() => onAdd(product.id)}>
                  Sumar al carrito
                </button>
              )}
              <button className="product-buy-btn" onClick={() => onBuyNow(product.id)}>
                Comprar ahora
              </button>
            </div>

            <ul className="product-perks">
              <li>📦 Envío gratis en pedidos +$80.000</li>
              <li>💳 Hasta 3 cuotas sin interés</li>
              <li>↺ Cambios sin costo en 30 días</li>
            </ul>
          </div>
        </article>

        <section className="product-section">
          <h2 className="product-section-h">Características</h2>
          <div className="product-specs">
            {c.size && (
              <div className="product-spec">
                <div className="product-spec-label">Tamaño</div>
                <div className="product-spec-val">{c.size}</div>
              </div>
            )}
            {c.hairType?.length > 0 && (
              <div className="product-spec">
                <div className="product-spec-label">Indicado para</div>
                <div className="product-spec-val">
                  <div className="product-tags">
                    {c.hairType.map(t => <span key={t} className="product-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            )}
            {c.benefits?.length > 0 && (
              <div className="product-spec">
                <div className="product-spec-label">Beneficios</div>
                <div className="product-spec-val">
                  <div className="product-tags">
                    {c.benefits.map(b => (
                      <span key={b} className="product-tag product-tag--benefit">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {c.origin && (
              <div className="product-spec">
                <div className="product-spec-label">Origen</div>
                <div className="product-spec-val">{c.origin}</div>
              </div>
            )}
            {(c.sulfateFree || c.vegan) && (
              <div className="product-spec">
                <div className="product-spec-label">Formulación</div>
                <div className="product-spec-val">
                  <div className="product-tags">
                    {c.sulfateFree && <span className="product-tag product-tag--flag">Sin sulfatos</span>}
                    {c.vegan && <span className="product-tag product-tag--flag">Vegano</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {c.keyIngredients?.length > 0 && (
          <section className="product-section">
            <h2 className="product-section-h">Ingredientes clave</h2>
            <ul className="product-ingredients">
              {c.keyIngredients.map(ing => (
                <li key={ing} className="product-ingredient">
                  <span className="product-ingredient-dot" aria-hidden>·</span>
                  {ing}
                </li>
              ))}
            </ul>
          </section>
        )}

        {(product.pros?.length > 0 || product.cons?.length > 0) && (
          <section className="product-section">
            <h2 className="product-section-h">Lo que destacan las reseñas</h2>
            <div className="product-proscons">
              {product.pros?.length > 0 && (
                <div className="product-proscons-col">
                  <h3 className="product-proscons-h product-proscons-h--pro">A favor</h3>
                  <ul>
                    {product.pros.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              )}
              {product.cons?.length > 0 && (
                <div className="product-proscons-col">
                  <h3 className="product-proscons-h product-proscons-h--con">A tener en cuenta</h3>
                  <ul>
                    {product.cons.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {reviewsHook && (
          <ReviewSection
            productId={product.id}
            productName={product.name}
            user={user}
            reviewsHook={reviewsHook}
            onSignIn={onSignIn}
          />
        )}

        {related.length > 0 && (
          <section className="product-section">
            <h2 className="product-section-h">También te puede gustar</h2>
            <div className="related-grid">
              {related.map(p => (
                <ProductRelatedCard key={p.id} p={p} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
