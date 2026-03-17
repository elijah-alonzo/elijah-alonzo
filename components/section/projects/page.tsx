"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import {
  sectionCardBaseClass,
  projectsStyles,
  getProjectsTrackClass,
  getProjectsCardItemClass,
  getProjectsImageWrapClass,
} from "@/styles/system"
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import projectData from "@/components/section/projects/data.json"

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
    <section id="projects" ref={ref} className={projectsStyles.section}>
      <div className={projectsStyles.container}>
        <SectionHeader
          title="Projects"
          description="A portfolio of functional systems I have designed, developed, and successfully deployed throughout my career."
          isInView={isInView}
        />

        {projects.length === 0 && (
          <div className={projectsStyles.emptyState}>
            <p className={projectsStyles.emptyText}>No projects available yet.</p>
          </div>
        )}

        {projects.length > 0 && (
          <div className={projectsStyles.marqueeWrap} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <motion.div
              variants={CONTAINER_VARIANTS}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={getProjectsTrackClass()}
              style={{ animationPlayState: isHovered ? "paused" : "running" }}
            >
              {[...projects, ...projects].map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  variants={ITEM_VARIANTS}
                  className={getProjectsCardItemClass()}
                >
                  <Card className={cn(sectionCardBaseClass, projectsStyles.card)}>
                    {/* Project Image */}
                    <div className={getProjectsImageWrapClass()}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={projectsStyles.image}
                      />
                    </div>

                    {/* Content */}
                    <CardContent className={projectsStyles.content}>
                      {project.subtitle && (
                        <p className={projectsStyles.subtitle}>
                          {project.subtitle}
                        </p>
                      )}
                      <h3 className={projectsStyles.title}>
                        {project.title}
                      </h3>
                      <p className={projectsStyles.description}>
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
