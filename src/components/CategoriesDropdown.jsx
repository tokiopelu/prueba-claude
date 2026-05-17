import { useEffect, useRef, useState } from 'react'

export default function CategoriesDropdown({ subcategories, brands, onPickSubcategory, onPickBrand }) {
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

  function pickSubcategory(value) {
    setOpen(false)
    onPickSubcategory(value)
  }

  function pickBrand(value) {
    setOpen(false)
    onPickBrand(value)
  }

  return (
    <div className="cat-dd" ref={wrapRef}>
      <button
        className="cat-dd-btn"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>Categorías</span>
        <span className="cat-dd-caret" aria-hidden>▾</span>
      </button>
      {open && (
        <div className="cat-dd-menu" role="menu">
          <div className="cat-dd-col">
            <div className="cat-dd-h">Tipo de producto</div>
            <button className="cat-dd-item" onClick={() => pickSubcategory('Todos')} role="menuitem">
              Ver todo
            </button>
            {subcategories.map(s => (
              <button
                key={s}
                className="cat-dd-item"
                onClick={() => pickSubcategory(s)}
                role="menuitem"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="cat-dd-col">
            <div className="cat-dd-h">Marca</div>
            <button className="cat-dd-item" onClick={() => pickBrand('Todas')} role="menuitem">
              Todas las marcas
            </button>
            {brands.map(b => (
              <button
                key={b}
                className="cat-dd-item"
                onClick={() => pickBrand(b)}
                role="menuitem"
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
