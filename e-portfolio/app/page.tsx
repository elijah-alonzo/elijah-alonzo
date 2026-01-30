import HomeSection from "../pages/home";
import Navbar from "./nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 py-16 w-full">
        <HomeSection />
      </main>
    </div>
  );
}
