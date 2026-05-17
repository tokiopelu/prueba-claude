import { useEffect, useRef, useState } from 'react'
import { NAV_GROUPS } from '../lib/nav.js'

export default function CategoriesNav({ activeGroup, onPickGroup }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function pick(label) {
    setOpen(false)
    onPickGroup(label)
  }

  const triggerLabel = activeGroup && activeGroup !== 'Todos'
    ? activeGroup
    : 'Menú'

  return (
    <div className="cat-menu" ref={wrapRef}>
      <button
        className={'cat-menu-btn' + (open ? ' is-open' : '')}
        onClick={() => setOpen(o => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{triggerLabel}</span>
        <span className="cat-menu-caret" aria-hidden>▾</span>
      </button>
      {open && (
        <div className="cat-menu-panel" role="menu">
          <button
            className={'cat-menu-item' + (activeGroup === 'Todos' ? ' is-on' : '')}
            onClick={() => pick('Todos')}
            role="menuitem"
          >
            Ver todo
          </button>
          {NAV_GROUPS.map(g => (
            <button
              key={g.label}
              className={'cat-menu-item' + (activeGroup === g.label ? ' is-on' : '')}
              onClick={() => pick(g.label)}
              role="menuitem"
            >
              {g.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
