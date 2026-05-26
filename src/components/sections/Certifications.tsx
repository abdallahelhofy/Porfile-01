"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { certifications } from "@/lib/data"
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal"

export function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Credentials
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="section-heading mb-4">
              Certifications & <span className="text-gradient-primary">training</span>
            </h2>
          </ScrollReveal>
        </div>

        <StaggerReveal staggerDelay={0.07}>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <motion.div
                  whileHover={{ scale: [null, 1.02, 1.01] }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-xl p-5 md:p-6 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <Award size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-white/90">{cert.title}</h3>
                      <span className="text-[10px] text-muted-foreground/60 font-mono">{cert.year}</span>
                    </div>
                    <p className="text-xs text-blue-400/80 mb-1.5">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}
