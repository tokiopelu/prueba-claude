function Stars({ value }) {
  const full = Math.round(value)
  return (
    <span className="stars" aria-label={`${value} sobre 5`}>
      {'★★★★★'.split('').map((s, i) => (
        <span key={i} className={i < full ? 'star is-on' : 'star'}>★</span>
      ))}
      <span className="stars-num">{value.toFixed(1)}</span>
    </span>
  )
}

function Specs({ characteristics }) {
  if (!characteristics) return null
  const c = characteristics
  return (
    <div className="specs">
      {c.size && (
        <div className="spec">
          <div className="spec-label">Tamaño</div>
          <div className="spec-value">{c.size}</div>
        </div>
      )}
      {c.hairType?.length > 0 && (
        <div className="spec">
          <div className="spec-label">Tipo de cabello</div>
          <div className="spec-tags">
            {c.hairType.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      )}
      {c.benefits?.length > 0 && (
        <div className="spec">
          <div className="spec-label">Beneficios</div>
          <div className="spec-tags">
            {c.benefits.map(b => <span key={b} className="tag tag--benefit">{b}</span>)}
          </div>
        </div>
      )}
      {c.keyIngredients?.length > 0 && (
        <div className="spec">
          <div className="spec-label">Ingredientes clave</div>
          <div className="spec-value spec-ingredients">{c.keyIngredients.join(', ')}</div>
        </div>
      )}
      {(c.sulfateFree || c.vegan || c.origin) && (
        <div className="spec spec-flags">
          {c.sulfateFree && <span className="flag">✓ Sin sulfatos</span>}
          {c.vegan && <span className="flag flag--vegan">✓ Vegano</span>}
          {c.origin && <span className="flag flag--origin">📍 {c.origin}</span>}
        </div>
      )}
    </div>
  )
}

export default function Ranking({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-emoji" aria-hidden>💁‍♀️</div>
        <h2>Empezá agregando productos</h2>
        <p>Buscá champús, mascarillas, aceites y más en la barra de arriba.</p>
      </div>
    )
  }

  const top = items[0]

  return (
    <div className="ranking">
      <div className="ranking-head">
        <h2>
          {items.length === 1
            ? 'Tu producto seleccionado'
            : `Ranking de ${items.length} productos`}
        </h2>
        {items.length > 1 && (
          <p className="ranking-sub">
            Ganador: <strong>{top.name}</strong> con un puntaje de{' '}
            <strong>{top.score}/100</strong>.
          </p>
        )}
      </div>

      <ol className="rank-list">
        {items.map((p, i) => (
          <li key={p.id} className={'rank-card' + (i === 0 ? ' is-winner' : '')}>
            <div className="rank-pos">
              {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
            </div>
            <div className="rank-img" style={{ background: p.color }}>
              {p.imageUrl
                ? <img src={p.imageUrl} alt={p.name} loading="lazy" />
                : <span>{p.image}</span>}
            </div>
            <div className="rank-body">
              <div className="rank-top">
                <div>
                  <div className="rank-brand">{p.brand}</div>
                  <h3 className="rank-name">{p.name}</h3>
                  <div className="rank-cat">{p.subcategory}</div>
                </div>
                <div className="rank-score">
                  <div className="score-num">{p.score}</div>
                  <div className="score-label">puntaje</div>
                </div>
              </div>

              <p className="rank-desc">{p.description}</p>

              <div className="rank-stats">
                <Stars value={p.rating} />
                <span className="stat">{p.reviews.toLocaleString('es-AR')} reseñas</span>
                <span className="stat price">${p.price.toLocaleString('es-AR')}</span>
              </div>

              <Specs characteristics={p.characteristics} />

              <div className="rank-proscons">
                <div>
                  <div className="pc-title pc-title--pro">Pros</div>
                  <ul>{p.pros.map(x => <li key={x}>{x}</li>)}</ul>
                </div>
                <div>
                  <div className="pc-title pc-title--con">Contras</div>
                  <ul>{p.cons.map(x => <li key={x}>{x}</li>)}</ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
