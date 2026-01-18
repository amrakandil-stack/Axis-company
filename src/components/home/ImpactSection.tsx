import { TrendingDown, Users, TreeDeciduous, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "200K+",
    label: "Tons CO₂ Reduced",
    description: "Through solar installations and efficiency projects",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "People Trained",
    description: "In sustainable practices and vocational skills",
  },
  {
    icon: TreeDeciduous,
    value: "50,000+",
    label: "Trees Planted",
    description: "Across agricultural and reforestation projects",
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
    description: "Reported achieving their sustainability targets",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider mb-3 block">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Real Results, Real Change
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Every project we deliver creates measurable impact. Here's what our partner network has achieved together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display text-4xl font-bold text-primary-foreground mb-2">
                {metric.value}
              </div>
              <div className="font-medium text-primary-foreground mb-2">
                {metric.label}
              </div>
              <p className="text-sm text-primary-foreground/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
