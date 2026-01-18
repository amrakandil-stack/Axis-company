import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const ImpactTimeline = () => {
  const milestones = [
    {
      year: "2024",
      quarter: "Q1-Q2",
      status: "upcoming",
      title: "Foundation Phase",
      items: [
        "Solar installation begins at Cairo factory",
        "Women entrepreneurship program launch",
        "Contractor partnerships finalized",
      ],
    },
    {
      year: "2024",
      quarter: "Q3-Q4",
      status: "planned",
      title: "Implementation Phase",
      items: [
        "Water recycling system operational",
        "First 500 women trained",
        "Fleet electrification phase 1 complete",
      ],
    },
    {
      year: "2025",
      quarter: "Full Year",
      status: "planned",
      title: "Scale-Up Phase",
      items: [
        "15 schools renovated and equipped",
        "Green startup incubator launched",
        "2,000 youth in technical training",
      ],
    },
    {
      year: "2026-2030",
      quarter: "",
      status: "planned",
      title: "Long-Term Impact",
      items: [
        "45,000 tons CO2 reduction achieved",
        "12,500 people trained across all programs",
        "ESG score improvement of 18+ points",
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-6 w-6 text-green-500" />;
      case "upcoming":
        return <Clock className="h-6 w-6 text-secondary" />;
      default:
        return <Circle className="h-6 w-6 text-muted-foreground" />;
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Implementation Timeline</CardTitle>
        <p className="text-muted-foreground">
          Projected milestones and key deliverables
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                {getStatusIcon(milestone.status)}
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="font-mono">
                    {milestone.year} {milestone.quarter}
                  </Badge>
                  <h4 className="font-semibold">{milestone.title}</h4>
                </div>
                <ul className="space-y-1">
                  {milestone.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactTimeline;
