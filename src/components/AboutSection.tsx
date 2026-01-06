const stats = [
  { number: "500+", label: "Tilfredse kunder" },
  { number: "8+", label: "Års erfaring" },
  { number: "100%", label: "Kundetilfredshed" },
];

const AboutSection = () => {
  return (
    <section id="om-os" className="section-padding bg-navy text-navy-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-primary-light uppercase tracking-widest mb-4">
              Om os
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Et dansk digitalt bureau med fokus på resultater
            </h2>
            <div className="space-y-6 text-secondary leading-relaxed">
              <p>
                Vi er et team af passionerede designere og udviklere baseret i 
                København. Vores mission er at hjælpe danske virksomheder med at 
                skabe en stærk digital tilstedeværelse.
              </p>
              <p>
                Med vores skandinaviske tilgang til design kombinerer vi æstetik 
                med funktionalitet. Vi tror på, at godt design ikke kun skal se 
                godt ud - det skal også performe.
              </p>
              <p>
                Fra små startups til etablerede virksomheder - vi tilpasser vores 
                løsninger til dine behov og budget.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Vores team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;