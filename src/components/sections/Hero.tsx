"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ChevronDown, ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/MagneticButton"
import { personalInfo } from "@/lib/data"

const LETTER_OFFSETS = [
  { x: -28, y: -18, rotate: -4 },
  { x: 22, y: 14, rotate: 3 },
  { x: -16, y: -22, rotate: -5 },
  { x: 34, y: -8, rotate: 5 },
  { x: -24, y: 18, rotate: -3 },
  { x: 12, y: -14, rotate: 2 },
  { x: -32, y: 9, rotate: -5 },
  { x: 20, y: -16, rotate: 4 },
  { x: -8, y: 26, rotate: -2 },
  { x: 14, y: -20, rotate: 3 },
  { x: -18, y: 11, rotate: -4 },
  { x: 28, y: -6, rotate: 5 },
  { x: -10, y: 24, rotate: -2 },
  { x: 18, y: -10, rotate: 4 },
  { x: -26, y: 16, rotate: -5 },
  { x: 30, y: -4, rotate: 3 },
  { x: -14, y: 20, rotate: -4 },
  { x: 6, y: -26, rotate: 2 },
  { x: -30, y: 7, rotate: -3 },
  { x: 24, y: -12, rotate: 5 },
  { x: -4, y: 22, rotate: -3 },
  { x: 16, y: -18, rotate: 2 },
]

function AnimatedLetter({
  char,
  index,
  progress,
}: {
  char: string
  index: number
  progress: MotionValue<number>
}) {
  const offset = LETTER_OFFSETS[index % LETTER_OFFSETS.length]

  const x = useTransform(progress, [0, 1], [0, offset.x])
  const y = useTransform(progress, [0, 1], [0, offset.y])
  const rotate = useTransform(progress, [0, 1], [0, offset.rotate])
  const opacity = useTransform(progress, [0, 1], [1, 0])
  const filter = useTransform(progress, [0, 1], ["blur(0px)", "blur(20px)"])

  return (
    <motion.span
      className="text-gradient"
      style={{ display: "inline-block", x, y, rotate, opacity, filter }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  )
}

function AnimatedText({
  text,
  progress,
}: {
  text: string
  progress: MotionValue<number>
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <AnimatedLetter key={`${i}`} char={char} index={i} progress={progress} />
      ))}
    </>
  )
}

export function Hero() {
  const { scrollYProgress } = useScroll()

  const nameProgress = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const subtitleProgress = useTransform(scrollYProgress, [0.08, 0.42], [0, 1])

  const taglineOpacity = useTransform(scrollYProgress, [0.15, 0.5], [1, 0])
  const taglineBlur = useTransform(scrollYProgress, [0.15, 0.5], ["blur(0px)", "blur(10px)"])
  const taglineY = useTransform(scrollYProgress, [0.15, 0.5], [0, -15])

  const actionsOpacity = useTransform(scrollYProgress, [0.25, 0.55], [1, 0])
  const actionsY = useTransform(scrollYProgress, [0.25, 0.55], [0, -20])

  const socialOpacity = useTransform(scrollYProgress, [0.35, 0.6], [1, 0])

  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.15, 0])
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section
      id="hero"
      className="relative h-screen sticky top-0 flex flex-col items-center justify-center px-6 overflow-hidden"
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

      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-[-0.04em] leading-[0.85] mb-4 uppercase">
          <span className="inline-flex flex-wrap justify-center">
            <AnimatedText text={personalInfo.name} progress={nameProgress} />
          </span>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl font-light tracking-wide flex flex-wrap justify-center">
          <AnimatedText text={personalInfo.title} progress={subtitleProgress} />
        </div>

        <motion.p
          className="text-sm sm:text-base text-muted-foreground/60 max-w-xl leading-relaxed mt-2"
          style={{ opacity: taglineOpacity, filter: taglineBlur, y: taglineY }}
        >
          {personalInfo.tagline}
        </motion.p>

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
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors block p-2"
            >
              <Github size={18} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors block p-2"
            >
              <Linkedin size={18} />
            </a>
          </MagneticButton>
        </motion.div>
      </div>

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
