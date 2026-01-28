import { Github } from "lucide-react";

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
          <div className="border border-gray rounded-xl overflow-hidden shadow-lg">
            <div className="h-36 overflow-hidden relative">
              <img
                src="/images/logo-ranking-sys.png"
                alt="e-Portfolio and Ranking System"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0"></div>
            </div>
            <div className="p-6">
              <h3 className="text-l font-semibold text-gray-900 mb-2">
                e-Portfolio and Ranking System
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                A platform for the Paulinian Student Government to manage,
                showcase, and rank student portfolios efficiently.
              </p>
              <a
                href="https://github.com/elijah-alonzo/ranking-sys.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Grading Sheet Monitoring System */}
          <div className="border border-gray rounded-xl overflow-hidden shadow-lg">
            <div className="h-36 overflow-hidden relative">
              <img
                src="/images/logo-grading-sys.png"
                alt="Grading Sheet Monitoring System"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0"></div>
            </div>
            <div className="p-6">
              <h3 className="text-l font-semibold text-gray-900 mb-2">
                Grading Sheet Monitoring System
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                A web app for the university registrar and staff to track and
                monitor submission of grading sheets.
              </p>
              <a
                href="https://github.com/elijah-alonzo/grading-sys.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Equal Learn */}
          <div className="border border-gray rounded-xl overflow-hidden shadow-lg">
            <div className="h-36 overflow-hidden relative">
              <img
                src="/images/logo-equallearn.png"
                alt="e-Portfolio and Ranking System"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0"></div>
            </div>
            <div className="p-6">
              <h3 className="text-l font-semibold text-gray-900 mb-2">
                Equal Learn
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                A platform for the Paulinian Student Government to manage,
                showcase, and rank student portfolios efficiently.
              </p>
              <a
                href="https://github.com/elijah-alonzo/ranking-sys.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm"
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
