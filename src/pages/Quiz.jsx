import { useEffect, useMemo, useState } from 'react'
import { QUESTIONS, recommendProducts, summarizeAnswers, saveQuizResult, loadQuizResult } from '../lib/quiz.js'
import { productMeta } from '../lib/meta.js'
import { useSEO } from '../lib/seo.js'

function formatARS(n) {
  return n.toLocaleString('es-AR')
}

export default function Quiz({ user, onAdd, onNavigate, onSignIn }) {
  const [step, setStep] = useState(0) // 0=intro, 1..N=questions, N+1=results
  const [answers, setAnswers] = useState({})
  const [emailInput, setEmailInput] = useState(user?.email || '')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  useSEO({
    title: 'Quiz · ¿qué productos para el pelo necesitás?',
    description: 'Hacé el quiz de cuidado capilar y recibí 3 recomendaciones personalizadas según tu tipo de pelo, textura, daño y presupuesto. La curaduría argentina de ROMAhair.',
    path: '/quiz'
  })

  const totalSteps = QUESTIONS.length
  const isResults = step === totalSteps + 1
  const currentQuestionIndex = step - 1
  const currentQuestion = QUESTIONS[currentQuestionIndex]

  const recommendations = useMemo(() => {
    if (!isResults) return []
    return recommendProducts(answers)
  }, [isResults, answers])

  useEffect(() => {
    if (isResults && recommendations.length > 0) {
      saveQuizResult({ answers, productIds: recommendations.map(p => p.id) })
    }
  }, [isResults, recommendations, answers])

  function selectOption(qid, value) {
    const next = { ...answers, [qid]: value }
    setAnswers(next)
    // Auto-advance after a short pause for the highlight to be perceived
    setTimeout(() => {
      setStep(s => s + 1)
    }, 200)
  }

  function goBack() {
    setStep(s => Math.max(0, s - 1))
  }

  function restart() {
    setAnswers({})
    setStep(0)
    setEmailSubmitted(false)
  }

  function startQuiz() {
    setStep(1)
  }

  function addAllToCart() {
    for (const p of recommendations) {
      onAdd(p.id)
    }
  }

  function submitEmail(e) {
    e.preventDefault()
    if (!emailInput.includes('@')) return
    setEmailSubmitted(true)
    // TODO: when newsletter backend is wired, POST to /api/subscribe with the email + answers
  }

  // Resume previous quiz banner
  const previous = useMemo(() => loadQuizResult(), [])

  if (step === 0) {
    return (
      <main className="container quiz-page">
        <div className="quiz-intro">
          <div className="quiz-intro-eyebrow">Quiz · 5 preguntas · 1 minuto</div>
          <h1 className="quiz-intro-title">
            ¿Qué productos necesita <em>tu</em> pelo?
          </h1>
          <p className="quiz-intro-sub">
            Contestá 5 preguntas rápidas y te armamos una rutina de 3 productos
            del catálogo, elegidos para tu tipo de pelo, textura, preocupación
            principal y presupuesto.
          </p>
          <div className="quiz-intro-actions">
            <button className="quiz-cta-btn" onClick={startQuiz}>
              Empezar el quiz →
            </button>
            <button className="quiz-back-btn" onClick={() => onNavigate('/')}>
              Volver al catálogo
            </button>
          </div>
          {previous?.productIds?.length > 0 && (
            <div className="quiz-resume">
              Ya hiciste el quiz. <button className="link-btn" onClick={() => { setAnswers(previous.answers); setStep(totalSteps + 1) }}>
                Ver tu última rutina
              </button>
            </div>
          )}
          <ul className="quiz-intro-perks">
            <li>· Sin spam</li>
            <li>· Recomendaciones honestas, no las más caras</li>
            <li>· Resultado inmediato</li>
          </ul>
        </div>
      </main>
    )
  }

  if (currentQuestion) {
    const selected = answers[currentQuestion.id]
    return (
      <main className="container quiz-page">
        <div className="quiz-step">
          <div className="quiz-progress" aria-label={`Paso ${step} de ${totalSteps}`}>
            {QUESTIONS.map((q, i) => (
              <span
                key={q.id}
                className={'quiz-progress-dot' + (i < step ? ' is-done' : '') + (i === step - 1 ? ' is-active' : '')}
              />
            ))}
            <span className="quiz-progress-label">{step} / {totalSteps}</span>
          </div>

          <h2 className="quiz-question">{currentQuestion.question}</h2>
          {currentQuestion.subtitle && (
            <p className="quiz-question-sub">{currentQuestion.subtitle}</p>
          )}

          <div className="quiz-options">
            {currentQuestion.options.map(opt => (
              <button
                key={opt.value}
                className={'quiz-option' + (selected === opt.value ? ' is-on' : '')}
                onClick={() => selectOption(currentQuestion.id, opt.value)}
                aria-pressed={selected === opt.value}
              >
                <span className="quiz-option-body">
                  <span className="quiz-option-label">{opt.label}</span>
                  {opt.description && (
                    <span className="quiz-option-desc">{opt.description}</span>
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="quiz-step-foot">
            {step > 1 && (
              <button className="quiz-back-btn" onClick={goBack}>← Volver</button>
            )}
          </div>
        </div>
      </main>
    )
  }

  // Results
  return (
    <main className="container quiz-page">
      <div className="quiz-results">
        <div className="quiz-results-head">
          <div className="quiz-intro-eyebrow">Tu rutina ROMAhair</div>
          <h1 className="quiz-results-title">
            Una rutina de <em>3 productos</em> para vos
          </h1>
          <p className="quiz-results-sub">
            Para {summarizeAnswers(answers) || 'tu perfil'}.
          </p>
        </div>

        {recommendations.length === 0 ? (
          <div className="quiz-empty">
            <p>No encontramos productos en tu rango de presupuesto. Probá ampliándolo.</p>
            <button className="quiz-back-btn" onClick={restart}>Rehacer el quiz</button>
          </div>
        ) : (
          <>
            <ul className="quiz-rec-list">
              {recommendations.map((p, i) => {
                const meta = productMeta(p)
                return (
                  <li key={p.id} className="quiz-rec-card">
                    <div className="quiz-rec-step">Paso {i + 1}</div>
                    <button
                      className="quiz-rec-img-btn"
                      onClick={() => onNavigate(`/p/${p.id}`)}
                      aria-label={`Ver ${p.name}`}
                    >
                      <div className="quiz-rec-img">
                        {p.imageUrl
                          ? <img src={p.imageUrl} alt={p.name} loading="lazy" />
                          : <span>{p.image}</span>}
                        {meta.discount > 0 && <span className="quiz-rec-badge">−{meta.discount}%</span>}
                      </div>
                    </button>
                    <div className="quiz-rec-body">
                      <div className="quiz-rec-meta">{p.brand} · {p.subcategory}</div>
                      <button
                        type="button"
                        className="quiz-rec-name"
                        onClick={() => onNavigate(`/p/${p.id}`)}
                      >
                        {p.name}
                      </button>
                      <div className="quiz-rec-pricing">
                        {meta.discount > 0 ? (
                          <>
                            <span className="quiz-rec-price-was">${formatARS(p.price)}</span>
                            <span className="quiz-rec-price">${formatARS(meta.finalPrice)}</span>
                          </>
                        ) : (
                          <span className="quiz-rec-price">${formatARS(p.price)}</span>
                        )}
                      </div>
                      <button
                        className="quiz-rec-add-btn"
                        onClick={() => onAdd(p.id)}
                      >
                        Sumar al carrito
                      </button>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="quiz-results-actions">
              <button className="quiz-cta-btn" onClick={addAllToCart}>
                Sumar los 3 al carrito
              </button>
              <button className="quiz-back-btn" onClick={restart}>
                Rehacer el quiz
              </button>
            </div>

            <div className="quiz-email-capture">
              {emailSubmitted ? (
                <div className="quiz-email-thanks">
                  Listo. Te llegaría un email con tu rutina y un cupón de bienvenida.
                  <span className="quiz-email-fine">
                    (Cuando conectemos el servicio de email — por ahora guardamos tu interés.)
                  </span>
                </div>
              ) : (
                <form className="quiz-email-form" onSubmit={submitEmail}>
                  <div className="quiz-email-h">Recibí tu rutina por email</div>
                  <p className="quiz-email-sub">
                    Te mandamos los 3 productos + un <strong>cupón de 10% off</strong> para tu primera compra.
                  </p>
                  <div className="quiz-email-row">
                    <input
                      type="email"
                      required
                      className="quiz-email-input"
                      placeholder="tu@email.com"
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                    />
                    <button type="submit" className="quiz-email-btn">Enviarme</button>
                  </div>
                </form>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
