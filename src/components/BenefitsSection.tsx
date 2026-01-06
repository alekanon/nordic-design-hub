import { Check, User, Award, BookOpen, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: User,
    title: "Altid én fast kontaktperson",
    description: "Du har altid den samme dedikerede kontaktperson gennem hele projektet.",
  },
  {
    icon: Award,
    title: "500+ tilfredse kunder",
    description: "Vi har hjulpet over 500 virksomheder med at styrke deres digitale tilstedeværelse.",
  },
  {
    icon: Check,
    title: "Du ejer hjemmesiden efterfølgende",
    description: "Når projektet er færdigt, ejer du 100% af din hjemmeside uden skjulte bindinger.",
  },
  {
    icon: BookOpen,
    title: "Grundig oplæring",
    description: "Vi sørger for at du selv kan lave rettelser og opdateringer til din side.",
  },
  {
    icon: Smartphone,
    title: "Altid mobil- og tabletvenlig",
    description: "Alle vores hjemmesider er optimeret til at fungere perfekt på alle enheder.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-4">
              Hvorfor vælge os
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Få et webbureau, som lytter til dine ønsker
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Når vi laver en hjemmeside for en kunde, er det vigtigt for os at kunden 
              føler sig inddraget og ved hvor vi er i processen. Vi prioriterer 
              gennemsigtighed og samarbejde i alt hvad vi gør.
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl flex-shrink-0">
                  <benefit.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;