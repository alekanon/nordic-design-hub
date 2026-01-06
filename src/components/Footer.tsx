import logo from "@/assets/azulo-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-navy-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img src={logo} alt="Azulo" className="h-10 brightness-0 invert" />
            </a>
            <p className="text-secondary max-w-md leading-relaxed">
              Et dansk digitalt bureau der specialiserer sig i webdesign og 
              digital markedsføring. Vi hjælper virksomheder med at vokse online.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-secondary">
              <li>
                <button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">
                  Grafisk Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">
                  Vedligeholdelse
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">
                  Sociale Medier
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-3 text-secondary">
              <li>
                <button onClick={() => scrollToSection("#om-os")} className="hover:text-white transition-colors">
                  Om os
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#portfolio")} className="hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#kontakt")} className="hover:text-white transition-colors">
                  Kontakt
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#tilbud")} className="hover:text-white transition-colors">
                  Få et tilbud
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {currentYear} Azulo. Alle rettigheder forbeholdes.
          </p>
          <p className="text-sm text-secondary">
            CVR: 12 34 56 78
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;