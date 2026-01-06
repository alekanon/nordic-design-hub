import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Jensen",
    role: "CEO, TechStart",
    content: "Azulo leverede en fantastisk hjemmeside der virkelig har gjort en forskel for vores forretning. Professionelle og nemme at arbejde med.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Lars Petersen",
    role: "Indehaver, Bakery Copenhagen",
    content: "Fra start til slut var processen helt utrolig. De forstod vores vision og skabte præcis det vi drømte om.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Anne Kristensen",
    role: "Marketing Manager, Nordic Retail",
    content: "Vores online salg er steget med 150% efter vi fik ny hjemmeside. Det var den bedste investering vi har gjort.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4">
            Kundeanmeldelser
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Hvad vores kunder siger
          </h2>
          <p className="text-lg text-muted-foreground">
            Vi er stolte af vores kundetilfredshed og de resultater vi skaber sammen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-muted/30 rounded-3xl hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;