import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, TrendingUp, DollarSign, Building } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  category: string;
  description: string;
  location: string;
  timeline: string;
  beneficiaries: string;
  impact: string;
  budget: string;
  contractor: string;
  priority: "high" | "medium" | "low";
}

const RecommendationCard = ({
  title,
  category,
  description,
  location,
  timeline,
  beneficiaries,
  impact,
  budget,
  contractor,
  priority,
}: RecommendationCardProps) => {
  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <Card className="border border-border/50 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge variant="outline" className="mb-2 text-xs">
              {category}
            </Badge>
            <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          </div>
          <Badge className={priorityColors[priority]}>
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span className="text-muted-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-secondary" />
            <span className="text-muted-foreground">{timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-secondary" />
            <span className="text-muted-foreground">{beneficiaries}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="text-muted-foreground">{impact}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary">{budget}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building className="h-4 w-4" />
            <span>{contractor}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
