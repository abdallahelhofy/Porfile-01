"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Server, Database, LayoutDashboard, Terminal, Code2 } from "lucide-react"
import { skills, skillCategories } from "@/lib/data"
import { ScrollReveal } from "@/components/ScrollReveal"

const iconMap = { Server, Database, LayoutDashboard, Terminal, Code2 }

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("backend")

  const currentSkills = skills[activeTab as keyof typeof skills]
  const currentCategory = skillCategories.find((c) => c.id === activeTab)

  return (
    <section id="skills" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Technical Expertise
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="section-heading mb-4">
              Technology <span className="text-gradient-primary">stack</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="section-subtitle mx-auto">
              Tools and technologies I use to build production-grade systems
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon as keyof typeof iconMap]
              const isActive = activeTab === cat.id
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-muted-foreground hover:text-white/70 border border-transparent"
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </motion.button>
              )
            })}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="glass-card rounded-xl p-5 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${currentCategory?.color.split(" ")[0].replace("from-", "")}, ${currentCategory?.color.split(" ")[1].replace("to-", "")})`,
                    }}
                  />
                  <h3 className="text-sm font-semibold text-white/90">{skill.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-5">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
