import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/azulo-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#om-os", label: "Om os" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Azulo" className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#tilbud")}
              size="sm"
              className="ml-4 rounded-full"
            >
              Få et tilbud
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#tilbud")}
                size="sm"
                className="w-fit mt-2 rounded-full"
              >
                Få et tilbud
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;