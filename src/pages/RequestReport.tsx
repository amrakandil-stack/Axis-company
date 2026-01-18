import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Building2, Users, Target, Wallet, Clock, FileText, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const reportRequestSchema = z.object({
  company_name: z.string().min(2, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  employee_count: z.string().optional(),
  annual_revenue: z.string().optional(),
  current_sustainability_initiatives: z.string().optional(),
  goals: z.string().min(10, 'Please describe your sustainability goals'),
  budget_range: z.string().optional(),
  timeline: z.string().optional(),
  additional_notes: z.string().optional(),
});

type FormData = z.infer<typeof reportRequestSchema>;

const industries = [
  'Manufacturing',
  'Oil & Gas',
  'Construction',
  'Agriculture',
  'Hospitality',
  'Retail',
  'Healthcare',
  'Technology',
  'Transportation',
  'Real Estate',
  'Financial Services',
  'Food & Beverage',
  'Other',
];

const employeeCounts = [
  '1-50',
  '51-200',
  '201-500',
  '501-1000',
  '1001-5000',
  '5000+',
];

const budgetRanges = [
  'Under EGP 500,000',
  'EGP 500,000 - 1,000,000',
  'EGP 1,000,000 - 5,000,000',
  'EGP 5,000,000 - 10,000,000',
  'EGP 10,000,000+',
  'To be determined',
];

const timelines = [
  'Immediate (1-3 months)',
  'Short-term (3-6 months)',
  'Medium-term (6-12 months)',
  'Long-term (12+ months)',
  'Flexible',
];

const RequestReport = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading } = useAuth();

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const form = useForm<FormData>({
    resolver: zodResolver(reportRequestSchema),
    defaultValues: {
      company_name: '',
      industry: '',
      employee_count: '',
      annual_revenue: '',
      current_sustainability_initiatives: '',
      goals: '',
      budget_range: '',
      timeline: '',
      additional_notes: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to submit a report request.',
        variant: 'destructive',
      });
      navigate('/auth');
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('report_requests').insert({
      user_id: user.id,
      ...data,
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: 'Submission failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setIsSubmitted(true);
      toast({
        title: 'Request submitted!',
        description: 'We will review your information and get back to you within 48 hours.',
      });
    }
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await form.trigger(['company_name', 'industry', 'employee_count']);
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await form.trigger(['goals', 'current_sustainability_initiatives']);
      if (isValid) setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-muted/30">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <Card className="max-w-xl mx-auto text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Request Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in Axis. Our team will review your information and 
                contact you within 48 hours with a customized sustainability roadmap.
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={() => navigate('/dashboard')}>
                  Go to Dashboard
                </Button>
                <Button variant="outline" onClick={() => navigate('/sample-report')}>
                  View Sample Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">Request Your Sustainability Report</h1>
            <p className="text-muted-foreground">Tell us about your company and goals to receive a customized execution plan</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Step {step} of {totalSteps}</span>
              <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {step === 1 && <><Building2 className="h-5 w-5" /> Company Information</>}
                {step === 2 && <><Target className="h-5 w-5" /> Sustainability Goals</>}
                {step === 3 && <><Wallet className="h-5 w-5" /> Budget & Timeline</>}
              </CardTitle>
              <CardDescription>
                {step === 1 && 'Tell us about your organization'}
                {step === 2 && 'What sustainability outcomes are you looking to achieve?'}
                {step === 3 && 'Help us understand your project parameters'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Company Information */}
                  {step === 1 && (
                    <>
                      <FormField
                        control={form.control}
                        name="company_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Ltd." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry}>
                                    {industry}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="employee_count"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Employees</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {employeeCounts.map((count) => (
                                  <SelectItem key={count} value={count}>
                                    {count}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="annual_revenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Annual Revenue (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., EGP 50,000,000" {...field} />
                            </FormControl>
                            <FormDescription>This helps us tailor recommendations to your scale</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Step 2: Sustainability Goals */}
                  {step === 2 && (
                    <>
                      <FormField
                        control={form.control}
                        name="current_sustainability_initiatives"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Sustainability Initiatives</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe any existing sustainability programs, certifications, or initiatives..."
                                className="min-h-24"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>Leave blank if you're just starting your sustainability journey</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sustainability Goals *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="What outcomes are you looking to achieve? E.g., reduce carbon emissions by 30%, achieve ISO 14001 certification, improve ESG scores..."
                                className="min-h-32"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Step 3: Budget & Timeline */}
                  {step === 3 && (
                    <>
                      <FormField
                        control={form.control}
                        name="budget_range"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Timeline</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timelines.map((timeline) => (
                                  <SelectItem key={timeline} value={timeline}>
                                    {timeline}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="additional_notes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Notes</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any other information you'd like to share..."
                                className="min-h-24"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    ) : (
                      <div />
                    )}
                    
                    {step < totalSteps ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                        <FileText className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestReport;
