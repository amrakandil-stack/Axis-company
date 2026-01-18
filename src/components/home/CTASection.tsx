import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Ready to Start?</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Transform Your Sustainability Vision Into Reality
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your AI-powered sustainability execution report in days, not months. Connect with our network of partners and start making measurable impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-all group text-base px-8">
              Generate Your Report
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-accent/50 text-base px-8">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No commitment required. See a sample report for your industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
