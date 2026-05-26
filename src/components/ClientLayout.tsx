"use client"

import { useState, type ReactNode } from "react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Particles } from "@/components/effects/Particles"
import { GridBackground } from "@/components/effects/GridBackground"
import { GlowingOrbs } from "@/components/effects/GlowingOrbs"
import { CursorGlow } from "@/components/effects/CursorGlow"
import { ScrollProgress } from "@/components/ScrollProgress"
import { LoadingScreen } from "@/components/LoadingScreen"
import { LenisProvider } from "@/components/LenisProvider"

export function ClientLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.8s ease",
        }}
      >
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
      </div>
    </>
  )
}
