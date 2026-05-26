"use client"

import { useEffect, type ReactNode } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let lenisInstance: any

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const initLenis = async () => {
      const LenisMod = await import("@studio-freight/lenis")
      const Lenis = LenisMod.default
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      const raf = (time: number) => {
        lenisInstance.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenisInstance) lenisInstance.destroy()
    }
  }, [])

  return <>{children}</>
}
