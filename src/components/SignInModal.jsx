import { useEffect, useRef, useState } from 'react'
import { GOOGLE_CLIENT_ID } from '../lib/auth.js'

const GIS_SRC = 'https://accounts.google.com/gsi/client'
let gisLoadPromise = null

function loadGis() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  if (window.google?.accounts?.id) return Promise.resolve()
  if (gisLoadPromise) return gisLoadPromise
  gisLoadPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = GIS_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => {
      gisLoadPromise = null
      reject(new Error('No pudimos cargar Google Sign-In. Revisá tu conexión.'))
    }
    document.head.appendChild(s)
  })
  return gisLoadPromise
}

export default function SignInModal({ isOpen, onClose, onGoogleCredential, onDemoSignIn, gateForCheckout = false }) {
  const btnRef = useRef(null)
  const [demoEmail, setDemoEmail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    if (!isOpen || !GOOGLE_CLIENT_ID || !btnRef.current) return
    let cancelled = false
    setLoading(true)
    setError(null)
    loadGis()
      .then(() => {
        if (cancelled || !btnRef.current) return
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: response => {
            if (response?.credential) onGoogleCredential(response.credential)
          },
          auto_select: false,
          cancel_on_tap_outside: true
        })
        btnRef.current.innerHTML = ''
        window.google.accounts.id.renderButton(btnRef.current, {
          theme: 'outline',
          size: 'large',
          shape: 'pill',
          text: 'continue_with',
          width: 320
        })
      })
      .catch(err => { if (!cancelled) setError(err.message || 'Falló Google Sign-In') })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [isOpen, onGoogleCredential])

  function onDemoSubmit(e) {
    e.preventDefault()
    if (!demoEmail.includes('@')) {
      setError('Ingresá un email válido (con @)')
      return
    }
    onDemoSignIn(demoEmail.trim())
    setDemoEmail('')
  }

  if (!isOpen) return null

  return (
    <div className="modal-root is-open" role="dialog" aria-modal="true" aria-label="Iniciar sesión">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <div className="modal-head">
          <div className="modal-eyebrow">{gateForCheckout ? 'Falta un paso' : 'ROMAbeauty'}</div>
          <h2 className="modal-title">
            {gateForCheckout ? 'Iniciá sesión para finalizar tu compra' : 'Iniciá sesión'}
          </h2>
          <p className="modal-sub">
            {gateForCheckout
              ? <>Necesitamos saber a quién enviarle el pedido. Apenas entrás te llevamos al checkout.</>
              : <>Para guardar tus pedidos y reclamar tu <strong>10% de bienvenida</strong>.</>}
          </p>
        </div>

        {GOOGLE_CLIENT_ID ? (
          <div className="modal-google">
            {loading && <div className="modal-loading">Cargando Google…</div>}
            <div ref={btnRef} className="modal-google-btn" />
            {error && <div className="modal-error">{error}</div>}
          </div>
        ) : (
          <div className="modal-demo">
            <div className="modal-demo-note">
              <strong>Modo demo:</strong> el login real con Google se activa cuando configures{' '}
              <code>VITE_GOOGLE_CLIENT_ID</code> en Vercel. Mientras tanto, ingresá tu email para probar el flujo completo.
            </div>
            <form onSubmit={onDemoSubmit} className="modal-demo-form">
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={demoEmail}
                onChange={e => { setDemoEmail(e.target.value); setError(null) }}
                className="modal-demo-input"
                autoFocus
              />
              <button type="submit" className="modal-demo-btn">Entrar (demo)</button>
            </form>
            {error && <div className="modal-error">{error}</div>}
          </div>
        )}

        <p className="modal-fine">
          No compartimos tu email. Lo usamos para guardar tu cuenta y aplicar tu descuento.
        </p>
      </div>
    </div>
  )
}
