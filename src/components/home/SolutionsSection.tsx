import { 
  FileText, 
  Leaf, 
  Users, 
  GraduationCap, 
  Sun, 
  Droplets 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: FileText,
    title: "ESG Strategy Reports",
    description: "Comprehensive execution plans aligned with your sustainability goals, complete with timelines and budgets.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Leaf,
    title: "Carbon Reduction",
    description: "Actionable roadmaps to reduce CO₂ emissions through renewable energy, efficiency improvements, and offsets.",
    color: "bg-earth-moss/20 text-earth-moss",
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Identify high-impact community projects that align with your brand values and operational footprint.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Upskill communities with vocational training, digital literacy, and sustainable agriculture practices.",
    color: "bg-earth-olive/20 text-earth-olive",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Connect with vetted solar and clean energy contractors for installations that maximize impact.",
    color: "bg-earth-clay/20 text-earth-clay",
  },
  {
    icon: Droplets,
    title: "Water Solutions",
    description: "Water desalination, purification, and conservation projects for communities in need.",
    color: "bg-primary/10 text-primary",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            From Strategy to Execution
          </h2>
          <p className="text-lg text-muted-foreground">
            We transform your sustainability vision into detailed, actionable plans with clear budgets, timelines, and measurable outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title}
              className="group border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
