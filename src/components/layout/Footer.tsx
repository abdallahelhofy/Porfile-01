"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { MagneticButton } from "@/components/MagneticButton"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abdallah ElHoFy. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <MagneticButton>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors block p-1"
            >
              <Github size={18} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors block p-1"
            >
              <Linkedin size={18} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:ahmed@example.com"
              className="text-muted-foreground hover:text-white transition-colors block p-1"
            >
              <Mail size={18} />
            </a>
          </MagneticButton>
        </div>
      </div>
    </footer>
  )
}
