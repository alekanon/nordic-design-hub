const stats = [
  { number: "50+", label: "Projekter leveret" },
  { number: "5+", label: "Års erfaring" },
  { number: "100%", label: "Tilfredse kunder" },
];

const AboutSection = () => {
  return (
    <section id="om-os" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-4">
              Om os
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
              Et dansk digitalt bureau med fokus på resultater
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
                  <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 p-8 border-l-4 border-primary">
              <blockquote className="text-lg italic mb-4">
                "Nordic Digital leverede en fantastisk hjemmeside der virkelig 
                har gjort en forskel for vores forretning. Professionelle og 
                nemme at arbejde med."
              </blockquote>
              <cite className="text-sm text-muted-foreground not-italic">
                — Maria Jensen, CEO hos TechStart
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
