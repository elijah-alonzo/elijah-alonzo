import { ThemeToggle } from "./theme";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/elijah-alonzo.png"
            alt="Elijah Alonzo"
            className="h-10 w-auto"
          />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {/* Example navigation links with classes only */}
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Projects
          </a>
          <a
            href="#tools"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Tools
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Contact
          </a>
          <span className="ml-4">
            {/* Theme toggle button */}
            {/* ...existing code... */}
            {/* Import ThemeToggle from './theme' at the top if not already imported */}
            <ThemeToggle />
          </span>
        </div>
      </div>
    </nav>
  );
}
