import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Share2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Leaf, Users, Building2, Zap, TrendingUp, DollarSign, MapPin, Calendar, Target } from "lucide-react";

interface ReportContent {
  executiveSummary: {
    overview: string;
    keyMetrics: Array<{ label: string; value: string; period: string }>;
  };
  recommendations: {
    environmental: Recommendation[];
    community: Recommendation[];
    training: Recommendation[];
    innovation: Recommendation[];
  };
  budgetSummary: {
    totalBudget: number;
    currency: string;
    items: Array<{ category: string; amount: number; percentage: number }>;
  };
  timeline: {
    phases: Array<{ name: string; period: string; milestones: string[] }>;
  };
  brandingOpportunities: Array<{ title: string; description: string; impact: string }>;
}

interface Recommendation {
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

interface Report {
  id: string;
  title: string;
  content: ReportContent;
  created_at: string;
}

const RecommendationCard = ({ rec }: { rec: Recommendation }) => {
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800",
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-semibold text-lg text-foreground">{rec.title}</h4>
            <p className="text-sm text-muted-foreground">{rec.category}</p>
          </div>
          <Badge className={priorityColors[rec.priority]}>
            {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)} Priority
          </Badge>
        </div>

        <p className="text-muted-foreground mb-4">{rec.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{rec.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{rec.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{rec.beneficiaries}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span>{rec.impact}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <div>
            <span className="text-sm text-muted-foreground">Budget: </span>
            <span className="font-semibold text-primary">{rec.budget}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Partner: <span className="font-medium">{rec.contractor}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Report = () => {
  const { id } = useParams<{ id: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user && id) {
      fetchReport();
    }
  }, [user, id]);

  const fetchReport = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reports")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error || !data) {
      toast({
        title: "Report not found",
        description: "The requested report could not be loaded.",
        variant: "destructive",
      });
      navigate("/dashboard");
      return;
    }

    setReport(data as unknown as Report);
    setLoading(false);
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!report) {
    return null;
  }

  const content = report.content;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/dashboard">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Report Content */}
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="gradient-primary p-8 text-primary-foreground">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-sm font-medium opacity-90">Axis Sustainability Report</span>
              </div>
              <h1 className="text-3xl font-serif font-bold mb-2">{report.title}</h1>
              <p className="opacity-90">
                Generated on {new Date(report.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Executive Summary */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-primary">Executive Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {content.executiveSummary?.overview}
                  </p>

                  {content.executiveSummary?.keyMetrics && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {content.executiveSummary.keyMetrics.map((metric, index) => (
                        <div key={index} className="bg-muted/50 rounded-lg p-4 text-center">
                          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-secondary" />
                          <p className="text-2xl font-bold text-primary">{metric.value}</p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                          <p className="text-xs text-muted-foreground/70">{metric.period}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recommendations */}
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
                      {content.recommendations?.environmental?.map((rec, index) => (
                        <RecommendationCard key={index} rec={rec} />
                      ))}
                    </TabsContent>

                    <TabsContent value="community" className="space-y-4">
                      {content.recommendations?.community?.map((rec, index) => (
                        <RecommendationCard key={index} rec={rec} />
                      ))}
                    </TabsContent>

                    <TabsContent value="training" className="space-y-4">
                      {content.recommendations?.training?.map((rec, index) => (
                        <RecommendationCard key={index} rec={rec} />
                      ))}
                    </TabsContent>

                    <TabsContent value="innovation" className="space-y-4">
                      {content.recommendations?.innovation?.map((rec, index) => (
                        <RecommendationCard key={index} rec={rec} />
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Budget Summary */}
              {content.budgetSummary && (
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary">Budget Allocation Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total Recommended Investment</p>
                      <p className="text-3xl font-bold text-primary">
                        {formatCurrency(content.budgetSummary.totalBudget, content.budgetSummary.currency)}
                      </p>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>Allocation</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {content.budgetSummary.items?.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.category}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Progress value={item.percentage} className="h-2 w-24" />
                                <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right font-semibold">
                              {formatCurrency(item.amount, content.budgetSummary.currency)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}

              {/* Timeline */}
              {content.timeline?.phases && (
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary">Implementation Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {content.timeline.phases.map((phase, index) => (
                        <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:pb-0">
                          <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                          <h4 className="font-semibold text-lg">{phase.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{phase.period}</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {phase.milestones?.map((milestone, mIndex) => (
                              <li key={mIndex}>{milestone}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Branding Opportunities */}
              {content.brandingOpportunities && content.brandingOpportunities.length > 0 && (
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary">Branding & Communication Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {content.brandingOpportunities.map((opp, index) => (
                        <div key={index} className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-semibold mb-2">{opp.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{opp.description}</p>
                          <p className="text-sm">
                            <span className="text-muted-foreground">Impact: </span>
                            <span className="font-medium text-primary">{opp.impact}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Ready to Execute Your Sustainability Vision?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Connect with our partner network to start implementing these recommendations.
                </p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/contractors">Find Partners</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/request-report">Request New Report</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Report;
