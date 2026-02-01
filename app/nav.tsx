"use client";

import { ThemeToggle } from "./theme";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-base">
        <div className="flex items-center">
          <img
            src="/sys-logo.png"
            alt="Elijah Alonzo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#home"
            className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#tech"
            className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Tech
          </a>
          <a
            href="#projects"
            className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
          <span className="ml-4">
            <ThemeToggle />
          </span>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="block text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Home
            </a>
            <a
              href="#tech"
              onClick={closeMenu}
              className="block text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Tech
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
