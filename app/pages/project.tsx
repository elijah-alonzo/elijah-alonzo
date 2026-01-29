// @ts-nocheck
import { Github, ExternalLink } from "lucide-react";
import EqualLearnProject from "../components/projects/equal-learn";
import EPortfolioAIProject from "../components/projects/e-portfolio";
import RankingSysProject from "../components/projects/ranking-sys";
import GradingSysProject from "../components/projects/grading-sys";
import LlamaProject from "../components/projects/llama";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-base text-gray-600 mx-auto">
            A portfolio of functional systems I have designed, developed, and
            successfully deployed throughout my career.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* e-Portfolio and Ranking System */}
          <RankingSysProject />

          {/* e-Portfolio with Integrated AI */}
          <EPortfolioAIProject />

          {/* Grading Sheet Monitoring System */}
          <GradingSysProject />

          {/* Equal Learn */}
          <EqualLearnProject />

          {/* Llucky Llama */}
          <LlamaProject />
        </div>
      </div>
    </section>
  );
}
