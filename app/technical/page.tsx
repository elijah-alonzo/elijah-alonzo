"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Database, Cloud, Palette, Brain, type LucideIcon } from "lucide-react"
import { CONTAINER_VARIANTS, ITEM_VARIANTS, SYSTEM_STATUS_ACTIVE_ANIMATE, systemStatusTransition } from "@/lib/animations"
import { IN_VIEW, SPACING } from "@/lib/config"
import { sectionCardInteractiveClass, sectionCardAccentClass } from "@/styles/card-styles"
import { sectionTagLargeClass, sectionTagCompactClass } from "@/styles/tag-styles"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import technicalSkillsData from "@/app/technical/data.json"

interface TechnicalSkillCard {
  id: number
  title: string
  description: string
  icon: "Code2" | "Brain" | "Database" | "Cloud" | "Palette"
  tools: string[]
  layout: "wide" | "standard"
  tagSize: "large" | "compact"
}

type JsonSkill = Partial<TechnicalSkillCard>

const TECH_ICON_MAP: Record<TechnicalSkillCard["icon"], LucideIcon> = {
  Code2,
  Brain,
  Database,
  Cloud,
  Palette,
}

const DEFAULT_ICON: TechnicalSkillCard["icon"] = "Code2"

function normalizeSkills(data: unknown): TechnicalSkillCard[] {
  if (!Array.isArray(data)) {
    return []
  }

  return data.map((item, index) => {
    const skill = (item ?? {}) as JsonSkill
    const icon = skill.icon && skill.icon in TECH_ICON_MAP ? skill.icon : DEFAULT_ICON

    return {
      id: typeof skill.id === "number" ? skill.id : index + 1,
      title: typeof skill.title === "string" ? skill.title : "Untitled Skill",
      description: typeof skill.description === "string" ? skill.description : "",
      icon,
      tools: Array.isArray(skill.tools) ? skill.tools.filter((tool): tool is string => typeof tool === "string") : [],
      layout: skill.layout === "wide" ? "wide" : "standard",
      tagSize: skill.tagSize === "large" ? "large" : "compact",
    }
  })
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
          animate={active ? SYSTEM_STATUS_ACTIVE_ANIMATE : {}}
          transition={systemStatusTransition(i * 0.2)}
        />
      ))}
    </div>
  )
}

export default function TechnicalPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: IN_VIEW.ONCE, margin: IN_VIEW.MARGIN })
  const skills = normalizeSkills(technicalSkillsData)

  return (
    <section id="skills" className={`${SPACING.PADDING_SECTION} ${SPACING.PADDING_X} bg-background dark:bg-zinc-950`}>
      <div className={`${SPACING.MAX_WIDTH} mx-auto`}>
        <SectionHeader
          title="Skills and Technologies"
          description="Showcasing selected projects that demonstrate my expertise in design, development, and digital innovation."
          isInView={isInView}
        />

        {skills.length === 0 && (
          <div className="p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center">
            <p className="text-muted-foreground dark:text-zinc-400">No technical skills available yet.</p>
          </div>
        )}

        {skills.length > 0 && (
          <motion.div
            ref={ref}
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skills.map((skill) => {
              const Icon = TECH_ICON_MAP[skill.icon] ?? Code2
              const tagClass = skill.tagSize === "large" ? sectionTagLargeClass : sectionTagCompactClass

              return (
                <motion.div
                  key={skill.id}
                  variants={ITEM_VARIANTS}
                  className={`group ${skill.layout === "wide" ? "md:col-span-2" : ""}`}
                >
                  <Card className={sectionCardInteractiveClass}>
                    <div className={sectionCardAccentClass} />
                    <CardContent className="p-6">
                      <div className={`flex items-start justify-between ${skill.layout === "wide" ? "mb-8" : "mb-4"}`}>
                        <div>
                          <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4">
                            <Icon className="w-5 h-5 text-muted-foreground dark:text-zinc-400" strokeWidth={1.5} />
                          </div>
                          <h3 className={`${skill.layout === "wide" ? "text-xl" : "text-lg"} font-semibold text-foreground dark:text-white mb-2`}>{skill.title}</h3>
                          <p className={`text-muted-foreground dark:text-zinc-400 text-sm ${skill.layout === "wide" ? "" : "mb-4"}`}>{skill.description}</p>
                        </div>
                        <SystemStatus />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool) => (
                          <span key={`${skill.id}-${tool}`} className={tagClass}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
