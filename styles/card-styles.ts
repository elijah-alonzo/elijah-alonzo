import { cn } from "@/lib/utils"

export const sectionCardBaseClass =
  "relative gap-0 py-0 rounded-2xl bg-muted dark:bg-zinc-900 border-border dark:border-zinc-800 transition-all duration-300 overflow-hidden"

export const sectionCardInteractiveClass = cn(
  sectionCardBaseClass,
  "hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02]"
)

export const sectionCardAccentClass =
  "absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl"
