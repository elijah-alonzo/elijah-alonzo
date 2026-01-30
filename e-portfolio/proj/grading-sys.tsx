import { Github } from "lucide-react";

export default function GradingSysProject() {
  return (
    <div className="border border-gray dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <div className="h-36 overflow-hidden relative">
        <img
          src="/brand/gss.png"
          alt="Grading Sheet Monitoring System"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="p-6">
        <h3 className="text-l font-semibold mb-2">
          Grading Sheet Monitoring System
        </h3>
        <p className="text-gray-500 mb-4 text-sm">
          A web app for the university registrar and staff to track and monitor
          submission of grading sheets.
        </p>
        <a
          href="https://github.com/elijah-alonzo/grading-sys.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
        >
          <Github size={16} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
