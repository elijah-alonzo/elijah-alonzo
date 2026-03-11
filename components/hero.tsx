"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const avatars = [
  "/professional-headshot-1.png",
  "/professional-headshot-2.png",
  "/professional-headshot-3.png",
  "/professional-headshot-4.png",
  "/professional-headshot-5.png",
]

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-background dark:bg-zinc-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/5 dark:bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* Tech accent lines - minimal grid pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-emerald-500 rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-16 w-48 h-48 border border-emerald-500/30 rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-left flex flex-col justify-center"
          >
            {/* Intro and Name */}
            <div className="mb-8">
              <span className="text-2xl sm:text-3xl font-light text-muted-foreground dark:text-zinc-400" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                I'm{" "}
              </span>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400 inline"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                Elijah Alonzo
              </h1>
            </div>

            {/* Description with highlighted keywords */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground dark:text-zinc-400 max-w-xl mb-10 leading-relaxed"
            >
              A passionate <span className="text-emerald-500 dark:text-emerald-400 font-semibold">web developer</span> and <span className="text-emerald-500 dark:text-emerald-400 font-semibold">graphics designer</span>, ready to bring your ideas to life. Need someone to develop a <span className="text-emerald-500 dark:text-emerald-400 font-semibold">website</span> or create <span className="text-emerald-500 dark:text-emerald-400 font-semibold">graphics design</span>? I'm open for commissions!
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="shimmer-btn bg-foreground dark:bg-white text-background dark:text-zinc-950 hover:bg-muted dark:hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-emerald-500/20"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium border-border dark:border-zinc-800 text-foreground dark:text-zinc-300 hover:bg-muted dark:hover:bg-zinc-900 dark:hover:text-white dark:hover:border-zinc-700 bg-transparent"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center lg:justify-end"
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-96 lg:w-96 lg:h-96">
              {/* Decorative background circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-emerald-500/5 dark:bg-emerald-500/5 blur-2xl" />

              {/* Profile image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border dark:border-emerald-500/20 shadow-2xl shadow-emerald-500/15">
                <img
                  src={avatars[0] || "/placeholder.svg"}
                  alt="Elijah Alonzo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge below image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted dark:bg-emerald-950/40 border border-emerald-500/30 dark:border-emerald-500/40 backdrop-blur-lg shadow-lg shadow-emerald-500/20"
                >
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Web Developer & Graphics Designer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
