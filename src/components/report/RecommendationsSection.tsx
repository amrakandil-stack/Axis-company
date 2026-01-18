import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecommendationCard from "./RecommendationCard";
import { Leaf, Users, Building2, Zap } from "lucide-react";

const RecommendationsSection = () => {
  const recommendations = {
    environmental: [
      {
        title: "Solar Power Installation - Factory Complex",
        category: "Renewable Energy",
        description: "Install 2.5MW solar panel system across the Cairo factory complex rooftops, reducing grid dependency by 40% and achieving significant carbon footprint reduction.",
        location: "10th of Ramadan City, Cairo",
        timeline: "Q2 2024 - Q4 2024",
        beneficiaries: "Factory operations",
        impact: "12,000 tons CO2/year",
        budget: "EGP 18,500,000",
        contractor: "SolarMisr Energy",
        priority: "high" as const,
      },
      {
        title: "Water Desalination & Recycling System",
        category: "Water Management",
        description: "Implement closed-loop water recycling system with desalination capability for manufacturing processes, reducing freshwater consumption by 60%.",
        location: "Alexandria Production Facility",
        timeline: "Q1 2024 - Q3 2024",
        beneficiaries: "Production operations",
        impact: "2.5M liters/month saved",
        budget: "EGP 8,200,000",
        contractor: "AquaTech Egypt",
        priority: "high" as const,
      },
      {
        title: "Fleet Electrification Program",
        category: "Transportation",
        description: "Convert 50% of delivery fleet to electric vehicles with charging infrastructure installation at distribution centers.",
        location: "Greater Cairo Region",
        timeline: "Q3 2024 - Q2 2025",
        beneficiaries: "Logistics operations",
        impact: "8,500 tons CO2/year",
        budget: "EGP 12,000,000",
        contractor: "EV Egypt Solutions",
        priority: "medium" as const,
      },
    ],
    community: [
      {
        title: "Rural Women Entrepreneurship Program",
        category: "Community Development",
        description: "Establish beauty and cosmetics micro-enterprise training centers in rural Upper Egypt, providing skills training and startup support for 500 women annually.",
        location: "Assiut & Sohag Governorates",
        timeline: "Q1 2024 - Ongoing",
        beneficiaries: "2,500 women (5 years)",
        impact: "500 new businesses/year",
        budget: "EGP 4,500,000/year",
        contractor: "Misr El Kheir Foundation",
        priority: "high" as const,
      },
      {
        title: "School Infrastructure Development",
        category: "Education",
        description: "Renovate and equip 15 public schools in underserved areas with modern facilities, science labs, and digital learning resources.",
        location: "Fayoum & Beni Suef",
        timeline: "Q2 2024 - Q4 2024",
        beneficiaries: "8,000+ students",
        impact: "15 schools upgraded",
        budget: "EGP 6,800,000",
        contractor: "Egyptian Food Bank",
        priority: "medium" as const,
      },
    ],
    training: [
      {
        title: "Youth Technical Skills Academy",
        category: "Workforce Development",
        description: "Launch comprehensive vocational training program in manufacturing, logistics, and digital skills for unemployed youth, with job placement support.",
        location: "Cairo, Alexandria, Mansoura",
        timeline: "Q1 2024 - Q4 2026",
        beneficiaries: "5,000 youth",
        impact: "70% employment rate",
        budget: "EGP 3,200,000/year",
        contractor: "INJAZ Egypt",
        priority: "high" as const,
      },
      {
        title: "Supplier Sustainability Certification",
        category: "Supply Chain",
        description: "Train and certify 200 local suppliers on sustainable manufacturing practices, environmental compliance, and ethical labor standards.",
        location: "Nationwide",
        timeline: "Q2 2024 - Q4 2025",
        beneficiaries: "200 suppliers",
        impact: "30% supply chain emissions cut",
        budget: "EGP 1,800,000",
        contractor: "Business Egypt Network",
        priority: "medium" as const,
      },
    ],
    innovation: [
      {
        title: "Green Startup Incubator",
        category: "Innovation",
        description: "Establish an innovation hub focused on sustainable beauty and packaging solutions, supporting 20 startups annually with funding, mentorship, and market access.",
        location: "Smart Village, Cairo",
        timeline: "Q3 2024 - Ongoing",
        beneficiaries: "60 startups (3 years)",
        impact: "20 green innovations/year",
        budget: "EGP 5,000,000/year",
        contractor: "Flat6Labs Egypt",
        priority: "medium" as const,
      },
    ],
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Strategic Recommendations</CardTitle>
        <p className="text-muted-foreground">
          Detailed execution plans aligned with your sustainability strategy
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="environmental" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="environmental" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden sm:inline">Environmental</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
            <TabsTrigger value="training" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Training</span>
            </TabsTrigger>
            <TabsTrigger value="innovation" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Innovation</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="environmental" className="space-y-4">
            {recommendations.environmental.map((rec, index) => (
              <RecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            {recommendations.community.map((rec, index) => (
              <RecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            {recommendations.training.map((rec, index) => (
              <RecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>

          <TabsContent value="innovation" className="space-y-4">
            {recommendations.innovation.map((rec, index) => (
              <RecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RecommendationsSection;
