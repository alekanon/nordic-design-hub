const stats = [
  { number: "500+", label: "Tilfredse kunder" },
  { number: "8+", label: "Års erfaring" },
  { number: "1000+", label: "Projekter leveret" },
  { number: "100%", label: "Kundetilfredshed" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;