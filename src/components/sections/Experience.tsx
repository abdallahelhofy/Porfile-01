"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experiences } from "@/lib/data"
import { ScrollReveal } from "@/components/ScrollReveal"

function TimelineItem({
  experience,
  index,
  isInView,
}: {
  experience: (typeof experiences)[number]
  index: number
  isInView: boolean
}) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40, filter: "blur(6px)" }}
      animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
          className="glass-card rounded-xl p-6 md:p-8 hover:scale-[1.01] transition-transform duration-500"
        >
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs text-blue-400/80 font-mono">{experience.period}</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {experience.role}
          </h3>
          <p className="text-sm text-blue-400/80 mb-4">{experience.company}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((h, i2) => (
              <motion.span
                key={h}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.15 + i2 * 0.05 }}
                className="px-2.5 py-1 text-xs rounded-full glass text-muted-foreground border-white/5"
              >
                {h}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(96,165,250,0.5)] relative z-10"
        />
        <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-transparent absolute top-3" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Career Path
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="section-heading mb-4">
              Professional <span className="text-gradient-primary">journey</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              From system administration to backend engineering &mdash; a path built on reliability and scale
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
