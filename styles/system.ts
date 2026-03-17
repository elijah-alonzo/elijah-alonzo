import { cn } from "@/lib/utils"

export const sectionHeaderStyles = {
  wrapper: "mb-4",
  title: "display-font text-3xl sm:text-4xl font-bold tracking-tight text-foreground dark:text-white",
  titleSpacing: "mb-4",
  description: "text-muted-foreground dark:text-zinc-400 max-w-2xl leading-relaxed",
  centered: "text-center",
  left: "text-left",
  centeredDescription: "mx-auto",
} as const

export const sectionCardBaseClass =
  "relative gap-0 py-0 rounded-2xl bg-muted dark:bg-zinc-900 border-border dark:border-zinc-800 transition-all duration-300 overflow-hidden"

export const sectionCardInteractiveClass = cn(
  sectionCardBaseClass,
  "hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02]"
)

export const sectionCardAccentClass =
  "absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl"

export const sectionTagCompactClass =
  "px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700"

export const sectionTagLargeClass =
  "px-3 py-1.5 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium border border-border dark:border-zinc-700"

export const sectionTagMutedClass =
  "px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-400 font-medium"

export const primaryShimmerButtonClass =
  "w-full shimmer-btn bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-700/50 text-white rounded-lg h-12 font-medium transition-colors"

const contactFieldBaseClass =
  "w-full px-4 py-2.5 rounded-lg bg-background dark:bg-zinc-950 border text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-zinc-600 focus:outline-none transition-colors disabled:opacity-50"

const contactFieldNormalClass =
  "border-border dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"

const contactFieldErrorClass =
  "border-red-500 dark:border-red-500 focus:border-red-500"

export function getContactFieldClass(hasError: boolean): string {
  return cn(contactFieldBaseClass, hasError ? contactFieldErrorClass : contactFieldNormalClass)
}

export const contactTextareaClass = "resize-none"

export const homeStyles = {
  section: "relative py-24 px-4 bg-background dark:bg-zinc-950 overflow-hidden",
  backdrop: "absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950/90 to-zinc-950 pointer-events-none",
  container: "relative z-10 max-w-6xl mx-auto",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
  content: "text-left",
  introBlock: "mb-6",
  headingPrefix: "text-muted-foreground dark:text-zinc-400 text-lg mb-2",
  name: "display-font text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground dark:text-white",
  description: "text-muted-foreground dark:text-zinc-400 max-w-xl mb-8 leading-relaxed",
  socials: "flex gap-3",
  socialButton:
    "w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300",
  socialIcon: "w-5 h-5 text-foreground dark:text-zinc-300",
  imageWrap: "relative flex justify-center items-center",
  imageBounds: "relative w-72 h-80 sm:w-80 sm:h-80 lg:w-96 lg:h-96",
  imageBaseGlow: "absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-black opacity-60",
  imageOuterGlow: "absolute -inset-8 rounded-full bg-zinc-800/20 dark:bg-zinc-800/30 blur-2xl",
  imageFrame: "relative w-full h-full rounded-full overflow-hidden border-2 border-border dark:border-zinc-800 shadow-2xl shadow-black/30",
  image: "w-full h-full object-cover",
  badgeWrap: "absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap",
  badge: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800",
  badgeDot: "w-2 h-2 rounded-full bg-emerald-500",
  badgeText: "text-xs font-medium text-muted-foreground dark:text-zinc-400",
} as const

export const contactStyles = {
  section: "py-24 px-4 bg-background dark:bg-zinc-950",
  container: "max-w-6xl mx-auto",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
  heading: "display-font text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4 tracking-tight",
  intro: "text-muted-foreground dark:text-zinc-400 mb-8 leading-relaxed",
  linkList: "space-y-4",
  linkItem:
    "flex items-start gap-4 p-4 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-border dark:hover:border-zinc-700 transition-all duration-300",
  linkIconWrap: "p-2.5 rounded-lg bg-card dark:bg-zinc-800 mt-0.5",
  linkIcon: "w-5 h-5 text-emerald-600 dark:text-emerald-500",
  linkContent: "flex-1 min-w-0",
  linkLabel: "font-semibold text-foreground dark:text-white",
  linkValue: "text-sm text-muted-foreground dark:text-zinc-400 truncate",
  formWrap: "group",
  formCardContent: "p-8",
  formTitle: "display-font text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6",
  form: "space-y-6",
  nameEmailGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  fieldLabel: "block text-sm font-medium text-muted-foreground dark:text-zinc-400 mb-2",
  fieldError: "mt-1 text-xs text-red-500",
  submitErrorWrap: "p-4 rounded-lg bg-red-500/10 border border-red-500/30",
  submitErrorText: "text-sm font-medium text-red-600 dark:text-red-400",
  submitSuccessWrap: "p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30",
  submitSuccessText: "text-sm font-medium text-emerald-600 dark:text-emerald-400",
  submitIcon: "mr-2 w-4 h-4",
} as const

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
  description: "text-muted-foreground dark:text-zinc-400 text-sm",
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

