import { cn } from "@/lib/utils"

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
