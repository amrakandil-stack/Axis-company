import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Star, MapPin, CheckCircle } from "lucide-react";

const ContractorNetwork = () => {
  const contractors = [
    {
      name: "SolarMisr Energy",
      category: "Renewable Energy",
      expertise: ["Solar Installation", "Energy Storage", "Grid Integration"],
      location: "Cairo, Egypt",
      rating: 4.9,
      projectsCompleted: 45,
      verified: true,
    },
    {
      name: "AquaTech Egypt",
      category: "Water Management",
      expertise: ["Desalination", "Water Recycling", "Treatment Systems"],
      location: "Alexandria, Egypt",
      rating: 4.8,
      projectsCompleted: 32,
      verified: true,
    },
    {
      name: "Misr El Kheir Foundation",
      category: "NGO Partner",
      expertise: ["Community Development", "Education", "Healthcare"],
      location: "Nationwide",
      rating: 5.0,
      projectsCompleted: 200,
      verified: true,
    },
    {
      name: "Flat6Labs Egypt",
      category: "Innovation Partner",
      expertise: ["Startup Incubation", "Mentorship", "Investment"],
      location: "Smart Village, Cairo",
      rating: 4.9,
      projectsCompleted: 150,
      verified: true,
    },
    {
      name: "INJAZ Egypt",
      category: "Training Partner",
      expertise: ["Youth Training", "Entrepreneurship", "Job Placement"],
      location: "Cairo, Egypt",
      rating: 4.8,
      projectsCompleted: 85,
      verified: true,
    },
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Verified Contractor Network</CardTitle>
        <p className="text-muted-foreground">
          Pre-vetted implementation partners for each recommendation
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contractors.map((contractor, index) => (
            <div key={index} className="border border-border/50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{contractor.name}</h4>
                      {contractor.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {contractor.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{contractor.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-3 w-3" />
                {contractor.location}
                <span className="text-border">•</span>
                {contractor.projectsCompleted} projects
              </div>

              <div className="flex flex-wrap gap-1">
                {contractor.expertise.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-primary">Axis Guarantee:</strong> All contractors in our network are 
            pre-vetted for quality, reliability, and impact measurement capabilities. We facilitate 
            introductions and handle contract negotiations on your behalf.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContractorNetwork;
