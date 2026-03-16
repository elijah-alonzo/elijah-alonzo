"use client"

import { motion } from "framer-motion"
import { HEADER_ANIMATION } from "@/lib/animations"
import { SPACING } from "@/lib/config"

interface SectionHeaderProps {
  title: string
  description: string
  isInView: boolean
}

export function SectionHeader({ title, description, isInView }: SectionHeaderProps) {
  return (
    <motion.div
      {...HEADER_ANIMATION}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-center mb-16"
    >
      <h2
        className="display-font text-3xl sm:text-4xl font-bold text-foreground dark:text-white mb-4"
      >
        {title}
      </h2>
      <p className={`text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto`}>
        {description}
      </p>
    </motion.div>
  )
}
