import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card py-10 md:py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <img 
                src="/logo.png" 
                alt="Intrusive Tech Solutions Logo" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-tight">
                  INTRUSIVE
                </span>
                <span className="text-xs font-medium text-primary leading-tight">
                  TECH SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future of technology, one solution at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</a>
              <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a>
              <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</a>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Products</Link>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-foreground mb-4">Connect With Us</h4>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/wisetech4you-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:wisetech4you@gmail.com"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 Intrusive Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
