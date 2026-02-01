import { Github, ExternalLink } from "lucide-react";

export default function LlamaProject() {
  return (
    <div className="border border-gray dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <div className="h-36 overflow-hidden relative">
        <img
          src="/brand/lll.png"
          alt="Llucky Llama"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="p-6">
        <h3 className="text-l font-semibold mb-2">Llucky Llama</h3>
        <p className="text-gray-500 mb-4 text-sm">
          Randomizer web app that provides spin the bottle, wheel of names,
          slotmachine, and pick a card features.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/elijah-alonzo/lucky-llama.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
          >
            <Github size={16} />
            View on GitHub
          </a>
          <a
            href="https://lucky-llama.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm"
          >
            <ExternalLink size={16} />
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
