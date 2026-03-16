"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  { name: "Vercel", width: 100 },
  { name: "Stripe", width: 80 },
  { name: "Linear", width: 90 },
  { name: "Notion", width: 100 },
  { name: "Figma", width: 70 },
  { name: "Slack", width: 90 },
  { name: "Discord", width: 100 },
  { name: "GitHub", width: 90 },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden bg-background dark:bg-zinc-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-muted-foreground dark:text-zinc-500 uppercase tracking-wider font-medium">Worked with amazing companies</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] h-16 mx-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-muted-foreground dark:text-zinc-400">
                <div className="w-8 h-8 rounded-lg bg-card dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-xs font-bold">{client.name[0]}</span>
                </div>
                <span className="display-font font-medium">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
