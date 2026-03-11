"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-4 bg-background dark:bg-zinc-950">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-instrument-sans)" }}
        >
          Let's Work Together
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
          I'm always excited to discuss new projects, creative ideas, or ways I can help bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="shimmer-btn bg-foreground dark:bg-white text-background dark:text-zinc-950 hover:bg-muted dark:hover:bg-zinc-200 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-emerald-500/20"
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-14 text-base font-medium border-border dark:border-zinc-800 text-foreground dark:text-zinc-300 hover:bg-muted dark:hover:bg-zinc-900 dark:hover:text-white dark:hover:border-zinc-700 bg-transparent"
          >
            Send an Email
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground dark:text-zinc-500">Typically respond within 24 hours.</p>
      </motion.div>
    </section>
  )
}
