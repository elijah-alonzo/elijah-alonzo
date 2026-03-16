export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const

export interface FooterSection {
  [key: string]: string[]
}

export const FOOTER_LINKS: FooterSection = {
  Work: ["View Projects", "Case Studies", "Collaborations", "Archives"],
  Resources: ["Blog", "Articles", "Tools", "Resources"],
  About: ["Bio", "Experience", "Skills", "Contact"],
  Social: ["Twitter", "GitHub", "LinkedIn", "Instagram"],
} as const
