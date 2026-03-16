"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { CONTAINER_VARIANTS, ITEM_VARIANTS_X } from "@/lib/animations"
import { IN_VIEW, SPACING } from "@/lib/config"
import { sectionCardInteractiveClass, sectionCardAccentClass } from "@/styles/card-styles"
import { sectionTagMutedClass } from "@/styles/tag-styles"
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
    <section ref={ref} id="experience" className={`${SPACING.PADDING_SECTION} ${SPACING.PADDING_X} bg-background dark:bg-zinc-950`}>
      <div className={`${SPACING.MAX_WIDTH} mx-auto`}>
        <SectionHeader
          title="Professional Experience"
          description="A journey through roles that have shaped my expertise in design, development, and digital innovation."
          isInView={isInView}
        />

        {experiences.length === 0 && (
          <div className="p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center">
            <p className="text-muted-foreground dark:text-zinc-400">No experiences available yet.</p>
          </div>
        )}

        {experiences.length > 0 && (
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={ITEM_VARIANTS_X}
                className="group"
              >
                <Card className={sectionCardInteractiveClass}>
                  {/* Green accent element on hover */}
                  <div className={sectionCardAccentClass} />
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 group-hover:bg-emerald-600/20">
                            <Briefcase className="w-4 h-4 text-muted-foreground dark:text-zinc-400 group-hover:text-emerald-500 transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground dark:text-white">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground dark:text-zinc-400 font-medium">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={sectionTagMutedClass}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-4 border-t border-border dark:border-zinc-800 text-xs text-muted-foreground dark:text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="hidden sm:block text-border dark:text-zinc-700">•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
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
