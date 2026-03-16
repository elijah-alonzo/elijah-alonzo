"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/lib/animations"
import { DIMENSIONS, IMAGE_DIMENSIONS, SPACING } from "@/lib/config"
import { sectionCardBaseClass } from "@/styles/card-styles"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import projectData from "@/app/projects/data.json"

interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  image: string
}

type JsonProject = Partial<Project>

function normalizeProjects(data: unknown): Project[] {
  if (!Array.isArray(data)) {
    return []
  }

  return data.map((item, index) => {
    const project = (item ?? {}) as JsonProject

    return {
      id: typeof project.id === "number" ? project.id : index + 1,
      title: typeof project.title === "string" ? project.title : "Untitled Project",
      subtitle: typeof project.subtitle === "string" ? project.subtitle : undefined,
      description: typeof project.description === "string" ? project.description : "",
      image: typeof project.image === "string" ? project.image : "",
    }
  })
}

export default function ProjectsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isHovered, setIsHovered] = useState(false)
  const projects = normalizeProjects(projectData)

  return (
    <section id="projects" ref={ref} className={`${SPACING.PADDING_SECTION} ${SPACING.PADDING_X} bg-background dark:bg-zinc-950`}>
      <div className={`${SPACING.MAX_WIDTH} mx-auto`}>
        <SectionHeader
          title="Projects"
          description="A portfolio of functional systems I have designed, developed, and successfully deployed throughout my career."
          isInView={isInView}
        />

        {projects.length === 0 && (
          <div className="p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center">
            <p className="text-muted-foreground dark:text-zinc-400">No projects available yet.</p>
          </div>
        )}

        {projects.length > 0 && (
          <div className="relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <motion.div
              variants={CONTAINER_VARIANTS}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`flex ${SPACING.GAP} animate-marquee`}
              style={{ animationPlayState: isHovered ? "paused" : "running" }}
            >
              {[...projects, ...projects].map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  variants={ITEM_VARIANTS}
                  className={`${DIMENSIONS.CAROUSEL_SM} sm:${DIMENSIONS.CAROUSEL_MD} md:${DIMENSIONS.CAROUSEL_LG} flex-shrink-0`}
                >
                  <Card className={cn(sectionCardBaseClass, "h-full hover:scale-[1.02] flex flex-col")}>
                    {/* Project Image */}
                    <div className={`${IMAGE_DIMENSIONS.HEIGHT} bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center overflow-hidden border-b border-border dark:border-zinc-800`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="flex-1 flex flex-col p-6">
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
