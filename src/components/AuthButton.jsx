import { useEffect, useRef, useState } from 'react'

export default function AuthButton({ user, discount, wishlistCount, onSignIn, onSignOut, onOpenPromo, onOpenWishlist }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    function onClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  if (!user) {
    return (
      <button className="auth-btn auth-btn--ghost" onClick={onSignIn} aria-label="Iniciar sesión">
        <svg className="auth-btn-svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden>
          <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 20c1.5-3.5 4.5-5.5 8-5.5s6.5 2 8 5.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="auth-btn-label">Entrar</span>
      </button>
    )
  }

  const initial = (user.firstName?.[0] || user.email?.[0] || '?').toUpperCase()
  const promoLabel = discount?.isUsed
    ? '10% ya usado este mes'
    : discount?.isActive
      ? '10% activo'
      : 'Reclamar mi 10%'

  return (
    <div className="auth-wrap" ref={wrapRef}>
      <button
        className="auth-btn auth-btn--user"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {user.avatar
          ? <img className="auth-avatar" src={user.avatar} alt="" referrerPolicy="no-referrer" />
          : <span className="auth-avatar auth-avatar--initial">{initial}</span>}
        <span className="auth-btn-name">Hola, {user.firstName || 'vos'}</span>
        <span className="auth-btn-caret" aria-hidden>▾</span>
      </button>
      {open && (
        <div className="auth-menu" role="menu">
          <div className="auth-menu-head">
            <div className="auth-menu-name">{user.name}</div>
            <div className="auth-menu-email">{user.email}</div>
          </div>
          <button
            className="auth-menu-item auth-menu-item--promo"
            onClick={() => { setOpen(false); onOpenPromo() }}
            role="menuitem"
          >
            <span>{promoLabel}</span>
          </button>
          <button
            className="auth-menu-item"
            onClick={() => { setOpen(false); onOpenWishlist?.() }}
            role="menuitem"
          >
            <span>Mis favoritos{wishlistCount > 0 ? ` (${wishlistCount})` : ''}</span>
          </button>
          <button
            className="auth-menu-item"
            onClick={() => { setOpen(false); onSignOut() }}
            role="menuitem"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}
