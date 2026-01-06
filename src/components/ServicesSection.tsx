import { Globe, Palette, Wrench, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Moderne, responsive hjemmesider designet til at konvertere besøgende til kunder. Vi fokuserer på brugeroplevelse og hastighed.",
    features: ["Responsivt design", "SEO optimering", "Hurtig loading"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
  },
  {
    icon: Palette,
    title: "Grafisk Design",
    description: "Visuel identitet der skiller sig ud. Fra logo til komplet brandidentitet - vi skaber design der kommunikerer dit brand.",
    features: ["Logo design", "Brand guidelines", "Print materialer"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
  },
  {
    icon: Wrench,
    title: "Website Vedligeholdelse",
    description: "Hold din hjemmeside sikker og opdateret. Vi tager os af teknikken, så du kan fokusere på din forretning.",
    features: ["Sikkerhedsopdateringer", "Backup", "Support"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
  },
  {
    icon: Megaphone,
    title: "Sociale Medier",
    description: "Strategisk annoncering på sociale medier der når din målgruppe. Facebook, Instagram, LinkedIn og mere.",
    features: ["Meta Ads", "LinkedIn Ads", "Content strategi"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
  },
];

const ServicesSection = () => {
  const scrollToTilbud = () => {
    const element = document.querySelector("#tilbud");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Alt du behøver til din digitale tilstedeværelse
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi tilbyder en komplet pakke af digitale services til virksomheder 
            der ønsker at vokse online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-2xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={scrollToTilbud}
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  Få et tilbud <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;