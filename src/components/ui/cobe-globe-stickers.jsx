import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

const defaultMarkers = [
  { id: "wheat", location: [48.86, 2.35], sticker: "🌾" },
  { id: "rice", location: [35.68, 139.65], sticker: "🍚" },
  { id: "spices", location: [40.71, -74.01], sticker: "🌶️" },
  { id: "mango", location: [-22.91, -43.17], sticker: "🥭" },
  { id: "organic", location: [-33.87, 151.21], sticker: "🌿" },
  { id: "fmcg", location: [30.04, 31.24], sticker: "📦" },
  { id: "tea", location: [41.9, 12.5], sticker: "☕" },
  { id: "nuts", location: [19.43, -99.13], sticker: "🥜" },
  { id: "coconut", location: [28.61, 77.21], sticker: "🥥" },
  { id: "honey", location: [64.15, -21.94], sticker: "🍯" },
  { id: "citrus", location: [51.51, -0.13], sticker: "🍋" },
  { id: "onion", location: [21.31, -157.86], sticker: "🧅" },
  { id: "grains", location: [52.37, 4.9], sticker: "🌽" },
  { id: "fruits", location: [39.9, 116.4], sticker: "🍎" },
  { id: "packaged", location: [55.75, 37.62], sticker: "🥫" },
  { id: "cotton", location: [37.57, 126.98], sticker: "🧵" },
]

export function GlobeStickers({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe = null
    let animationId
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [1, 1, 1],
        markerColor: [0.85, 0.35, 0.6],
        glowColor: [0.94, 0.93, 0.91],
        markerElevation: 0,
        markers: markers.map((m) => ({ location: m.location, size: 0.03, id: m.id })),
        arcs: [],
        arcColor: [0.9, 0.4, 0.7],
        arcWidth: 0.5,
        arcHeight: 0.25,
        opacity: 0.7,
      })
      function animate() {
        if (!isPausedRef.current) phi += speed
        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="sticker-outline">
            <feMorphology in="SourceAlpha" result="Dilated" operator="dilate" radius="2" />
            <feFlood floodColor="#ffffff" result="OutlineColor" />
            <feComposite in="OutlineColor" in2="Dilated" operator="in" result="Outline" />
            <feMerge>
              <feMergeNode in="Outline" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%", height: "100%", cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none",
        }}
      />
      {markers.map((m, i) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            positionAnchor: `--cobe-${m.id}`,
            bottom: "anchor(top)",
            left: "anchor(center)",
            translate: "-50% 0",
            fontSize: "2rem",
            lineHeight: 1,
            transform: `rotate(${[-8, 6, -4, 10][i % 4]}deg)`,
            filter: "url(#sticker-outline) drop-shadow(0 2px 3px rgba(0,0,0,0.3))",
            pointerEvents: "none",
            opacity: `var(--cobe-visible-${m.id}, 0)`,
            transition: "opacity 0.2s, filter 0.2s",
          }}
        >
          {m.sticker}
        </div>
      ))}
    </div>
  )
}
