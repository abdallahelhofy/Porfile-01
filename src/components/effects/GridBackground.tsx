"use client"

import { useMousePosition } from "@/hooks/useMousePosition"

export function GridBackground() {
  const { normalizedX, normalizedY } = useMousePosition()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translate(${normalizedX * 10}px, ${normalizedY * 10}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: "12px 12px",
          transform: `translate(${normalizedX * -5}px, ${normalizedY * -5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, transparent 70%)",
          transform: `translate(calc(-50% + ${normalizedX * 30}px), calc(-50% + ${normalizedY * 30}px))`,
          transition: "transform 0.3s ease-out",
        }}
      />
    </div>
  )
}
