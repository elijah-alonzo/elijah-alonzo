import { cn } from "@/lib/utils"

export const technicalStyles = {
  section: "py-24 px-4 bg-background dark:bg-zinc-950",
  container: "max-w-6xl mx-auto",
  emptyState: "p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center",
  emptyText: "text-muted-foreground dark:text-zinc-400",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  group: "group",
  content: "p-6",
  header: "flex items-start justify-between",
  headerWideGap: "mb-8",
  headerStandardGap: "mb-4",
  iconWrap: "p-2 rounded-lg bg-card dark:bg-zinc-800 w-fit mb-4",
  icon: "w-5 h-5 text-muted-foreground dark:text-zinc-400",
  title: "font-semibold text-foreground dark:text-white mb-2",
  titleWide: "text-xl",
  titleStandard: "text-lg",
  description: "text-muted-foreground dark:text-zinc-400 text-sm",
  descriptionStandardSpacing: "mb-4",
  tags: "flex flex-wrap gap-2",
  systemStatus: "flex items-center gap-2",
  systemDot: "w-2 h-2 rounded-full",
  systemDotActive: "bg-emerald-500",
  systemDotIdle: "bg-zinc-700",
} as const

export function getTechnicalItemClass(layout: "wide" | "standard"): string {
  return cn(technicalStyles.group, layout === "wide" && "md:col-span-2")
}

export function getTechnicalHeaderClass(layout: "wide" | "standard"): string {
  return cn(technicalStyles.header, layout === "wide" ? technicalStyles.headerWideGap : technicalStyles.headerStandardGap)
}

export function getTechnicalTitleClass(layout: "wide" | "standard"): string {
  return cn(technicalStyles.title, layout === "wide" ? technicalStyles.titleWide : technicalStyles.titleStandard)
}

export function getTechnicalDescriptionClass(layout: "wide" | "standard"): string {
  return cn(technicalStyles.description, layout !== "wide" && technicalStyles.descriptionStandardSpacing)
}
