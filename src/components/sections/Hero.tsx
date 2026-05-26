"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/MagneticButton"
import { personalInfo } from "@/lib/data"

export function Hero() {
  const { scrollYProgress } = useScroll()

  const nameOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const nameBlur = useTransform(scrollYProgress, [0, 0.35], ["0px", "8px"])
  const nameY = useTransform(scrollYProgress, [0, 0.35], [0, -80])

  const subtitleOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])
  const subtitleBlur = useTransform(scrollYProgress, [0.15, 0.45], ["6px", "0px"])
  const subtitleY = useTransform(scrollYProgress, [0.15, 0.45], [20, 0])

  const actionsOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1])
  const actionsY = useTransform(scrollYProgress, [0.3, 0.55], [30, 0])

  const socialOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0])
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: glowOpacity }}
      >
        <div
          className="w-[900px] h-[900px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, rgba(167, 139, 250, 0.1) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.01 }}
      >
        <motion.h1
          className="text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-[-0.04em] leading-[0.85] mb-4"
          style={{ opacity: nameOpacity, filter: `blur(${nameBlur})`, y: nameY }}
        >
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center gap-2"
          style={{ opacity: subtitleOpacity, filter: `blur(${subtitleBlur})`, y: subtitleY }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            {personalInfo.title}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/60 max-w-xl leading-relaxed">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          style={{ opacity: actionsOpacity, y: actionsY }}
        >
          <MagneticButton>
            <Button variant="premium" size="xl" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 mt-10"
          style={{ opacity: socialOpacity }}
        >
          <MagneticButton>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors block p-2"
            >
              <Github size={18} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors block p-2"
            >
              <Linkedin size={18} />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: arrowOpacity }}
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground hover:text-white transition-colors block"
        >
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
