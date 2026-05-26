"use client"

import { Server, Cpu, Database, Workflow, Shield, Globe } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ScrollReveal"

const focusAreas = [
  { icon: Server, label: "Backend Systems", desc: "Scalable microservices & API architecture" },
  { icon: Database, label: "ERP Optimization", desc: "Odoo ERP customization & workflow automation" },
  { icon: Workflow, label: "Automation", desc: "CI/CD pipelines & infrastructure as code" },
  { icon: Shield, label: "Infrastructure", desc: "System administration & security hardening" },
  { icon: Globe, label: "APIs", desc: "RESTful & event-driven API design" },
  { icon: Cpu, label: "Scalable Architecture", desc: "Distributed systems & performance tuning" },
]

export function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
                About
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="section-heading mb-6">
                Engineering
                <br />
                <span className="text-gradient-primary">reliable systems</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-base leading-relaxed">
                {personalInfo.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["System Design", "API Architecture", "ERP Integration", "DevOps"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full glass text-muted-foreground border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <StaggerReveal staggerDelay={0.06}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <StaggerItem key={area.label}>
                    <div className="glass-card rounded-xl p-5 group hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                          <Icon size={16} className="text-blue-400" />
                        </div>
                        <span className="text-sm font-medium text-white/90">{area.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                    </div>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
