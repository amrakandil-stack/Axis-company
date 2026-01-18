import { Upload, Sparkles, FileCheck, Handshake } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Share Your Vision",
    description: "Tell us about your sustainability targets, ESG goals, and operational context. The more details, the better your custom report.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "AI-Powered Analysis",
    description: "Our AI analyzes your inputs against our database of 50+ NGOs, contractors, and impact projects to find the best matches.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Receive Your Report",
    description: "Get a comprehensive execution plan with project recommendations, budget estimates, timelines, and branding guidelines.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Execute & Measure",
    description: "Connect with our partner network to implement projects. We track real impact metrics and help you communicate your story.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-3 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Your Path to Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial strategy to measurable outcomes—we guide you through every step of your sustainability journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-background rounded-2xl p-6 border border-border group-hover:border-primary/30 group-hover:shadow-soft transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-display text-3xl font-bold text-muted-foreground/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
