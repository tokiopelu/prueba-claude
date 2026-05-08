export default function WishlistButton({ productId, isFavorite, isLoggedIn, onToggle, onSignIn, size = 'md' }) {
  function onClick(e) {
    e.preventDefault()
    e.stopPropagation()
    if (!isLoggedIn) {
      onSignIn?.()
      return
    }
    onToggle?.(productId)
  }

  return (
    <button
      type="button"
      className={`wish-btn wish-btn--${size}` + (isFavorite ? ' is-on' : '')}
      onClick={onClick}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      aria-pressed={isFavorite}
      title={isLoggedIn
        ? (isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos')
        : 'Iniciá sesión para guardar favoritos'}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
        <path
          d="M12 21s-7.5-4.5-9.5-9C1 8.5 3 5 6.5 5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3C21 5 23 8.5 21.5 12c-2 4.5-9.5 9-9.5 9z"
          fill={isFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
