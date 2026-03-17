"use client"

import { motion } from "framer-motion"
import { HEADER_ANIMATION, HIDDEN_ANIMATE } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { sectionHeaderStyles } from "@/styles/system"

interface SectionHeaderProps {
  title: string
  description: string
  isInView: boolean
  align?: "center" | "left"
}

export function SectionHeader({
  title,
  description,
  isInView,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      {...HEADER_ANIMATION}
      animate={isInView ? HEADER_ANIMATION.animate : HIDDEN_ANIMATE}
      className={cn(
        sectionHeaderStyles.wrapper,
        align === "center" ? sectionHeaderStyles.centered : sectionHeaderStyles.left,
      )}
    >
      <h2
        className={cn(sectionHeaderStyles.title, sectionHeaderStyles.titleSpacing)}
      >
        {title}
      </h2>
      <p
        className={cn(
          sectionHeaderStyles.description,
          align === "center" && sectionHeaderStyles.centeredDescription,
        )}
      >
        {description}
      </p>
    </motion.div>
  )
}
