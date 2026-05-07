const OFFERS = [
  '🚚 Envío gratis a todo el país desde $80.000',
  '💳 3 cuotas sin interés con todas las tarjetas',
  '🔥 20% off en La Puissance · Línea Extra Cell Plex',
  '✨ 15% off en kits Hydrashine Complex',
  '⏳ Fidelité Caviar Mythical · 2x1 en máscaras seleccionadas',
  '🎁 Synergy Blend de Opción · Combo Argán & CBD con regalo',
  '⚡ Despacho express en CABA y GBA en 24 hs',
  '💌 Suscribite y llevate 10% off en tu primera compra'
]

export default function TopBar() {
  // Duplicate the list so the CSS marquee animation loops seamlessly.
  const items = [...OFFERS, ...OFFERS]
  return (
    <div className="top-bar">
      <div className="top-bar-track">
        {items.map((msg, i) => (
          <span key={i} className="top-bar-msg">
            {msg}
            <span className="top-bar-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
