const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#tools", label: "Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
    // Optionally update the URL hash
    window.history.pushState(null, "", href);
  }
}

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/elijah-alonzo.png"
            alt="Elijah Alonzo"
            className="h-10 w-auto"
          />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
