import { cn } from "@/lib/utils"

export const projectsStyles = {
  section: "py-24 px-4 bg-background dark:bg-zinc-950",
  container: "max-w-6xl mx-auto",
  emptyState: "p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center",
  emptyText: "text-muted-foreground dark:text-zinc-400",
  marqueeWrap: "relative overflow-hidden",
  marqueeTrack: "flex gap-6 animate-marquee",
  cardItem: "w-[280px] sm:w-[340px] md:w-[380px] flex-shrink-0",
  card: "h-full hover:scale-[1.02] flex flex-col",
  imageWrap: "h-40 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center overflow-hidden border-b border-border dark:border-zinc-800",
  image: "w-full h-full object-cover",
  content: "flex-1 flex flex-col p-6",
  subtitle: "text-xs font-medium text-emerald-500 mb-1 uppercase tracking-wide",
  title: "text-lg font-semibold text-foreground dark:text-white mb-2",
  description: "text-muted-foreground dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1",
} as const

export function getProjectsTrackClass(): string {
  return cn(projectsStyles.marqueeTrack)
}

export function getProjectsCardItemClass(): string {
  return cn(projectsStyles.cardItem)
}

export function getProjectsImageWrapClass(): string {
  return cn(projectsStyles.imageWrap)
}
