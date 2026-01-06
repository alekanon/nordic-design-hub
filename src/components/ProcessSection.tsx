const steps = [
  {
    number: "01",
    title: "Gratis konsultation",
    description: "Vi starter med en uforpligtende samtale om dine behov, mål og visioner for dit projekt.",
  },
  {
    number: "02",
    title: "Strategi & Planlægning",
    description: "Vi udarbejder en detaljeret plan med wireframes, design og tidsramme.",
  },
  {
    number: "03",
    title: "Design & Udvikling",
    description: "Vi designer og udvikler din løsning med løbende feedback og godkendelser.",
  },
  {
    number: "04",
    title: "Lancering & Support",
    description: "Vi lancerer dit projekt og tilbyder fortsat support og vedligeholdelse.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4">
            Vores proces
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sådan arbejder vi
          </h2>
          <p className="text-lg text-muted-foreground">
            En gennemsigtig og struktureret proces der sikrer det bedste resultat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              <div className="text-6xl font-bold text-primary/10 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;