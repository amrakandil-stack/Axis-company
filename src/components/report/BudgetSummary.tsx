import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const BudgetSummary = () => {
  const budgetItems = [
    { category: "Renewable Energy", amount: 18500000, percentage: 38 },
    { category: "Water Management", amount: 8200000, percentage: 17 },
    { category: "Fleet Electrification", amount: 12000000, percentage: 25 },
    { category: "Community Development", amount: 4500000, percentage: 9 },
    { category: "Education & Training", amount: 3200000, percentage: 7 },
    { category: "Innovation Hub", amount: 2100000, percentage: 4 },
  ];

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-primary">Budget Allocation Summary</CardTitle>
        <p className="text-muted-foreground">
          Estimated investment breakdown by initiative category
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-6 p-4 bg-primary/5 rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Total Recommended Investment (Year 1)</p>
          <p className="text-3xl font-bold text-primary">{formatCurrency(totalBudget)}</p>
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
            {budgetItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Progress value={item.percentage} className="h-2 w-24" />
                    <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {formatCurrency(item.amount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Payment Structure</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 30% upfront upon project approval</li>
            <li>• 40% at project midpoint milestones</li>
            <li>• 30% upon completion and impact verification</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetSummary;
