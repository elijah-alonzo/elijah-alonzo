"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FOOTER_LINKS } from "@/lib/navigation"
import { FOOTER_SOCIAL_LINKS } from "@/lib/constants"
import { ICON_MAP } from "@/lib/utils"
import { fadeInInViewProps, fadeUpInViewProps } from "@/lib/animations"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-border dark:border-zinc-800 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div {...fadeUpInViewProps(isInView)} className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
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
          {...fadeInInViewProps(isInView, 0.3)}
          className="mt-16 pt-8 border-t border-border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground dark:text-zinc-500">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {FOOTER_SOCIAL_LINKS.map((link) => {
              const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP]
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
