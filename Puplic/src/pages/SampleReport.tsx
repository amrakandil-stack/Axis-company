import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReportHeader from "@/components/report/ReportHeader";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import RecommendationsSection from "@/components/report/RecommendationsSection";
import BudgetSummary from "@/components/report/BudgetSummary";
import BrandingPlan from "@/components/report/BrandingPlan";
import ImpactTimeline from "@/components/report/ImpactTimeline";
import ContractorNetwork from "@/components/report/ContractorNetwork";
import { Button } from "@/components/ui/button";
import { Download, Share2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SampleReport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
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
            <ReportHeader 
              companyName="L'Oréal Egypt"
              reportDate="January 15, 2024"
              reportId="AXIS-2024-001"
            />
            
            <div className="p-6 md:p-8 space-y-8">
              <ExecutiveSummary />
              <RecommendationsSection />
              <BudgetSummary />
              <ImpactTimeline />
              <ContractorNetwork />
              <BrandingPlan />

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Ready to Execute Your Sustainability Vision?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This sample report demonstrates the depth and actionability of Axis reports. 
                  Contact us to generate a customized execution plan for your organization.
                </p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Request Your Report
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Consultation
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

export default SampleReport;
