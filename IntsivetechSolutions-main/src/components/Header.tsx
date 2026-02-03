import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: isHomePage ? "#home" : "/#home", label: "Home" },
    { href: isHomePage ? "#services" : "/#services", label: "Services" },
    { href: "/products", label: "Products", isRoute: true },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact" },
    { href: isHomePage ? "#about" : "/#about", label: "About Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-lg shadow-black/30 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo Space - Ready for image */}
        <Link 
          to="/" 
          className="flex items-center h-16 md:h-20 transition-transform duration-300 hover:scale-105"
        >
          <div className="flex items-center gap-3">
            {/* Company Logo */}
            <img 
              src="/logo.png" 
              alt="Intrusive Tech Solutions Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-foreground leading-tight">
                INTRUSIVE
              </span>
              <span className="text-xs md:text-sm font-medium text-primary leading-tight">
                TECH SOLUTIONS
              </span>
            </div>
          </div>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 flex-col bg-card shadow-lg shadow-black/30`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-border last:border-b-0">
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="block text-center py-4 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="block text-center py-4 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
