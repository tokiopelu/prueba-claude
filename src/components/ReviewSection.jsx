import { useState } from 'react'

function StarPicker({ value, onChange, disabled }) {
  return (
    <div className="star-picker" role="radiogroup" aria-label="Puntuación">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} de 5 estrellas`}
          className={'star-picker-btn' + (value >= n ? ' is-on' : '')}
          onClick={() => !disabled && onChange(n)}
          disabled={disabled}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function StaticStars({ rating, size = 'sm' }) {
  return (
    <span className={`static-stars static-stars--${size}`} aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className={n <= rating ? 'is-on' : ''}>★</span>
      ))}
    </span>
  )
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch {
    return ''
  }
}

function StatsBar({ stats }) {
  if (stats.count === 0) return null
  const max = Math.max(...stats.distribution)
  return (
    <div className="reviews-stats">
      <div className="reviews-stats-headline">
        <span className="reviews-stats-avg">{stats.average.toFixed(1)}</span>
        <StaticStars rating={Math.round(stats.average)} size="md" />
        <span className="reviews-stats-count">
          {stats.count} {stats.count === 1 ? 'reseña' : 'reseñas'}
        </span>
      </div>
      <ul className="reviews-stats-bars">
        {[5, 4, 3, 2, 1].map(n => {
          const c = stats.distribution[n - 1]
          const pct = max === 0 ? 0 : Math.round((c / max) * 100)
          return (
            <li key={n} className="reviews-stats-row">
              <span className="reviews-stats-label">{n}★</span>
              <span className="reviews-stats-bar">
                <span className="reviews-stats-fill" style={{ width: `${pct}%` }} />
              </span>
              <span className="reviews-stats-num">{c}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function ReviewSection({ productId, productName, user, reviewsHook, onSignIn }) {
  const reviews = reviewsHook.getProductReviews(productId)
  const stats = reviewsHook.getProductStats(productId)
  const myReview = reviewsHook.getMyReview(productId, user?.email)
  const [editing, setEditing] = useState(false)
  const [rating, setRating] = useState(myReview?.rating || 0)
  const [text, setText] = useState(myReview?.text || '')
  const [error, setError] = useState(null)
  const showForm = !!user && (editing || !myReview)

  function startEdit() {
    setRating(myReview?.rating || 0)
    setText(myReview?.text || '')
    setError(null)
    setEditing(true)
  }

  function cancelEdit() {
    setEditing(false)
    setRating(myReview?.rating || 0)
    setText(myReview?.text || '')
    setError(null)
  }

  function onSubmit(e) {
    e.preventDefault()
    if (rating < 1) {
      setError('Elegí cuántas estrellas le pondrías')
      return
    }
    reviewsHook.addReview({ productId, user, rating, text })
    setEditing(false)
    setError(null)
  }

  function onDelete() {
    if (!myReview) return
    if (!confirm('¿Borrar tu reseña?')) return
    reviewsHook.removeReview(myReview.id, user.email)
    setEditing(false)
    setRating(0)
    setText('')
  }

  return (
    <section className="product-section">
      <h2 className="product-section-h">Reseñas de clientes</h2>

      <div className="reviews-head">
        <StatsBar stats={stats} />

        {!user && (
          <div className="reviews-cta">
            <p>Iniciá sesión para dejar tu reseña.</p>
            <button className="checkout-back-btn" onClick={onSignIn}>
              Iniciar sesión
            </button>
          </div>
        )}

        {user && myReview && !editing && (
          <div className="reviews-mine">
            <div className="reviews-mine-h">Tu reseña</div>
            <StaticStars rating={myReview.rating} />
            {myReview.text && <p className="reviews-mine-text">{myReview.text}</p>}
            <div className="reviews-mine-actions">
              <button className="reviews-edit-btn" onClick={startEdit}>Editar</button>
              <button className="reviews-delete-btn" onClick={onDelete}>Borrar</button>
            </div>
          </div>
        )}
      </div>

      {showForm && (
        <form className="review-form" onSubmit={onSubmit}>
          <div className="review-form-h">
            {myReview ? 'Editá tu reseña' : `¿Cómo te resultó ${productName}?`}
          </div>
          <StarPicker value={rating} onChange={setRating} />
          <textarea
            className="review-form-text"
            placeholder="Contales a otras personas qué te gustó, qué tipo de pelo tenés, cómo lo usaste… (opcional)"
            value={text}
            onChange={e => { setText(e.target.value); setError(null) }}
            maxLength={1000}
            rows={4}
          />
          <div className="review-form-foot">
            <span className="review-form-counter">{text.length}/1000</span>
            <div className="review-form-actions">
              {editing && (
                <button type="button" className="review-cancel-btn" onClick={cancelEdit}>
                  Cancelar
                </button>
              )}
              <button type="submit" className="review-submit-btn">
                {myReview ? 'Guardar cambios' : 'Publicar reseña'}
              </button>
            </div>
          </div>
          {error && <div className="form-error">{error}</div>}
        </form>
      )}

      {reviews.length === 0 ? (
        <div className="reviews-empty">
          {user
            ? <>Sé el primero en reseñar este producto.</>
            : <>Todavía no hay reseñas. <button className="link-btn" onClick={onSignIn}>Iniciá sesión</button> para escribir la primera.</>}
        </div>
      ) : (
        <ul className="reviews-list">
          {reviews.map(r => (
            <li key={r.id} className="review-item">
              <div className="review-head">
                {r.userAvatar
                  ? <img className="review-avatar" src={r.userAvatar} alt="" referrerPolicy="no-referrer" />
                  : <span className="review-avatar review-avatar--initial">{r.userName[0]?.toUpperCase()}</span>}
                <div className="review-meta">
                  <div className="review-name">{r.userName}</div>
                  <div className="review-date">{formatDate(r.createdAt)}</div>
                </div>
                <StaticStars rating={r.rating} />
              </div>
              {r.text && <p className="review-text">{r.text}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
