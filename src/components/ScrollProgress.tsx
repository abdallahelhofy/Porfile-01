"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.01 && v < 0.99)
    })
    return () => unsub()
  }, [scrollYProgress])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1px] z-[100] origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-transparent"
      style={{ scaleX, opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  )
}
