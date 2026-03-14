"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react"
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
    <section className="relative py-24 px-4 bg-background dark:bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b 
from-zinc-900 via-zinc-950/90 to-zinc-950 
pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Intro and Name */}
            <div className="mb-6">
              <p className="text-muted-foreground dark:text-zinc-400 text-lg mb-2">I'm</p>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground dark:text-white"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                Elijah Alonzo
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground dark:text-zinc-400 max-w-xl mb-8 leading-relaxed"
            >
              A full stack developer and devops skilled in building scalable web applications from frontend to backend. Experienced in database design, cloud deployment, and creating responsive, user-friendly interfaces. Adept at integrating tools to streamline workflows and enhance application functionality. Open to freelance projects, collaborations, and new career opportunities.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-3"
            >
              <Button
                size="icon"
                variant="outline"
                className="w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
                asChild
              >
                <a href="mailto:elijahalonzo.me@gmail.com" title="Email">
                  <Mail className="w-5 h-5 text-foreground dark:text-zinc-300" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/elijah-alonzo" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin className="w-5 h-5 text-foreground dark:text-zinc-300" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/elijah-alonzo" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="w-5 h-5 text-foreground dark:text-zinc-300" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
                asChild
              >
                <a href="https://facebook.com/elijah.alonzo" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <Facebook className="w-5 h-5 text-foreground dark:text-zinc-300" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
                asChild
              >
                <a href="https://instagram.com/elijhalnz" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Instagram className="w-5 h-5 text-foreground dark:text-zinc-300" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Enhanced Visual Interest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Dark subtle background behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-black opacity-60" />

              {/* Circular glow effect */}
              <div className="absolute -inset-8 rounded-full bg-zinc-800/20 dark:bg-zinc-800/30 blur-2xl" />

              {/* Profile image container - Perfect circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border dark:border-zinc-800 shadow-2xl shadow-black/30">
                <img
                  src={avatars[0] || "/placeholder.svg"}
                  alt="Elijah Alonzo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge below image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-muted-foreground dark:text-zinc-400">Available for Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
