import { products } from '../data/products.js'
import { productMeta } from './meta.js'

export const QUESTIONS = [
  {
    id: 'hairType',
    question: '¿Cómo está tu pelo?',
    subtitle: 'Esto nos ayuda a elegir productos que respeten tu base.',
    options: [
      { value: 'graso', label: 'Graso', description: 'Se ensucia rápido, raíz pesada' },
      { value: 'mixto', label: 'Mixto', description: 'Raíz grasa, puntas secas' },
      { value: 'normal', label: 'Normal', description: 'Equilibrado, sin extremos' },
      { value: 'seco', label: 'Seco', description: 'Falto de brillo, áspero al tacto' },
      { value: 'muy_seco', label: 'Muy seco', description: 'Puntas abiertas, sediento' }
    ]
  },
  {
    id: 'texture',
    question: '¿Qué textura tiene?',
    subtitle: 'Algunas fórmulas funcionan mejor según la curvatura.',
    options: [
      { value: 'liso', label: 'Liso', description: 'Sin movimiento natural' },
      { value: 'ondulado', label: 'Ondulado', description: 'Forma S suave' },
      { value: 'rizado', label: 'Rizado', description: 'Rulos definidos' },
      { value: 'muy_rizado', label: 'Muy rizado / afro', description: 'Espirales cerradas' }
    ]
  },
  {
    id: 'concern',
    question: '¿Cuál es tu mayor preocupación?',
    subtitle: 'Elegí la que más te molesta hoy.',
    options: [
      { value: 'frizz', label: 'Frizz', description: 'Encrespamiento, anti-volumen no deseado' },
      { value: 'damage', label: 'Daño y puntas', description: 'Pelo quebradizo, puntas abiertas' },
      { value: 'shine', label: 'Falta de brillo', description: 'Pelo opaco, sin luz' },
      { value: 'volume', label: 'Falta de volumen', description: 'Pelo aplastado o muy fino' },
      { value: 'color', label: 'Cuidado del color', description: 'Mantener tinte vibrante' },
      { value: 'hydration', label: 'Hidratación profunda', description: 'Pelo deshidratado o áspero' }
    ]
  },
  {
    id: 'colored',
    question: '¿Tu pelo está teñido o decolorado?',
    options: [
      { value: 'frequent', label: 'Sí, me retoco seguido', description: 'Color intenso, tratamiento frecuente' },
      { value: 'occasional', label: 'Sí, esporádico', description: 'Cambios de color ocasionales' },
      { value: 'no', label: 'No, color natural', description: 'Sin químicos de color' }
    ]
  },
  {
    id: 'budget',
    question: '¿Cuál es tu presupuesto mensual para el pelo?',
    subtitle: 'Recomendamos productos en tu rango.',
    options: [
      { value: 'budget', label: 'Hasta $20.000', description: 'Eficiente y accesible' },
      { value: 'medium', label: 'Hasta $50.000', description: 'Calidad sin estridencias' },
      { value: 'premium', label: 'Sin límite', description: 'Lo mejor del catálogo' }
    ]
  }
]

const HAIR_TYPE_MAP = {
  graso: ['Graso', 'Mixto', 'Todos'],
  mixto: ['Mixto', 'Graso', 'Seco', 'Todos'],
  normal: ['Normal', 'Todos'],
  seco: ['Seco', 'Muy seco', 'Todos'],
  muy_seco: ['Muy seco', 'Seco', 'Todos']
}

const CONCERN_MAP = {
  frizz: ['frizz', 'disciplina', 'control', 'liso'],
  damage: ['repar', 'reconstr', 'fortalec', 'antiage', 'puntas', 'queratina'],
  shine: ['brillo', 'lumin'],
  volume: ['volumen', 'densidad', 'cuerpo'],
  color: ['color', 'matiz', 'protege color'],
  hydration: ['hidrat', 'nutr', 'humect']
}

const BUDGET_LIMITS = {
  budget: 20000,
  medium: 50000,
  premium: Infinity
}

const SUBCATEGORY_GROUPS = {
  clean: ['Champú'],
  condition: ['Acondicionador', 'Mascarilla'],
  treat: ['Aceite', 'Sérum', 'Tratamiento', 'Ampollas', 'Crema de peinar', 'Styling']
}

function scoreProduct(product, answers) {
  const meta = productMeta(product)
  const characteristics = product.characteristics || {}
  const productHair = (characteristics.hairType || []).map(s => s.toString())
  const productBenefits = (characteristics.benefits || []).map(s => s.toString().toLowerCase())

  // Hard filter: budget
  const limit = BUDGET_LIMITS[answers.budget] || Infinity
  if (meta.finalPrice > limit) return -Infinity

  let score = 0

  // Hair type match (loose; "Todos" always counts a little)
  const wantedHair = HAIR_TYPE_MAP[answers.hairType] || []
  const directHairMatch = wantedHair.some(h => productHair.includes(h))
  if (directHairMatch) score += 3

  // Concern → benefits
  const concernKeywords = CONCERN_MAP[answers.concern] || []
  for (const keyword of concernKeywords) {
    if (productBenefits.some(b => b.includes(keyword))) {
      score += 5
      break // one match is enough; avoid stacking the same concern
    }
  }

  // Colored hair boost: products with "color" benefit get extra
  if (answers.colored && answers.colored !== 'no') {
    if (productBenefits.some(b => b.includes('color') || b.includes('matiz'))) score += 3
  }

  // Quality bonus
  if (product.rating >= 4.7) score += 1
  if (product.reviews >= 1000) score += 1

  // Discount tiebreaker (small)
  if (meta.discount > 0) score += 0.5

  return score
}

function pickTopByGroup(scoredProducts, groupSubcategories) {
  const matches = scoredProducts.filter(s =>
    groupSubcategories.includes(s.product.subcategory)
  )
  return matches[0] || null
}

export function recommendProducts(answers) {
  const scored = products
    .map(p => ({ product: p, score: scoreProduct(p, answers) }))
    .filter(s => s.score > -Infinity)
    .sort((a, b) => b.score - a.score)

  const picks = []
  const used = new Set()

  // Pick one from each group, in order: clean → condition → treat
  for (const groupKey of ['clean', 'condition', 'treat']) {
    const top = pickTopByGroup(
      scored.filter(s => !used.has(s.product.id)),
      SUBCATEGORY_GROUPS[groupKey]
    )
    if (top) {
      picks.push(top)
      used.add(top.product.id)
    }
  }

  // Fill remaining slots with the top scored regardless of group
  for (const s of scored) {
    if (picks.length >= 3) break
    if (used.has(s.product.id)) continue
    picks.push(s)
    used.add(s.product.id)
  }

  return picks.slice(0, 3).map(s => s.product)
}

export function summarizeAnswers(answers) {
  const parts = []
  const find = (qid, val) => {
    const q = QUESTIONS.find(x => x.id === qid)
    return q?.options.find(o => o.value === val)?.label || val
  }
  if (answers.hairType) parts.push(`pelo ${find('hairType', answers.hairType).toLowerCase()}`)
  if (answers.texture) parts.push(find('texture', answers.texture).toLowerCase())
  if (answers.concern) parts.push(`con foco en ${find('concern', answers.concern).toLowerCase()}`)
  return parts.join(' · ')
}

const STORAGE_KEY = 'romabeauty:quiz:v1'

export function saveQuizResult(payload) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...payload, savedAt: new Date().toISOString() }))
  } catch {
    /* ignore */
  }
}

export function loadQuizResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.answers) return null
    return parsed
  } catch {
    return null
  }
}
