"use client";

import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import EqualLearnProject from "../proj/equal-learn";
import EPortfolioAIProject from "../proj/e-portfolio";
import RankingSysProject from "../proj/ranking-sys";
import GradingSysProject from "../proj/grading-sys";
import LlamaProject from "../proj/llama";
import { useRef } from "react";

export default function ProjSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-left sm:text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-4">
            Projects
          </h2>
          <p className="text-base text-gray-500 sm:mx-auto">
            A portfolio of functional systems I have designed, developed, and
            successfully deployed throughout my career.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full border-2 border-gray dark:border-gray-900 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-900 items-center justify-center transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-200 dark:text-gray-900 hover:text-white dark:hover:text-black" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth max-w-[1200px] mx-auto snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="w-[280px] sm:w-[340px] md:w-[380px] h-[420px] sm:h-[400px] md:h-[400px] flex-shrink-0 snap-center">
              <RankingSysProject />
            </div>
            <div className="w-[280px] sm:w-[340px] md:w-[380px] h-[420px] sm:h-[400px] md:h-[400px] flex-shrink-0 snap-center">
              <EPortfolioAIProject />
            </div>
            <div className="w-[280px] sm:w-[340px] md:w-[380px] h-[420px] sm:h-[400px] md:h-[400px] flex-shrink-0 snap-center">
              <GradingSysProject />
            </div>
            <div className="w-[280px] sm:w-[340px] md:w-[380px] h-[420px] sm:h-[400px] md:h-[400px] flex-shrink-0 snap-center">
              <EqualLearnProject />
            </div>
            <div className="w-[280px] sm:w-[340px] md:w-[380px] h-[420px] sm:h-[400px] md:h-[400px] flex-shrink-0 snap-center">
              <LlamaProject />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full border-2 border-gray dark:border-gray-900 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-900 items-center justify-center transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-200 dark:text-gray-900 hover:text-white dark:hover:text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
