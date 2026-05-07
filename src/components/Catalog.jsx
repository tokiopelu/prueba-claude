import { useReveal } from '../lib/reveal.js'
import { productMeta } from '../lib/meta.js'

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

function CatalogCard({ p, index, total, isSelected, onAdd, onRemove }) {
  const ref = useReveal()
  const meta = productMeta(p)
  const indexLabel = String(index + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')
  return (
    <article
      ref={ref}
      className={'cat-card reveal' + (isSelected ? ' is-selected' : '')}
    >
      <span className="cat-index">{indexLabel} / {totalLabel}</span>
      {meta.discount > 0 && (
        <span className="cat-discount">−{meta.discount}%</span>
      )}
      {meta.urgency && (
        <span className="cat-urgency">{meta.urgency}</span>
      )}
      <div className="cat-img">
        {p.imageUrl
          ? <img src={p.imageUrl} alt={p.name} loading="lazy" />
          : <span>{p.image}</span>}
        <span className="cat-brand-badge">{p.brand}</span>
      </div>
      <div className="cat-body">
        <div className="cat-line">{p.line} · {p.subcategory}</div>
        <h3 className="cat-name">{p.name}</h3>

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

        <div className="cat-meta">
          <span className="cat-rating">★ {p.rating.toFixed(1)} <span className="cat-rating-count">({p.reviews.toLocaleString('es-AR')})</span></span>
          <span className="cat-size">{p.characteristics?.size}</span>
        </div>

        <div className="cat-foot">
          {isSelected ? (
            <button
              className="cat-btn cat-btn--remove"
              onClick={() => onRemove(p.id)}
            >
              ✓ En comparación
            </button>
          ) : (
            <button
              className="cat-btn"
              onClick={() => onAdd(p.id)}
            >
              Comprar
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Catalog({ products, selectedIds, onAdd, onRemove, title, subtitle }) {
  if (products.length === 0) {
    return (
      <div className="catalog-empty">
        No hay productos que coincidan con los filtros.
      </div>
    )
  }

  return (
    <div className="catalog">
      <div className="catalog-head">
        <h2>{title || `Catálogo · ${products.length} productos`}</h2>
        <p className="catalog-sub">
          {subtitle || (
            <>Tocá <strong>Comprar</strong> para sumarlo a tu comparación.</>
          )}
        </p>
      </div>

      <div className="catalog-grid">
        {products.map((p, i) => (
          <CatalogCard
            key={p.id}
            p={p}
            index={i}
            total={products.length}
            isSelected={selectedIds.includes(p.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}
