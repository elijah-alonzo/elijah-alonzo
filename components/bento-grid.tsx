"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Zap, Database, Cloud, Palette, Brain } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function SystemStatus() {
  const [dots, setDots] = useState([true, true, true, true])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-emerald-500" : "bg-zinc-700"}`}
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

function KeyboardCommand() {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPressed(true)
      setTimeout(() => setPressed(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1">
      <motion.kbd
        animate={pressed ? { scale: 0.95, y: 2 } : { scale: 1, y: 0 }}
        className="px-2 py-1 text-xs bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-mono"
      >
        ⌘
      </motion.kbd>
      <motion.kbd
        animate={pressed ? { scale: 0.95, y: 2 } : { scale: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="px-2 py-1 text-xs bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-mono"
      >
        K
      </motion.kbd>
    </div>
  )
}

function AnimatedChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const points = [
    { x: 0, y: 60 },
    { x: 20, y: 45 },
    { x: 40, y: 55 },
    { x: 60, y: 30 },
    { x: 80, y: 40 },
    { x: 100, y: 15 },
  ]

  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`
  }, "")

  return (
    <svg ref={ref} viewBox="0 0 100 70" className="w-full h-24">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {isInView && (
        <>
          <path d={`${pathD} L 100 70 L 0 70 Z`} fill="url(#chartGradient)" className="opacity-50" />
          <path d={pathD} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="draw-line" />
        </>
      )}
    </svg>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-4 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground dark:text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Skills and Technologies
          </h2>
          <p className="text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto">
            Showcasing selected projects that demonstrate my expertise in design, development, and digital innovation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - Full Stack Development */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Green accent element on hover */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4">
                  <Code2 className="w-5 h-5 text-muted-foreground dark:text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Full Stack Development</h3>
                <p className="text-muted-foreground dark:text-zinc-400 text-sm">
                  End-to-end development building scalable web applications with modern tech stacks, from backend architecture to responsive frontends.
                </p>
              </div>
              <SystemStatus />
            </div>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "PHP", "Python", "Laravel", "Next.js", "React", "Node.js", "Git", "GitHub"].map((tool) => (
                <span key={tool} className="px-3 py-1.5 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI & Generative Systems */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Green accent element on hover */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4">
                  <Brain className="w-5 h-5 text-muted-foreground dark:text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">AI & Generative Systems</h3>
                <p className="text-muted-foreground dark:text-zinc-400 text-sm mb-4">Integrating AI to enhance system intelligence, automate content generation, and provide dynamic user interactions.</p>
              </div>
              <SystemStatus />
            </div>
            <div className="flex flex-wrap gap-2">
              {["RAG", "Generative AI", "User Input Generation", "Report Automation", "OpenAI API", "LangChain", "TensorFlow", "Python"].map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Database Management */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Green accent element on hover */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4">
                  <Database className="w-5 h-5 text-muted-foreground dark:text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">Database Management</h3>
                <p className="text-muted-foreground dark:text-zinc-400 text-sm mb-4">Designing, optimizing, and securing databases to support high-performance applications.</p>
              </div>
              <SystemStatus />
            </div>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "PostgreSQL", "SQLite", "MariaDB", "MongoDB", "Data Modeling", "Query Optimization", "Backup & Recovery"].map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cloud & Infrastructure Operations */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Green accent element on hover */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4">
                  <Cloud className="w-5 h-5 text-muted-foreground dark:text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">Cloud & Infrastructure</h3>
                <p className="text-muted-foreground dark:text-zinc-400 text-sm mb-4">Deploying and maintaining scalable, highly available systems on cloud platforms.</p>
              </div>
              <SystemStatus />
            </div>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Azure", "GCP", "Linux", "Docker", "Jenkins", "Bash", "Vercel", "NGINX"].map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Design & UI/UX */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            {/* Green accent element on hover */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4">
                  <Palette className="w-5 h-5 text-muted-foreground dark:text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">Design & UI/UX</h3>
                <p className="text-muted-foreground dark:text-zinc-400 text-sm mb-4">Creating responsive, user-friendly interfaces and cohesive design systems.</p>
              </div>
              <SystemStatus />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Figma", "CSS", "Tailwind", "Bootstrap", "FlutterFlow"].map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
