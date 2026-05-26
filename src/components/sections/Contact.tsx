"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/MagneticButton"
import { personalInfo } from "@/lib/data"
import { ScrollReveal } from "@/components/ScrollReveal"

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal delay={0.1}>
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Get in Touch
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="section-heading mb-6">
            Let&apos;s build something
            <br />
            <span className="text-gradient-primary">scalable together</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Looking for a backend engineer who thinks in systems? Let&apos;s talk about your next project, infrastructure needs, or ERP challenges.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <MagneticButton>
              <Button variant="premium" size="xl" className="group" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail size={16} />
                  Send an Email
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="glass" size="xl" asChild>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
              </Button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <motion.span
              whileHover={{ color: "#fff" }}
              className="flex items-center gap-1.5 transition-colors"
            >
              <MapPin size={14} />
              {personalInfo.location}
            </motion.span>
            <motion.a
              whileHover={{ color: "#fff" }}
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 transition-colors"
            >
              <Mail size={14} />
              {personalInfo.email}
            </motion.a>
            <motion.a
              whileHover={{ color: "#fff" }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors"
            >
              <Github size={14} />
              GitHub
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
