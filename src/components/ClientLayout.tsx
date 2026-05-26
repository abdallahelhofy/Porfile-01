"use client"

import type { ReactNode } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Particles } from "@/components/effects/Particles"
import { GridBackground } from "@/components/effects/GridBackground"
import { GlowingOrbs } from "@/components/effects/GlowingOrbs"
import { CursorGlow } from "@/components/effects/CursorGlow"
import { ScrollProgress } from "@/components/ScrollProgress"
import { LenisProvider } from "@/components/LenisProvider"

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="grain" />
      <LenisProvider>
        <ScrollProgress />
        <Particles count={40} />
        <GridBackground />
        <GlowingOrbs />
        <CursorGlow />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </LenisProvider>
    </>
  )
}
