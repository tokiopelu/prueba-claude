export default function Chips({ items, onRemove, onClear }) {
  if (items.length === 0) return null
  return (
    <div className="chips-row">
      {items.map(p => (
        <span key={p.id} className="chip" style={{ '--chip-color': p.color }}>
          <span className="chip-dot" aria-hidden>{p.image}</span>
          {p.name}
          <button
            className="chip-x"
            onClick={() => onRemove(p.id)}
            aria-label={`Quitar ${p.name}`}
          >×</button>
        </span>
      ))}
      {items.length > 1 && (
        <button className="chip-clear" onClick={onClear}>Limpiar todo</button>
      )}
    </div>
  )
}
