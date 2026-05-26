"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll, motion } from "framer-motion"
import { useMousePosition } from "@/hooks/useMousePosition"

export function GlowingOrbs() {
  const { normalizedX, normalizedY } = useMousePosition()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [scrollVal, setScrollVal] = useState(0)

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrollVal(v))
    return () => unsub()
  }, [scrollYProgress])

  const orb1Opacity = Math.max(0.02, 0.08 - scrollVal * 0.12)
  const orb2Opacity = Math.max(0.01, 0.06 - (scrollVal - 0.3) * 0.15)
  const orb3Opacity = Math.max(0.01, 0.04 - (scrollVal - 0.5) * 0.1)

  return (
    <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
        animate={{
          x: normalizedX * -20,
          y: normalizedY * -20 + scrollVal * 10,
          opacity: orb1Opacity,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute top-3/4 -right-32 w-80 h-80 rounded-full"
        animate={{
          x: normalizedX * 20,
          y: normalizedY * 20 - scrollVal * 15,
          opacity: orb2Opacity,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full"
        animate={{
          x: `calc(-50% + ${normalizedX * -15}px)`,
          y: `calc(-50% + ${normalizedY * -15}px)`,
          opacity: orb3Opacity,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background:
            "radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
