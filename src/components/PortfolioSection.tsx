import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Nordic Coffee Roasters",
    category: "Website Design",
    description: "Moderne e-commerce løsning til dansk kafferisteri med fokus på brugeroplevelse.",
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=600&h=400&fit=crop",
  },
  {
    title: "Copenhagen Fitness",
    category: "Website + Marketing",
    description: "Komplet digital tilstedeværelse for fitnesscenter med booking-system.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  },
  {
    title: "Scandinavian Interiors",
    category: "Grafisk Design",
    description: "Brand identity og website til interiørdesign virksomhed.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  },
  {
    title: "Tech Solutions DK",
    category: "Website Design",
    description: "Corporate website til IT-konsulentvirksomhed med fokus på B2B.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Bakery Copenhagen",
    category: "Website + Sociale Medier",
    description: "Lokal bageris online tilstedeværelse med social media strategi.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
  },
  {
    title: "Green Energy Solutions",
    category: "Website Design",
    description: "Bæredygtig energivirksomheds digitale platform.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
  },
];

const PortfolioSection = () => {
  const scrollToTilbud = () => {
    const element = document.querySelector("#tilbud");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-navy text-navy-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary-light uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Færdige hjemmesider
          </h2>
          <p className="text-lg text-secondary">
            Se et udvalg af de projekter vi har leveret til tilfredse kunder 
            i hele Danmark.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary-light uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
                  <ExternalLink size={18} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={scrollToTilbud} size="lg" className="rounded-full">
            Start dit projekt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;