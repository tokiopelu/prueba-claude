import { useEffect, useRef, useState } from 'react'
import { NAV_GROUPS } from '../lib/nav.js'

export default function CategoriesNav({ activeGroup, onPickGroup }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const closeTimer = useRef(null)

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

  function openNow() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpen(true)
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  function pick(label) {
    setOpen(false)
    onPickGroup(label)
  }

  return (
    <div
      className="cat-menu"
      ref={wrapRef}
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      <button
        className={'cat-menu-btn' + (open ? ' is-open' : '')}
        onClick={() => setOpen(o => !o)}
        onFocus={openNow}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Abrir menú de categorías"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
          <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
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
