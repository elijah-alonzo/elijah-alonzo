"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { PROJECTS } from "@/lib/constants"
import { CONTAINER_VARIANTS, ITEM_VARIANTS, HEADER_ANIMATION } from "@/lib/animations"
import { CAROUSEL, IN_VIEW, ANIMATION, DIMENSIONS, IMAGE_DIMENSIONS, SPACING } from "@/lib/config"

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
    <section id="projects" ref={ref} className={`${SPACING.PADDING_SECTION} ${SPACING.PADDING_X} bg-background dark:bg-zinc-950`}>
      <div className={`${SPACING.MAX_WIDTH} mx-auto`}>
        {/* Header */}
        <motion.div
          {...HEADER_ANIMATION}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`flex ${SPACING.GAP} overflow-x-auto scrollbar-hide`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={ITEM_VARIANTS}
              className={`${DIMENSIONS.CAROUSEL_SM} sm:${DIMENSIONS.CAROUSEL_MD} md:${DIMENSIONS.CAROUSEL_LG} flex-shrink-0`}
            >
              <div className="relative h-full rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">
                {/* Green accent element on hover */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-l-2xl" />

                {/* Project Image */}
                <div className={`${IMAGE_DIMENSIONS.HEIGHT} bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center overflow-hidden border-b border-border dark:border-zinc-800`}>
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
