import { Github } from "lucide-react";

export default function EqualLearnProject() {
  return (
    <div className="border border-gray rounded-xl overflow-hidden shadow-lg">
      <div className="h-36 overflow-hidden relative">
        <img
          src="/images/logo-equallearn.png"
          alt="Equal Learn"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="p-6">
        <h3 className="text-l font-semibold text-gray-900 mb-2">Equal Learn</h3>
        <p className="text-gray-600 mb-4 text-sm">
          A video hosting platform developed as the final output for the
          Collaborative Online International Learning (COIL) project.
        </p>
        <a
          href="https://github.com/elijah-alonzo/equal-learn.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm"
        >
          <Github size={16} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
