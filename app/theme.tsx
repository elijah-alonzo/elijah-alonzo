"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full text-blue-500 dark:text-blue-400 hover:bg-gray-200 hover:text-blue-500 dark:hover:bg-gray-800 relative w-10 h-10 p-0 overflow-hidden"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
    </Button>
  );
}
