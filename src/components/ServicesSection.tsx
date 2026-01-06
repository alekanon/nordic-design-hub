import { Globe, Palette, Wrench, Megaphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Moderne, responsive hjemmesider designet til at konvertere besøgende til kunder. Vi fokuserer på brugeroplevelse og hastighed.",
    features: ["Responsivt design", "SEO optimering", "Hurtig loading"],
  },
  {
    icon: Palette,
    title: "Grafisk Design",
    description: "Visuel identitet der skiller sig ud. Fra logo til komplet brandidentitet - vi skaber design der kommunikerer dit brand.",
    features: ["Logo design", "Brand guidelines", "Print materialer"],
  },
  {
    icon: Wrench,
    title: "Website Vedligeholdelse",
    description: "Hold din hjemmeside sikker og opdateret. Vi tager os af teknikken, så du kan fokusere på din forretning.",
    features: ["Sikkerhedsopdateringer", "Backup", "Support"],
  },
  {
    icon: Megaphone,
    title: "Sociale Medier",
    description: "Strategisk annoncering på sociale medier der når din målgruppe. Facebook, Instagram, LinkedIn og mere.",
    features: ["Meta Ads", "LinkedIn Ads", "Content strategi"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Alt du behøver til din digitale tilstedeværelse
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi tilbyder en komplet pakke af digitale services til virksomheder 
            der ønsker at vokse online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background p-8 lg:p-10 border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-muted-foreground bg-muted px-3 py-1"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
