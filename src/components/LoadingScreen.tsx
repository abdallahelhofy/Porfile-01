"use client"

import { useEffect, useState, useRef } from "react"

const bootMessages = [
  "Initializing backend systems...",
  "Connecting to infrastructure...",
  "Loading API services...",
  "Establishing secure connection...",
  "Deploying portfolio experience...",
]

export function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [line, setLine] = useState(0)
  const [text, setText] = useState("")
  const fadeRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    let timeout: ReturnType<typeof setTimeout>

    const typeMessage = (msg: string, idx: number, charPos: number) => {
      if (!mounted.current) return
      if (charPos <= msg.length) {
        setText(msg.slice(0, charPos))
        timeout = setTimeout(() => typeMessage(msg, idx, charPos + 1), 20)
      } else {
        timeout = setTimeout(() => {
          if (!mounted.current) return
          if (idx < bootMessages.length - 1) {
            setLine(idx + 1)
            setText("")
            typeMessage(bootMessages[idx + 1], idx + 1, 0)
          } else {
            if (fadeRef.current) {
              fadeRef.current.style.opacity = "0"
            }
            timeout = setTimeout(() => {
              if (mounted.current) onFinish()
            }, 1000)
          }
        }, 400)
      }
    }

    typeMessage(bootMessages[0], 0, 0)

    return () => {
      mounted.current = false
      clearTimeout(timeout)
    }
  }, [onFinish])

  const progress = Math.min((line + text.length / bootMessages[Math.min(line, bootMessages.length - 1)].length) / bootMessages.length, 1)

  return (
    <div
      ref={fadeRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{ transition: "opacity 1s ease" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/40 font-mono">
            System Boot
          </span>
        </div>

        <div className="font-mono text-sm leading-relaxed mb-8">
          <span className="text-emerald-400/60">$</span>{" "}
          <span className="text-muted-foreground">{text}</span>
          <span className="inline-block w-2 h-4 bg-emerald-400/60 ml-0.5 animate-pulse align-middle" />
        </div>

        <div className="relative h-[1px] bg-white/5 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500/60 via-blue-500/60 to-transparent"
            style={{
              width: `${progress * 100}%`,
              boxShadow: "0 0 12px rgba(52, 211, 153, 0.2)",
              transition: "width 0.4s ease",
            }}
          />
        </div>

        <p className="text-[10px] text-muted-foreground/30 font-mono mt-3 text-right tracking-wider">
          {Math.round(progress * 100)}%
        </p>
      </div>
    </div>
  )
}
