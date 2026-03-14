"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import "./projects.css"

const projects = [
  {
    id: 1,
    title: "e-Portfolio and Ranking System",
    subtitle: "Paulinian Student Government",
    description: "A platform for the Paulinian Student Government to manage, showcase, and rank student portfolios efficiently.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%2310b981' width='100' height='100'/%3E%3Ctext x='50' y='60' font-size='40' fill='white' text-anchor='middle' font-weight='bold'%3EE-P%3C/text%3E%3C/svg%3E",
  },
  {
    id: 2,
    title: "e-Portfolio with Integrated AI",
    description: "Personal portfolio website enhanced with AI features and RAG technology to improve user experience and interactivity.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234f46e5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='100' height='100'/%3E%3Ctext x='50' y='60' font-size='50' fill='white' text-anchor='middle' font-weight='bold'%3EEA%3C/text%3E%3C/svg%3E",
  },
  {
    id: 3,
    title: "University Documents Submission Monitoring System",
    subtitle: "SPUP",
    description: "A web app for monitoring the submission of documents and other sheets for university requirements.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%2310b981' width='100' height='100'/%3E%3Ctext x='50' y='60' font-size='30' fill='white' text-anchor='middle' font-weight='bold'%3ESPUP%3C/text%3E%3C/svg%3E",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Projects() {
  const ref = useRef(null)
  const carouselRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)
  
  // Auto-scroll carousel every 4 seconds per item
  useEffect(() => {
    if (!isInView || !carouselRef.current) return
    
    let scrollPosition = 0
    const itemWidth = 440 // approximate width with gap
    const totalScroll = itemWidth * projects.length
    const scrollDuration = 1500 // Smooth scroll over 1.5 seconds
    
    const interval = setInterval(() => {
      if (!isHovered && carouselRef.current) {
        const targetScroll = (scrollPosition + itemWidth) % totalScroll
        const startScroll = carouselRef.current.scrollLeft
        const startTime = performance.now()
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / scrollDuration, 1)
          
          if (carouselRef.current) {
            carouselRef.current.scrollLeft = startScroll + (targetScroll - startScroll) * progress
          }
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            scrollPosition = targetScroll
          }
        }
        
        requestAnimationFrame(animate)
      }
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isHovered, isInView])

  return (
    <section id="projects" ref={ref} className="py-24 px-4 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            Projects
          </h2>
          <p className="text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto">
            A portfolio of functional systems I have designed, developed, and successfully deployed throughout my career.
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <motion.div
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="carousel-scroll flex gap-6 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="w-[280px] sm:w-[340px] md:w-[380px] flex-shrink-0"
            >
              <div className="relative h-full rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">
                {/* Green accent element on hover */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-l-2xl" />

                {/* Project Image */}
                <div className="h-40 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center overflow-hidden border-b border-border dark:border-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  {project.subtitle && (
                    <p className="text-xs font-medium text-emerald-500 mb-1 uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
