export const NAV_GROUPS = [
  { label: 'Shampoo', subcategories: ['Champú'] },
  { label: 'Acondicionador', subcategories: ['Acondicionador'] },
  { label: 'Tratamientos', subcategories: ['Tratamiento', 'Mascarilla', 'Ampollas', 'Aceite', 'Sérum', 'Protector térmico'] },
  { label: 'Tinturas', subcategories: ['Coloración'] },
  { label: 'Styling', subcategories: ['Styling', 'Crema de peinar', 'Gel'] },
  { label: 'Herramientas', subcategories: [] }
]

export function findGroupForSubcategory(sub) {
  return NAV_GROUPS.find(g => g.subcategories.includes(sub))
}
