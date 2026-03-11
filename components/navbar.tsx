"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav
        ref={navRef}
        className="relative flex items-center justify-between px-4 py-3 rounded-full bg-background/40 dark:bg-zinc-900/40 backdrop-blur-md border border-border"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-foreground dark:bg-white flex items-center justify-center">
            <span className="text-background dark:text-zinc-950 font-bold text-sm">P</span>
          </div>
          <span className="font-semibold text-foreground dark:text-white hidden sm:block">Portfolio</span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-muted dark:bg-zinc-800 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white hover:bg-muted dark:hover:bg-zinc-800">
            Resume
          </Button>
          <Button size="sm" className="shimmer-btn bg-foreground dark:bg-white text-background dark:text-zinc-950 hover:bg-muted dark:hover:bg-zinc-200 rounded-full px-4">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-background/95 dark:bg-zinc-900/95 backdrop-blur-md border border-border"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white hover:bg-muted dark:hover:bg-zinc-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-border dark:border-zinc-800 my-2" />
            <Button variant="ghost" className="justify-start text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white">
              Resume
            </Button>
            <Button className="shimmer-btn bg-foreground dark:bg-white text-background dark:text-zinc-950 hover:bg-muted dark:hover:bg-zinc-200 rounded-full">Let's Talk</Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
