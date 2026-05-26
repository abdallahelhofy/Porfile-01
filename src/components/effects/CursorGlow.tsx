"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })

  const springX = useSpring(mousePos.x, { stiffness: 50, damping: 20 })
  const springY = useSpring(mousePos.y, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[60] w-64 h-64 rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)",
      }}
    />
  )
}
