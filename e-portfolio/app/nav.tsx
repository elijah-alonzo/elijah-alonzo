import { ThemeToggle } from "./theme";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="text-xl font-bold">My E-Portfolio</div>
      <ul className="flex items-center gap-6">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
