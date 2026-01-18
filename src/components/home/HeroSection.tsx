import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-earth" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-accent-foreground/10 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">AI-Powered Sustainability</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Turn Your ESG Vision Into{" "}
              <span className="text-primary">Measurable Impact</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Axis bridges the gap between sustainability strategy and execution. We generate comprehensive action plans, connect you with trusted partners, and measure real-world impact—all powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-all group">
                Generate Your Report
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-accent/50">
                View Sample Report
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div>
                <div className="font-display text-3xl font-semibold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Partner NGOs</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-foreground">200K</div>
                <div className="text-sm text-muted-foreground">Tons CO₂ Saved</div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-foreground">15K</div>
                <div className="text-sm text-muted-foreground">People Trained</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-medium p-8 border border-border animate-scale-in">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft" />
                  <span className="text-sm font-medium text-muted-foreground">Report Generator</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="h-3 bg-accent rounded-full w-full" />
                  <div className="h-3 bg-accent rounded-full w-4/5" />
                  <div className="h-3 bg-accent rounded-full w-3/5" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/50 rounded-xl p-4">
                    <TrendingUp className="w-5 h-5 text-primary mb-2" />
                    <div className="text-xs text-muted-foreground">Carbon Reduction</div>
                    <div className="font-display font-semibold text-foreground">-45%</div>
                  </div>
                  <div className="bg-accent/50 rounded-xl p-4">
                    <Users className="w-5 h-5 text-secondary mb-2" />
                    <div className="text-xs text-muted-foreground">Community Impact</div>
                    <div className="font-display font-semibold text-foreground">2.5K</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-soft p-4 border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full gradient-warm flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">AI Analysis</div>
                    <div className="text-sm font-medium text-foreground">Complete</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-6 bg-card rounded-xl shadow-soft p-4 border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-xs text-muted-foreground mb-1">Budget Estimate</div>
                <div className="font-display text-lg font-semibold text-primary">$125,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
