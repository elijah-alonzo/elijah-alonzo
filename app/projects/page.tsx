"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/lib/animations"
import { CAROUSEL, IN_VIEW, ANIMATION, DIMENSIONS, IMAGE_DIMENSIONS, SPACING } from "@/lib/config"
import { SectionHeader } from "@/components/section-header"
import { useAutoScrollCarousel } from "@/hooks/useAutoScrollCarousel"

interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  image: string
}

export default function ProjectsPage() {
  const ref = useRef(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { isHovered, setIsHovered } = useAutoScrollCarousel({
    ref: carouselRef,
    enabled: isInView && projects.length > 0,
    itemCount: projects.length,
    autoScrollInterval: CAROUSEL.AUTO_SCROLL_INTERVAL,
    scrollDuration: CAROUSEL.SCROLL_DURATION,
  })

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError(null)
        const response = await fetch("/projects.json")

        if (!response.ok) {
          throw new Error(`Failed to load projects: ${response.statusText}`)
        }

        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error("Invalid projects data format")
        }

        setProjects(data)
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load projects"
        setError(message)
        console.error("Projects loading error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" ref={ref} className={`${SPACING.PADDING_SECTION} ${SPACING.PADDING_X} bg-background dark:bg-zinc-950`}>
      <div className={`${SPACING.MAX_WIDTH} mx-auto`}>
        <SectionHeader
          title="Projects"
          description="A portfolio of functional systems I have designed, developed, and successfully deployed throughout my career."
          isInView={isInView}
        />

        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 mb-6">
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              ✕ {error}
            </p>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <p className="text-muted-foreground dark:text-zinc-400">Loading projects...</p>
            </div>
          </div>
        )}

        {!loading && projects.length === 0 && !error && (
          <div className="p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center">
            <p className="text-muted-foreground dark:text-zinc-400">No projects available yet.</p>
          </div>
        )}

        {!loading && projects.length > 0 && (
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
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={ITEM_VARIANTS}
                className={`${DIMENSIONS.CAROUSEL_SM} sm:${DIMENSIONS.CAROUSEL_MD} md:${DIMENSIONS.CAROUSEL_LG} flex-shrink-0`}
              >
                <div className="relative h-full rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col">
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
        )}
      </div>
    </section>
  )
}
