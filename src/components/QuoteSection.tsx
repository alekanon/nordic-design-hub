import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const QuoteSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tak for din henvendelse!",
      description: "Vi vender tilbage inden for 24 timer.",
    });
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="tilbud" className="section-padding bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-primary-light uppercase tracking-widest mb-4">
              Få et tilbud
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
              Lad os tale om dit projekt
            </h2>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Udfyld formularen og vi kontakter dig inden for 24 timer med et 
              uforpligtende tilbud. Alle projekter starter med en gratis samtale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Gratis konsultation</h4>
                  <p className="text-sm text-secondary">
                    Vi starter med en uforpligtende samtale om dine behov.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Skræddersyet tilbud</h4>
                  <p className="text-sm text-secondary">
                    Du modtager et detaljeret tilbud tilpasset dit projekt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Vi går i gang</h4>
                  <p className="text-sm text-secondary">
                    Efter godkendelse starter vi arbejdet med det samme.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm mb-2 block">
                  Navn *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-secondary"
                  placeholder="Dit navn"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm mb-2 block">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-secondary"
                  placeholder="din@email.dk"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="text-sm mb-2 block">
                  Virksomhed
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background/10 border-background/20 text-background placeholder:text-secondary"
                  placeholder="Din virksomhed"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-sm mb-2 block">
                  Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 bg-background/10 border border-background/20 text-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" className="text-foreground">Vælg service</option>
                  <option value="website" className="text-foreground">Website Design</option>
                  <option value="grafisk" className="text-foreground">Grafisk Design</option>
                  <option value="vedligeholdelse" className="text-foreground">Website Vedligeholdelse</option>
                  <option value="social" className="text-foreground">Sociale Medier</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm mb-2 block">
                Besked *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-background/10 border-background/20 text-background placeholder:text-secondary resize-none"
                placeholder="Fortæl os om dit projekt..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send forespørgsel
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
