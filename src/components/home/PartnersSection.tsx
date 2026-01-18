import { Building2, Users, Sun, Droplets, Sprout, GraduationCap } from "lucide-react";

const partnerCategories = [
  {
    icon: Users,
    category: "NGOs",
    count: "25+",
    examples: ["UNICEF Egypt", "Red Crescent", "Misr El Kheir"],
  },
  {
    icon: Sun,
    category: "Solar Energy",
    count: "12+",
    examples: ["SolarizEgypt", "KarmSolar", "TAQA Arabia"],
  },
  {
    icon: Droplets,
    category: "Water Solutions",
    count: "8+",
    examples: ["Aqua Systems", "DesalTech", "Clean Water Initiative"],
  },
  {
    icon: Sprout,
    category: "Agriculture",
    count: "10+",
    examples: ["Green Farms", "AgroTech Egypt", "Sustainable Harvest"],
  },
  {
    icon: GraduationCap,
    category: "Training",
    count: "15+",
    examples: ["SkillUp Academy", "Digital Egypt", "VocaTrain"],
  },
  {
    icon: Building2,
    category: "Incubators",
    count: "6+",
    examples: ["Flat6Labs", "AUC Venture Lab", "GrEEK Campus"],
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            Partner Network
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Trusted Partners Across Egypt
          </h2>
          <p className="text-lg text-muted-foreground">
            Our vetted network of NGOs and contractors ensures your sustainability projects are executed with excellence and measurable impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCategories.map((partner, index) => (
            <div 
              key={partner.category}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <partner.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="font-display text-2xl font-bold text-primary">
                  {partner.count}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {partner.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {partner.examples.map((example) => (
                  <span 
                    key={example}
                    className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA for Partners */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-accent/30 rounded-2xl border border-accent-foreground/10">
            <span className="text-muted-foreground">Are you an NGO or contractor?</span>
            <a 
              href="#" 
              className="font-medium text-primary hover:underline underline-offset-4"
            >
              Join our partner network →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
