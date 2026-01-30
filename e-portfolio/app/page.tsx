import { ThemeToggle } from "./theme";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1>Welcome to My E-Portfolio</h1>
      <p>This is the home page of my e-portfolio built with Next.js.</p>

      <ThemeToggle />
    </div>
  );
}
