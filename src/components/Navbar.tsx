import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "À propos", href: "#about", id: "about" },
  { name: "Projets", href: "#projects", id: "projects" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Témoignages", href: "#testimonials", id: "testimonials" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a href="#home" className="font-heading font-bold text-lg tracking-tight">
          Tikiz<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.id} href={l.href} className="nav-link text-sm">
              {l.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-4 text-sm">
          Travaillons ensemble
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-foreground hover:text-primary transition-colors"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 text-center"
            >
              Travaillons ensemble
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;