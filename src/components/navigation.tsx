import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/pk.png"
import { trackNavigationClick } from "../analytics/analytics";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Nav = ({
  active,
  dark,
  onToggle,
}: {
  active: string;
  dark: boolean;
  onToggle: () => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border"
        : ""
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold text-accent tracking-wide text-sm"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <img className="w-18 h-12" src={Logo} alt="PK" style={{ filter: dark ? 'brightness(1.6)' : 'none' }} />
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => trackNavigationClick(label)}
                className={`text-sm transition-colors duration-200 ${active === href.slice(1)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* theme toggle */}
        <button
          onClick={onToggle}
          aria-label={
            dark
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          className="hidden md:inline-flex items-center gap-2 text-xs border border-border px-3 py-1.5 rounded-full text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {dark ? (
            <>
              <Sun size={12} /> Light
            </>
          ) : (
            <>
              <Moon size={12} /> Dark
            </>
          )}
        </button>
        {/* mobile icon-only toggle */}
        <button
          onClick={onToggle}
          aria-label={
            dark
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          className="md:hidden text-muted-foreground hover:text-accent transition-colors p-1"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-px bg-current" />
            <span className="block w-5 h-px bg-current" />
            <span className="block w-5 h-px bg-current" />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 space-y-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-accent transition-colors"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;