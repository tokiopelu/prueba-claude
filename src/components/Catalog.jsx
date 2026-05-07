import { useReveal } from '../lib/reveal.js'

function CatalogCard({ p, index, total, isSelected, onAdd, onRemove }) {
  const ref = useReveal()
  const indexLabel = String(index + 1).padStart(2, '0')
  const totalLabel = String(total).padStart(2, '0')
  return (
    <article
      ref={ref}
      className={'cat-card reveal' + (isSelected ? ' is-selected' : '')}
    >
      <span className="cat-index">{indexLabel} / {totalLabel}</span>
      <div className="cat-img">
        {p.imageUrl
          ? <img src={p.imageUrl} alt={p.name} loading="lazy" />
          : <span>{p.image}</span>}
        <span className="cat-brand-badge">{p.brand}</span>
      </div>
      <div className="cat-body">
        <div className="cat-line">{p.line} · {p.subcategory}</div>
        <h3 className="cat-name">{p.name}</h3>
        <div className="cat-meta">
          <span className="cat-rating">★ {p.rating.toFixed(1)}</span>
          <span className="cat-size">{p.characteristics?.size}</span>
        </div>
        <div className="cat-foot">
          <span className="cat-price">${p.price.toLocaleString('es-AR')}</span>
          {isSelected ? (
            <button className="cat-btn cat-btn--remove" onClick={() => onRemove(p.id)}>
              ✓ Agregado
            </button>
          ) : (
            <button className="cat-btn" onClick={() => onAdd(p.id)}>
              Agregar
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Catalog({ products, selectedIds, onAdd, onRemove }) {
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
        <h2>Catálogo · {products.length} productos</h2>
        <p className="catalog-sub">
          Tocá <strong>Agregar</strong> para sumarlo a tu comparación.
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
