import { NAV_GROUPS } from '../lib/nav.js'

export default function CategoriesNav({ activeGroup, onPickGroup }) {
  return (
    <nav className="cat-nav" aria-label="Categorías">
      <div className="container cat-nav-inner">
        <ul className="cat-nav-list">
          {NAV_GROUPS.map(g => (
            <li key={g.label}>
              <button
                className={'cat-nav-link' + (activeGroup === g.label ? ' is-on' : '')}
                onClick={() => onPickGroup(g.label)}
                aria-current={activeGroup === g.label ? 'page' : undefined}
              >
                {g.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
