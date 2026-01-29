import { Github } from "lucide-react";

export default function RankingSysProject() {
  return (
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
          A platform for the Paulinian Student Government to manage, showcase,
          and rank student portfolios efficiently.
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
  );
}
