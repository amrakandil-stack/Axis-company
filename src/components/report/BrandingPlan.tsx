import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Camera, Users, Globe, Calendar, Target } from "lucide-react";

const BrandingPlan = () => {
  const communicationChannels = [
    { icon: Globe, name: "Corporate Website", description: "Dedicated sustainability hub with progress tracking" },
    { icon: Megaphone, name: "Press Releases", description: "Quarterly updates on milestone achievements" },
    { icon: Camera, name: "Social Media", description: "Behind-the-scenes content and impact stories" },
    { icon: Users, name: "Stakeholder Reports", description: "Annual ESG report integration" },
  ];

  const campaignIdeas = [
    {
      title: "Beauty for Tomorrow",
      description: "Hero campaign showcasing the connection between beauty products and environmental stewardship in Egypt.",
      timing: "Q2 2024 Launch",
      reach: "5M+ Egyptians",
    },
    {
      title: "Women Rising",
      description: "Documentary series following rural women entrepreneurs through the training program.",
      timing: "Monthly episodes",
      reach: "Social media focus",
    },
    {
      title: "Green Factory Tours",
      description: "Virtual and in-person tours showcasing solar installations and sustainable manufacturing.",
      timing: "Quarterly events",
      reach: "Media & influencers",
    },
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Branding & Communication Plan</CardTitle>
        <p className="text-muted-foreground">
          Strategic visibility and stakeholder engagement framework
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-secondary" />
            Communication Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communicationChannels.map((channel, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <channel.icon className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-medium">{channel.name}</p>
                  <p className="text-sm text-muted-foreground">{channel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-secondary" />
            Recommended Campaigns
          </h3>
          <div className="space-y-4">
            {campaignIdeas.map((campaign, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="font-semibold text-primary">{campaign.title}</h4>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {campaign.timing}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {campaign.reach}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{campaign.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
          <h4 className="font-semibold text-secondary mb-2">Brand Guidelines Note</h4>
          <p className="text-sm text-muted-foreground">
            All communications will adhere to L'Oréal brand guidelines while incorporating local Egyptian 
            cultural elements. Visual assets will emphasize authentic community stories and measurable 
            environmental impact with professional photography and videography.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrandingPlan;
