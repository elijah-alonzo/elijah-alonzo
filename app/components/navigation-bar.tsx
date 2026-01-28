export default function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-200 shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/elijah-alonzo.png"
            alt="Elijah Alonzo"
            className="h-10 w-auto"
          />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Certifications & Training
          </a>
          <a
            href="#experiences"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
