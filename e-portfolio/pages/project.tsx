import { Github, ExternalLink } from "lucide-react";
import EqualLearnProject from "../proj/equal-learn";
import EPortfolioAIProject from "../proj/e-portfolio";
import RankingSysProject from "../proj/ranking-sys";
import GradingSysProject from "../proj/grading-sys";
import LlamaProject from "../proj/llama";

export default function ProjSection() {
  return (
    <section
      id="projects"
      className="py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Projects
          </h2>
          <p className="text-base text-gray-500 mx-auto">
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
