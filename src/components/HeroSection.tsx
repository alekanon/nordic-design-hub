import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

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
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Creative agency workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/80 uppercase tracking-widest mb-6 animate-fade-in">
            Digital bureau · København
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Vi skaber digitale
            <br />
            oplevelser der
            <br />
            konverterer
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fra webdesign til markedsføring. Vi hjælper danske virksomheder 
            med at vokse online gennem strategisk design og digital markedsføring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" onClick={scrollToTilbud} className="rounded-full bg-white text-primary hover:bg-white/90">
              Få et gratis tilbud
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices} className="rounded-full border-white text-white hover:bg-white/10">
              Se vores services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll ned"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;