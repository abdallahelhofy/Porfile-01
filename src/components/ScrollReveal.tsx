"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Easing, type Variants } from "framer-motion"

const ease: Easing = [0.25, 0.46, 0.45, 0.94]

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  blur?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 30,
  blur = "4px",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: `blur(${blur})` }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.06,
  once = true,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease },
  },
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  )
}