export const experienceStyles = {
  section: "py-24 px-4 bg-background dark:bg-zinc-950",
  container: "max-w-6xl mx-auto",
  emptyState: "p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center",
  emptyText: "text-muted-foreground dark:text-zinc-400",
  list: "space-y-4",
  item: "group",
  content: "p-6",
  header: "flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4",
  headerLeft: "flex-1",
  roleRow: "flex items-center gap-3 mb-2",
  iconWrap: "p-2 rounded-lg bg-card dark:bg-zinc-800 group-hover:bg-emerald-600/20",
  icon: "w-4 h-4 text-muted-foreground dark:text-zinc-400 group-hover:text-emerald-500 transition-colors duration-300",
  role: "text-lg font-semibold text-foreground dark:text-white",
  company: "text-sm text-muted-foreground dark:text-zinc-400 font-medium",
  description: "text-muted-foreground dark:text-zinc-400 mb-4 text-sm leading-relaxed",
  skills: "flex flex-wrap gap-2 mb-4",
  systemStatus: "flex items-center gap-2 md:pt-1",
  systemDot: "w-2 h-2 rounded-full",
  systemDotActive: "bg-emerald-500",
  systemDotIdle: "bg-zinc-700",
  meta: "flex flex-col sm:flex-row sm:items-center gap-2 pt-4 border-t border-border dark:border-zinc-800 text-xs text-muted-foreground dark:text-zinc-500",
  metaItem: "flex items-center gap-1.5",
  divider: "hidden sm:block text-border dark:text-zinc-700",
  metaIcon: "w-3.5 h-3.5",
} as const

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

export const navbarStyles = {
  header: "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl",
  nav: "relative flex items-center justify-between px-4 py-3 rounded-full bg-background/40 dark:bg-zinc-900/40 backdrop-blur-md border border-border",
  logoLink: "flex items-center gap-2",
  logoBadge: "w-8 h-8 rounded-lg bg-foreground dark:bg-white flex items-center justify-center",
  logoBadgeText: "text-background dark:text-zinc-950 font-bold text-sm",
  logoText: "font-semibold text-foreground dark:text-white hidden sm:block",
  desktopNavWrap: "hidden md:flex items-center gap-1 relative",
  desktopNavLink: "relative px-4 py-2 text-sm text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white transition-colors",
  desktopHoverPill: "absolute inset-0 bg-muted dark:bg-zinc-800 rounded-full",
  desktopNavLinkText: "relative z-10",
  desktopActions: "hidden md:flex items-center gap-3",
  ghostButton: "text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white hover:bg-muted dark:hover:bg-zinc-800",
  ctaButton: "shimmer-btn bg-foreground dark:bg-white text-background dark:text-zinc-950 hover:bg-muted dark:hover:bg-zinc-200 rounded-full px-4",
  mobileToggle: "md:hidden p-2 text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white",
  mobileMenu: "absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-background/95 dark:bg-zinc-900/95 backdrop-blur-md border border-border",
  mobileMenuList: "flex flex-col gap-2",
  mobileNavLink: "px-4 py-3 text-sm text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white hover:bg-muted dark:hover:bg-zinc-800 rounded-lg transition-colors",
  mobileDivider: "border-border dark:border-zinc-800 my-2",
  mobileGhostButton: "justify-start text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white",
  mobileCtaButton: "shimmer-btn bg-foreground dark:bg-white text-background dark:text-zinc-950 hover:bg-muted dark:hover:bg-zinc-200 rounded-full w-full",
} as const

export const footerStyles = {
  root: "border-t border-border dark:border-zinc-800 bg-background dark:bg-zinc-950",
  container: "max-w-6xl mx-auto px-4 py-16",
  topGrid: "grid grid-cols-2 md:grid-cols-5 gap-8",
  brandCol: "col-span-2 md:col-span-1",
  brandLink: "flex items-center gap-2 mb-4",
  brandBadge: "w-8 h-8 rounded-lg bg-foreground dark:bg-white flex items-center justify-center",
  brandBadgeText: "text-background dark:text-zinc-950 font-bold text-sm",
  brandName: "font-semibold text-foreground dark:text-white",
  brandDescription: "text-sm text-muted-foreground dark:text-zinc-500 mb-4",
  availabilityWrap: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800",
  availabilityText: "text-xs text-muted-foreground dark:text-zinc-400",
  sectionTitle: "text-sm font-semibold text-foreground dark:text-white mb-4",
  sectionList: "space-y-3",
  sectionLink: "text-sm text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors",
  bottomRow: "mt-16 pt-8 border-t border-border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4",
  copyright: "text-sm text-muted-foreground dark:text-zinc-500",
  socialRow: "flex items-center gap-6",
  socialLink: "text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors",
  socialIcon: "w-4 h-4",
} as const