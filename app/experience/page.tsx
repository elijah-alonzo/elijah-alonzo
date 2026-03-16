"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { CONTAINER_VARIANTS, ITEM_VARIANTS_X } from "@/lib/animations"
import { IN_VIEW } from "@/lib/config"
import { sectionCardInteractiveClass, sectionCardAccentClass } from "@/styles/card-styles"
import { sectionTagMutedClass } from "@/styles/tag-styles"
import { experienceStyles } from "@/app/experience/style"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import experienceData from "@/app/experience/data.json"

interface ExperienceData {
  id: number
  company: string
  role: string
  period: string
  location: string
  description: string
  skills: string[]
  link: string
}

type JsonExperience = Partial<ExperienceData>

function normalizeExperiences(data: unknown): ExperienceData[] {
  if (!Array.isArray(data)) {
    return []
  }

  return data.map((item, index) => {
    const exp = (item ?? {}) as JsonExperience

    return {
      id: typeof exp.id === "number" ? exp.id : index + 1,
      company: typeof exp.company === "string" ? exp.company : "Unknown Company",
      role: typeof exp.role === "string" ? exp.role : "Unknown Role",
      period: typeof exp.period === "string" ? exp.period : "",
      location: typeof exp.location === "string" ? exp.location : "",
      description: typeof exp.description === "string" ? exp.description : "",
      skills: Array.isArray(exp.skills) ? exp.skills.filter((skill): skill is string => typeof skill === "string") : [],
      link: typeof exp.link === "string" ? exp.link : "#",
    }
  })
}

export default function ExperiencePage() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: IN_VIEW.ONCE, margin: IN_VIEW.MARGIN })
  const experiences = normalizeExperiences(experienceData)

  return (
    <section ref={ref} id="experience" className={experienceStyles.section}>
      <div className={experienceStyles.container}>
        <SectionHeader
          title="Professional Experience"
          description="A journey through roles that have shaped my expertise in design, development, and digital innovation."
          isInView={isInView}
        />

        {experiences.length === 0 && (
          <div className={experienceStyles.emptyState}>
            <p className={experienceStyles.emptyText}>No experiences available yet.</p>
          </div>
        )}

        {experiences.length > 0 && (
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={experienceStyles.list}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={ITEM_VARIANTS_X}
                className={experienceStyles.item}
              >
                <Card className={sectionCardInteractiveClass}>
                  {/* Green accent element on hover */}
                  <div className={sectionCardAccentClass} />
                  <CardContent className={experienceStyles.content}>
                    <div className={experienceStyles.header}>
                      <div className={experienceStyles.headerLeft}>
                        <div className={experienceStyles.roleRow}>
                          <div className={experienceStyles.iconWrap}>
                            <Briefcase className={experienceStyles.icon} />
                          </div>
                          <div>
                            <h3 className={experienceStyles.role}>{exp.role}</h3>
                            <p className={experienceStyles.company}>{exp.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className={experienceStyles.description}>
                      {exp.description}
                    </p>

                    <div className={experienceStyles.skills}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={sectionTagMutedClass}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className={experienceStyles.meta}>
                      <div className={experienceStyles.metaItem}>
                        <Calendar className={experienceStyles.metaIcon} />
                        <span>{exp.period}</span>
                      </div>
                      <span className={experienceStyles.divider}>•</span>
                      <div className={experienceStyles.metaItem}>
                        <MapPin className={experienceStyles.metaIcon} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
