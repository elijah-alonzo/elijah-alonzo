import { RefObject, useEffect, useState } from "react"

interface UseAutoScrollCarouselProps {
  ref: RefObject<HTMLDivElement | null>
  enabled: boolean
  itemCount: number
  autoScrollInterval?: number
  scrollDuration?: number
}

export function useAutoScrollCarousel({
  ref,
  enabled,
  itemCount,
  autoScrollInterval = 4000,
  scrollDuration = 1500,
}: UseAutoScrollCarouselProps) {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!enabled || itemCount === 0 || !ref.current) return

    let scrollPosition = 0
    const itemWidth = 440
    const totalScroll = itemWidth * itemCount

    const interval = setInterval(() => {
      if (!isHovered && ref.current) {
        const targetScroll = (scrollPosition + itemWidth) % totalScroll
        const startScroll = ref.current.scrollLeft
        const startTime = performance.now()

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / scrollDuration, 1)

          if (ref.current) {
            ref.current.scrollLeft = startScroll + (targetScroll - startScroll) * progress
          }

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            scrollPosition = targetScroll
          }
        }

        requestAnimationFrame(animate)
      }
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [isHovered, enabled, itemCount, ref, autoScrollInterval, scrollDuration])

  return { isHovered, setIsHovered }
}
