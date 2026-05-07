import { useEffect, useState } from 'react'

const OFFERS = [
  'Envío gratis en todo el país en compras desde $80.000',
  '3 cuotas sin interés con todas las tarjetas',
  '20% off en La Puissance · Línea Extra Cell Plex',
  '15% off en kits Hydrashine Complex',
  'Fidelité Caviar Mythical · 2x1 en máscaras seleccionadas',
  'Synergy Blend de Opción · Combo Argán & CBD con regalo',
  'Despacho express en CABA y GBA en 24 hs',
  'Suscribite y recibí 10% off en tu primera compra'
]

export default function TopBar() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setI(prev => (prev + 1) % OFFERS.length), 4500)
    return () => clearInterval(id)
  }, [paused])

  function go(delta) {
    setI(prev => (prev + delta + OFFERS.length) % OFFERS.length)
  }

  return (
    <div
      className="top-bar"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container top-bar-row">
        <button
          aria-label="Oferta anterior"
          className="top-bar-arrow"
          onClick={() => go(-1)}
        >‹</button>

        <div className="top-bar-stage" aria-live="polite">
          {OFFERS.map((msg, idx) => (
            <span
              key={idx}
              className={'top-bar-msg' + (idx === i ? ' is-active' : '')}
            >
              {msg}
            </span>
          ))}
        </div>

        <button
          aria-label="Oferta siguiente"
          className="top-bar-arrow"
          onClick={() => go(1)}
        >›</button>
      </div>
    </div>
  )
}
