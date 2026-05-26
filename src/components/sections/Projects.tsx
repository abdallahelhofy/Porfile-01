"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowUpRight,
  Database,
  Shield,
  Cpu,
  GitBranch,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { StaggerReveal, StaggerItem } from "@/components/ScrollReveal"

const detailSections = [
  { key: "apiEndpoints" as const, label: "api endpoints", icon: GitBranch },
  { key: "database" as const, label: "database", icon: Database },
  { key: "auth" as const, label: "authentication", icon: Shield },
  { key: "scalability" as const, label: "scalability", icon: Cpu },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm text-muted-foreground tracking-widest uppercase mb-4"
          >
            Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-heading mb-4"
          >
            Enterprise <span className="text-gradient-primary">projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="section-subtitle mx-auto"
          >
            Production-grade systems designed for scale, reliability, and performance
          </motion.p>
        </div>

        <StaggerReveal staggerDelay={0.12} className="space-y-12">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <div className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative glass-card rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.02] transition-opacity duration-700 group-hover:opacity-[0.06]"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient})`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-semibold text-white">
                            {project.title}
                          </h3>
                          <Badge variant="premium" className="text-[10px] hidden sm:inline-flex">
                            {project.tagline}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground/60 font-mono mb-2">architecture</p>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="grid gap-3 mb-6">
                      {detailSections.map((section) => {
                        const Icon = section.icon
                        const content = project[section.key]
                        return (
                          <div key={section.key}>
                            <div className="flex items-center gap-2 mb-1.5">
                              <Icon size={11} className="text-blue-400/70" />
                              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 font-mono">
                                {section.label}
                              </span>
                            </div>
                            {Array.isArray(content) ? (
                              <div className="grid sm:grid-cols-2 gap-1">
                                {content.map((item) => (
                                  <div key={item} className="flex items-start gap-1.5">
                                    <ChevronRight size={10} className="text-blue-400/50 mt-0.5 shrink-0" />
                                    <span className="text-xs text-muted-foreground font-mono">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-xs text-muted-foreground leading-relaxed">{content}</p>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="glass">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white gap-1.5" asChild>
                          <a href="#">
                            <GitBranch size={12} />
                            Source
                            <ExternalLink size={10} />
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white gap-1.5" asChild>
                          <a href="#">
                            <ArrowUpRight size={12} />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
