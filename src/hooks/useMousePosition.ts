"use client"

import { useState, useEffect, type RefObject } from "react"

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return position
}

export function useMouseParallax(ref: RefObject<HTMLElement | null>, intensity = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const mousePosition = useMousePosition()

  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (mousePosition.x - centerX) / window.innerWidth
    const deltaY = (mousePosition.y - centerY) / window.innerHeight
    setOffset({
      x: deltaX * intensity,
      y: deltaY * intensity,
    })
  }, [mousePosition, ref, intensity])

  return offset
}
