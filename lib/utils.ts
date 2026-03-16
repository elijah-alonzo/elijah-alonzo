import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Mail, Linkedin, Github, Facebook, Instagram } from 'lucide-react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Single source of truth for icon mapping
export const ICON_MAP = {
  Mail,
  Linkedin,
  Github,
  Facebook,
  Instagram,
} as const
