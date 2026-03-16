import { RefObject, useRef } from "react"
import { useInView } from "framer-motion"

interface UseInViewOnceOptions {
  margin?: string
  amount?: number
}

export function useInViewOnce(options: UseInViewOnceOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: options.margin ?? "-100px",
    amount: options.amount ?? 0.3,
  })

  return { ref, isInView }
}
