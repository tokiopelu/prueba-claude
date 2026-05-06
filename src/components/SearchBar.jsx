import { useEffect, useMemo, useRef, useState } from 'react'

export default function SearchBar({ products, selectedIds, onAdd }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)
  const wrapRef = useRef(null)

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return products
      .filter(p => !selectedIds.includes(p.id))
      .filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
      .slice(0, 8)
  }, [query, products, selectedIds])

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function pick(p) {
    onAdd(p.id)
    setQuery('')
    setOpen(false)
    setHighlight(0)
  }

  function onKeyDown(e) {
    if (!open || matches.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight(h => Math.min(h + 1, matches.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      pick(matches[highlight])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="search" ref={wrapRef}>
      <div className="search-input-wrap">
        <span className="search-icon" aria-hidden>🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Buscá un producto, marca o categoría…"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); setHighlight(0) }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          aria-label="Buscar productos"
        />
      </div>
      {open && matches.length > 0 && (
        <ul className="search-dropdown" role="listbox">
          {matches.map((p, i) => (
            <li
              key={p.id}
              role="option"
              aria-selected={i === highlight}
              className={'search-option' + (i === highlight ? ' is-active' : '')}
              onMouseEnter={() => setHighlight(i)}
              onMouseDown={e => { e.preventDefault(); pick(p) }}
            >
              <span className="search-thumb" style={{ background: p.color }}>{p.image}</span>
              <div className="search-meta">
                <div className="search-name">{p.name}</div>
                <div className="search-sub">{p.brand} · {p.category}</div>
              </div>
              <span className="search-price">${p.price.toLocaleString('es-AR')}</span>
            </li>
          ))}
        </ul>
      )}
      {open && query && matches.length === 0 && (
        <div className="search-empty">Sin resultados para “{query}”.</div>
      )}
    </div>
  )
}
