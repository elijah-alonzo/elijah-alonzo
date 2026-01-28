import { Github } from "lucide-react";

interface ProjectsSectionProps {
  animatedSections: Set<string>;
}

export default function ProjectsSection({
  animatedSections,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${animatedSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-base text-gray-600 mx-auto">
            A portfolio of functional systems I have designed, developed, and
            successfully deployed throughout my career.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${animatedSections.has("projects") ? "opacity-100" : "opacity-0"}`}
        >
          {/* Digital Twin */}
          <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/images/digitaltwin.png"
                alt="Digital Twin Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Digital Twin
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                An AI-powered digital twin chatbot that provides information
                about my background, skills, and experiences using RAG
                technology.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {["AI", "RAG", "Chatbot"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-cyan-100 text-cyan-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/elijah-alonzo/digital-twin.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
          {/* Equal Learn */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/images/equallearn.png"
                alt="Equal Learn Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Equal Learn
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                An educational video hosting website designed for kids and
                teachers to access and share learning content.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {["Education", "Video Hosting", "Learning Platform"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <a
                href="https://github.com/elijah-alonzo/EqualLearn.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
          {/* PSG E-Portfolio */}
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl overflow-hidden hover:border-emerald-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/images/e-portfolio.png"
                alt="PSG E-Portfolio Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Paulinian Student Government E-Portfolio and Ranking System
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                A comprehensive system for managing student portfolios and
                rankings within the student government.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {["Laravel", "Portfolio", "Management"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/elijah-alonzo/app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
          {/* Gem Catcher */}
          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl overflow-hidden hover:border-purple-400 hover:shadow-lg transition transform hover:scale-105 group shadow-lg">
            <div className="h-48 overflow-hidden relative">
              <img
                src="/images/gemcatcher.png"
                alt="Gem Catcher Game"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gem Catcher
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                A 2D arcade-style game where players catch gems to gain points
                and achieve high scores.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {["Game", "2D", "Arcade"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/elijah-alonzo/GemCathcer.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
