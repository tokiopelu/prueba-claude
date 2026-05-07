import { useEffect, useRef } from 'react'

const INTERACTIVE_SELECTOR = 'button, a, [role="button"]'
const TEXT_INPUT_SELECTOR = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]'

export default function Cursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    if (!dot) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let x = targetX
    let y = targetY
    let currentInteractive = null
    let currentTextInput = null

    function onMove(e) {
      targetX = e.clientX
      targetY = e.clientY
    }

    // Single mouseover handler tracks the *interactive ancestor* of the current
    // target. State only changes when that ancestor itself changes, so moving
    // between nested children of the same button no longer flickers.
    function onOver(e) {
      const t = e.target
      const interactive = t.closest ? t.closest(INTERACTIVE_SELECTOR) : null
      if (interactive !== currentInteractive) {
        currentInteractive = interactive
        if (interactive) dot.classList.add('is-hover')
        else dot.classList.remove('is-hover')
      }

      const textInput = t.closest ? t.closest(TEXT_INPUT_SELECTOR) : null
      if (textInput !== currentTextInput) {
        currentTextInput = textInput
        if (textInput) dot.classList.add('is-text')
        else dot.classList.remove('is-text')
      }
    }

    function tick() {
      // Tighter lerp (was 0.22) → less perceived latency on Windows where the
      // hardware cursor smoothing is normally instant.
      x += (targetX - x) * 0.55
      y += (targetY - y) * 0.55
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    document.body.classList.add('has-custom-cursor')
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" aria-hidden />
}
