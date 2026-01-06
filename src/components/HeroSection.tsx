import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTilbud = () => {
    const element = document.querySelector("#tilbud");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6 animate-fade-in">
            Digital bureau · København
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Vi skaber digitale
            <br />
            <span className="text-gradient">oplevelser</span> der
            <br />
            konverterer
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fra webdesign til markedsføring. Vi hjælper danske virksomheder 
            med at vokse online gennem strategisk design og digital markedsføring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" onClick={scrollToTilbud}>
              Få et gratis tilbud
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices}>
              Se vores services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll ned"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
