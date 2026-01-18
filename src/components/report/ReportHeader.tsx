import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, Target } from "lucide-react";

interface ReportHeaderProps {
  companyName: string;
  reportDate: string;
  reportId: string;
}

const ReportHeader = ({ companyName, reportDate, reportId }: ReportHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-t-xl">
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-0">
            Sample Report Preview
          </Badge>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Sustainability Execution Report
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Strategic Recommendations & Implementation Roadmap
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-2xl font-serif font-bold">AXIS</p>
          <p className="text-sm text-primary-foreground/70">Sustainability Partners</p>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
          <Building2 className="h-5 w-5" />
          <div>
            <p className="text-xs text-primary-foreground/70">Prepared For</p>
            <p className="font-semibold">{companyName}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
          <Calendar className="h-5 w-5" />
          <div>
            <p className="text-xs text-primary-foreground/70">Report Date</p>
            <p className="font-semibold">{reportDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
          <Target className="h-5 w-5" />
          <div>
            <p className="text-xs text-primary-foreground/70">Report ID</p>
            <p className="font-semibold">{reportId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
