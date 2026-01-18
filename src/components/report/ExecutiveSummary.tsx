import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Leaf, DollarSign } from "lucide-react";

const ExecutiveSummary = () => {
  const keyMetrics = [
    { icon: Leaf, label: "CO2 Reduction Target", value: "45,000 tons", period: "by 2030" },
    { icon: Users, label: "People to Train", value: "12,500", period: "across 3 years" },
    { icon: TrendingUp, label: "ESG Score Improvement", value: "+18 points", period: "projected" },
    { icon: DollarSign, label: "Total Investment", value: "EGP 48.5M", period: "over 5 years" },
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Executive Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          This comprehensive sustainability execution report has been prepared for <strong>L'Oréal Egypt</strong> 
          in alignment with your 2030 sustainability vision. Based on our analysis of your current ESG position 
          and strategic objectives, we present a detailed roadmap of actionable recommendations spanning 
          environmental impact reduction, community development, and capacity building initiatives.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4 text-center">
              <metric.icon className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-xs text-muted-foreground/70">{metric.period}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-6">
          <h4 className="font-semibold text-secondary mb-2">Strategic Alignment</h4>
          <p className="text-sm text-muted-foreground">
            All recommendations in this report are directly aligned with L'Oréal's "L'Oréal for the Future" 
            program and Egypt's Vision 2030 sustainability goals, ensuring maximum impact and stakeholder value.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveSummary;
