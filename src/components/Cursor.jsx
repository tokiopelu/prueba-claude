import { useEffect, useRef } from 'react'

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

    function onMove(e) {
      targetX = e.clientX
      targetY = e.clientY
    }

    function onEnter(e) {
      const t = e.target
      if (t.closest('button, a, input, label, [role="button"]')) {
        dot.classList.add('is-hover')
      }
    }
    function onLeave(e) {
      const t = e.target
      if (t.closest && t.closest('button, a, input, label, [role="button"]')) {
        dot.classList.remove('is-hover')
      }
    }

    function tick() {
      x += (targetX - x) * 0.22
      y += (targetY - y) * 0.22
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    document.body.classList.add('has-custom-cursor')
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onEnter, true)
    window.addEventListener('mouseout', onLeave, true)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter, true)
      window.removeEventListener('mouseout', onLeave, true)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" aria-hidden />
}
