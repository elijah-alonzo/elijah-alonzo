"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  Work: ["View Projects", "Case Studies", "Collaborations", "Archives"],
  Resources: ["Blog", "Articles", "Tools", "Resources"],
  About: ["Bio", "Experience", "Skills", "Contact"],
  Social: ["Twitter", "GitHub", "LinkedIn", "Instagram"],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-border dark:border-zinc-800 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-foreground dark:bg-white flex items-center justify-center">
                <span className="text-background dark:text-zinc-950 font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-foreground dark:text-white">Portfolio</span>
            </a>
            <p className="text-sm text-muted-foreground dark:text-zinc-500 mb-4">Creative developer crafting beautiful digital experiences.</p>
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
              <span className="text-xs text-muted-foreground dark:text-zinc-400">Available for Projects</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground dark:text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground dark:text-zinc-500">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
