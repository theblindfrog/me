"use client"

import { useEffect, useRef } from "react"

interface AnimatedTilesImageProps {
  imageUrl: string
  alt: string
  className?: string
}

const MAX_OPACITIES = [
  [0.0, 0.2, 0.4, 0.6, 0.6, 0.4, 0.2, 0.0],
  [0.2, 0.4, 0.8, 1.0, 1.0, 0.6, 0.4, 0.2],
  [0.2, 0.4, 1.0, 1.0, 1.0, 0.8, 0.6, 0.2],
  [0.2, 0.6, 1.0, 1.0, 1.0, 1.0, 0.6, 0.2],
  [0.2, 0.6, 1.0, 1.0, 1.0, 1.0, 0.6, 0.2],
  [0.2, 0.4, 0.8, 1.0, 1.0, 0.8, 0.6, 0.2],
  [0.2, 0.4, 0.6, 0.8, 0.8, 0.6, 0.4, 0.1],
  [0.0, 0.2, 0.4, 0.4, 0.4, 0.2, 0.1, 0.0],
]

const COLS = 8
const ROWS = 8

export function AnimatedTilesImage({
  imageUrl,
  alt,
  className,
}: AnimatedTilesImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animFramesRef = useRef<number[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    containerRef.current.innerHTML = ""
    const tiles: HTMLDivElement[] = []

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const tile = document.createElement("div")
        tile.style.position = "absolute"
        tile.style.width = `${100 / COLS}%`
        tile.style.height = `${100 / ROWS}%`
        tile.style.left = `${(col / COLS) * 100}%`
        tile.style.top = `${(row / ROWS) * 100}%`
        tile.style.backgroundImage = `url(${imageUrl})`
        tile.style.backgroundSize = `${COLS * 100}% ${ROWS * 100}%`
        tile.style.backgroundPosition = `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`
        tile.style.opacity = "0"
        tiles.push(tile)
        containerRef.current.appendChild(tile)
      }
    }

    tiles.forEach((tile, i) => {
      const row = Math.floor(i / COLS)
      const col = i % COLS
      const maxOpacity = MAX_OPACITIES[row]?.[col] ?? 0
      const minOpacity = Math.max(0, maxOpacity - 0.4)
      const duration = Math.random() * 2 + 3

      if (maxOpacity === 0) {
        tile.style.opacity = "0"
        return
      }

      const startOffset = Math.random() * duration
      let startTime: number | null = null

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const elapsed = (currentTime - startTime) / 1000
        const progress = (elapsed + startOffset) % (duration * 2)
        const normalizedProgress =
          progress < duration
            ? progress / duration
            : (duration * 2 - progress) / duration
        tile.style.opacity = (
          minOpacity + (maxOpacity - minOpacity) * normalizedProgress
        ).toString()
        animFramesRef.current[i] = requestAnimationFrame(animate)
      }

      animFramesRef.current[i] = requestAnimationFrame(animate)
    })

    return () => {
      animFramesRef.current.forEach(cancelAnimationFrame)
    }
  }, [imageUrl])

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${className ?? ""}`}
    />
  )
}
