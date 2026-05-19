import { useReveal } from '../lib/reveal.js'
import { productMeta } from '../lib/meta.js'
import Countdown from './Countdown.jsx'
import WishlistButton from './WishlistButton.jsx'

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

function CatalogCard({ p, index, total, qty, onAdd, onSetQty, onProductClick, user, wishlist, onSignIn }) {
  const ref = useReveal()
  const meta = productMeta(p)
  const indexLabel = String(index + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')
  const inCart = qty > 0
  const isFavorite = wishlist?.has(p.id) || false
  return (
    <article
      ref={ref}
      className={'cat-card reveal' + (inCart ? ' is-selected' : '')}
    >
      <span className="cat-index">{indexLabel} / {totalLabel}</span>
      {meta.discount > 0 && (
        <span className="cat-discount">−{meta.discount}%</span>
      )}
      {meta.urgency && (
        <span className="cat-urgency">{meta.urgency}</span>
      )}
      <div className="cat-wish">
        <WishlistButton
          productId={p.id}
          isFavorite={isFavorite}
          isLoggedIn={!!user}
          onToggle={wishlist?.toggle}
          onSignIn={onSignIn}
        />
      </div>
      <button
        type="button"
        className="cat-img-btn"
        onClick={() => onProductClick(p.id)}
        aria-label={`Ver ${p.name}`}
      >
        <div className="cat-img">
          {p.imageUrl
            ? <img src={p.imageUrl} alt={p.name} loading="lazy" />
            : <span>{p.image}</span>}
          <span className="cat-brand-badge">{p.brand}</span>
        </div>
      </button>
      <div className="cat-body">
        <div className="cat-line">{p.line} · {p.subcategory}</div>
        <button
          type="button"
          className="cat-name-btn"
          onClick={() => onProductClick(p.id)}
        >
          <h3 className="cat-name">{p.name}</h3>
        </button>

        <div className="cat-pricing">
          {meta.discount > 0 ? (
            <>
              <span className="cat-price-was">${formatARS(p.price)}</span>
              <span className="cat-price">${formatARS(meta.finalPrice)}</span>
            </>
          ) : (
            <span className="cat-price">${formatARS(p.price)}</span>
          )}
        </div>
        <div className="cat-installments">
          {meta.installmentMonths}× ${formatARS(meta.installmentValue)} sin interés
        </div>

        {meta.promoEndsAt && (
          <Countdown endsAt={meta.promoEndsAt} label="Termina en" />
        )}

        <div className="cat-meta">
          <span className="cat-rating">★ {p.rating.toFixed(1)} <span className="cat-rating-count">({p.reviews.toLocaleString('es-AR')})</span></span>
          <span className="cat-size">{p.characteristics?.size}</span>
        </div>

        <div className="cat-foot">
          {inCart ? (
            <div className="cat-qty" role="group" aria-label={`Cantidad de ${p.name}`}>
              <button
                className="cat-qty-btn"
                onClick={() => onSetQty(p.id, qty - 1)}
                aria-label="Quitar uno"
              >−</button>
              <span className="cat-qty-val" aria-live="polite">
                {qty} <span className="cat-qty-tag">en carrito</span>
              </span>
              <button
                className="cat-qty-btn"
                onClick={() => onSetQty(p.id, qty + 1)}
                aria-label="Sumar uno"
              >+</button>
            </div>
          ) : (
            <button
              className="cat-btn"
              onClick={() => onAdd(p.id)}
            >
              Sumar al carrito
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Catalog({ products, qtyOf, onAdd, onSetQty, onProductClick, title, subtitle, user, wishlist, onSignIn, mode }) {
  if (products.length === 0) {
    return (
      <div className="catalog-empty">
        No hay productos que coincidan con los filtros.
      </div>
    )
  }

  const isMarquee = mode === 'marquee'
  const renderCard = (p, i, total, keyPrefix = '') => (
    <CatalogCard
      key={keyPrefix + p.id}
      p={p}
      index={i % products.length}
      total={total}
      qty={qtyOf(p.id)}
      onAdd={onAdd}
      onSetQty={onSetQty}
      onProductClick={onProductClick}
      user={user}
      wishlist={wishlist}
      onSignIn={onSignIn}
    />
  )

  return (
    <div className={'catalog' + (isMarquee ? ' catalog--marquee' : '')}>
      <div className="catalog-head">
        <h2>{title || `Catálogo · ${products.length} productos`}</h2>
        <p className="catalog-sub">
          {subtitle || (
            <>Tocá <strong>Sumar al carrito</strong> para empezar tu pedido.</>
          )}
        </p>
      </div>

      {isMarquee ? (
        <div className="catalog-marquee" aria-label="Carrusel de promociones">
          <div className="catalog-marquee-track">
            {products.map((p, i) => renderCard(p, i, products.length, 'a-'))}
            {products.map((p, i) => renderCard(p, i, products.length, 'b-'))}
          </div>
        </div>
      ) : (
        <div className="catalog-grid">
          {products.map((p, i) => renderCard(p, i, products.length))}
        </div>
      )}
    </div>
  )
}
