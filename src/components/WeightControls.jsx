export default function WeightControls({ weights, onChange }) {
  const set = (key, value) => onChange({ ...weights, [key]: Number(value) })
  return (
    <div className="weights">
      <div className="weights-title">Priorizar por</div>
      <div className="weights-grid">
        <label className="weight">
          <span>Calificación</span>
          <input
            type="range" min="0" max="100" step="5"
            value={weights.rating}
            onChange={e => set('rating', e.target.value)}
          />
          <em>{weights.rating}</em>
        </label>
        <label className="weight">
          <span>Reseñas</span>
          <input
            type="range" min="0" max="100" step="5"
            value={weights.reviews}
            onChange={e => set('reviews', e.target.value)}
          />
          <em>{weights.reviews}</em>
        </label>
        <label className="weight">
          <span>Precio bajo</span>
          <input
            type="range" min="0" max="100" step="5"
            value={weights.price}
            onChange={e => set('price', e.target.value)}
          />
          <em>{weights.price}</em>
        </label>
      </div>
    </div>
  )
}
