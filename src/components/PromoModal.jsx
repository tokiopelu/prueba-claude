import { useEffect } from 'react'

const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/' },
  { name: 'WhatsApp', href: 'https://wa.me/' }
]

export default function PromoModal({ isOpen, onClose, onClaim, isClaimed, isUsed, isActive, monthLabel }) {
  useEffect(() => {
    if (!isOpen) return
    function onKey(e) { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-root is-open" role="dialog" aria-modal="true" aria-label="10% de descuento de bienvenida">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card modal-card--promo">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <div className="modal-head">
          <div className="modal-eyebrow">Promo de bienvenida</div>
          <h2 className="modal-title">10% off en tu primera compra del mes</h2>
          <p className="modal-sub">
            Seguinos en nuestras tres redes y reclamá <strong>10% de descuento</strong> en tu próxima compra.
            Válido <strong>una vez por mes calendario</strong>.
          </p>
        </div>

        <ul className="promo-socials">
          {SOCIALS.map(s => (
            <li key={s.name}>
              <a className="promo-social" href={s.href} target="_blank" rel="noreferrer noopener">
                <span className="promo-social-name">@romahair en {s.name}</span>
                <span className="promo-social-cta">Seguir →</span>
              </a>
            </li>
          ))}
        </ul>

        {isUsed ? (
          <div className="promo-state promo-state--used">
            Ya usaste tu 10% en {monthLabel}. Volvé el mes que viene para reclamar otro.
          </div>
        ) : isActive ? (
          <div className="promo-state promo-state--active">
            Tu 10% está activo y se aplica automáticamente al checkout.
          </div>
        ) : isClaimed ? (
          <div className="promo-state promo-state--active">
            Cupón reclamado. Se aplica automáticamente al checkout.
          </div>
        ) : (
          <button className="promo-claim-btn" onClick={onClaim}>
            Ya los sigo, dame mi 10%
          </button>
        )}

        <p className="modal-fine">
          Confiamos en vos: no verificamos los follows. Si abusás, nos rompés el corazón.
        </p>
      </div>
    </div>
  )
}
