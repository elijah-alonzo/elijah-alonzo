import { Github, ExternalLink } from "lucide-react";

export default function EPortfolioAIProject() {
  return (
    <div className="border border-gray dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <div className="h-36 overflow-hidden relative">
        <img
          src="/sys-logo.png"
          alt="e-Portfolio with Integrated AI"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="p-6">
        <h3 className="text-l font-semibold mb-2">
          e-Portfolio with Integrated AI
        </h3>
        <p className="text-gray-500 mb-4 text-sm">
          Personal portfolio website enhanced with AI features and RAG
          technology to improve user experience and interactivity.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/elijah-alonzo/elijah-alonzo.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
          >
            <Github size={16} />
            View on GitHub
          </a>
          <a
            href="https://elijah-alonzo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm"
          >
            <ExternalLink size={16} />
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
