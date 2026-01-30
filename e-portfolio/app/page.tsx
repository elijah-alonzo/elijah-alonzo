import HomeSection from "../pages/home";
import { SkillSection } from "../pages/skills";
import Navbar from "./nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <HomeSection />
      <SkillSection />
    </div>
  );
}
