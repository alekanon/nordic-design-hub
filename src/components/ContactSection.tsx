import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hej@nordicdigital.dk",
    href: "mailto:hej@nordicdigital.dk",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+45 12 34 56 78",
    href: "tel:+4512345678",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "København, Danmark",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4">
            Kontakt
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Lad os starte en samtale
          </h2>
          <p className="text-lg text-muted-foreground">
            Har du spørgsmål eller vil du høre mere? 
            Kontakt os - vi svarer altid inden for 24 timer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="text-center p-8 bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mx-auto mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
