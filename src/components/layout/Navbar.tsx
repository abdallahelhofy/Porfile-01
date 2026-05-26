"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, type Easing } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const ease: Easing = [0.25, 0.46, 0.45, 0.94]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease },
  },
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
          <motion.a
            variants={itemVariants}
            href="#"
            className="text-sm font-medium tracking-tight text-white/90 hover:text-white transition-colors"
          >
            ABDALLAH ELHOFY
          </motion.a>

          <motion.div variants={containerVariants} className="hidden md:flex items-center gap-8">
            {navItems.map((navItem) => (
              <motion.a
                key={navItem.href}
                variants={itemVariants}
                href={navItem.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors duration-300"
              >
                {navItem.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-muted-foreground hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-16 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 pt-12">
              {navItems.map((navItem) => (
                <a
                  key={navItem.href}
                  href={navItem.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-muted-foreground hover:text-white transition-colors"
                >
                  {navItem.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
