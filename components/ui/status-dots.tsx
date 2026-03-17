"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SYSTEM_STATUS_ACTIVE_ANIMATE, systemStatusTransition } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface StatusDotsProps {
  containerClassName: string
  dotClassName: string
  activeDotClassName: string
  idleDotClassName: string
  count?: number
  intervalMs?: number
  activeChance?: number
}

export function StatusDots({
  containerClassName,
  dotClassName,
  activeDotClassName,
  idleDotClassName,
  count = 4,
  intervalMs = 2000,
  activeChance = 0.8,
}: StatusDotsProps) {
  const [dots, setDots] = useState<boolean[]>(() => Array.from({ length: count }, () => true))

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(Array.from({ length: count }, () => Math.random() < activeChance))
    }, intervalMs)

    return () => clearInterval(interval)
  }, [count, intervalMs, activeChance])

  return (
    <div className={containerClassName}>
      {dots.map((active, index) => (
        <motion.div
          key={index}
          className={cn(dotClassName, active ? activeDotClassName : idleDotClassName)}
          animate={active ? SYSTEM_STATUS_ACTIVE_ANIMATE : {}}
          transition={systemStatusTransition(index * 0.2)}
        />
      ))}
    </div>
  )
}
