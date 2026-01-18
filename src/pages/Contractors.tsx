import { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Star, CheckCircle, ExternalLink, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { supabase } from '@/integrations/supabase/client';

interface Contractor {
  id: string;
  name: string;
  description: string;
  type: string;
  location: string;
  rating: number;
  projects_completed: number;
  certifications: string[];
  contact_email: string;
  website: string;
  is_verified: boolean;
}

const contractorTypes = [
  { value: 'all', label: 'All Categories' },
  { value: 'renewable_energy', label: 'Renewable Energy' },
  { value: 'water_management', label: 'Water Management' },
  { value: 'waste_management', label: 'Waste Management' },
  { value: 'sustainable_agriculture', label: 'Sustainable Agriculture' },
  { value: 'green_building', label: 'Green Building' },
  { value: 'carbon_consulting', label: 'Carbon Consulting' },
  { value: 'ngo', label: 'NGO Partner' },
];

const sampleContractors: Contractor[] = [
  { id: '1', name: 'SolarTech Egypt', description: 'Leading provider of solar panel installations and renewable energy solutions for industrial facilities across Egypt.', type: 'renewable_energy', location: 'Cairo, Egypt', rating: 4.8, projects_completed: 45, certifications: ['ISO 14001', 'LEED Certified'], contact_email: 'info@solartech.eg', website: 'https://solartech.eg', is_verified: true },
  { id: '2', name: 'AquaSave Solutions', description: 'Specialists in water conservation systems, wastewater treatment, and sustainable water management practices.', type: 'water_management', location: 'Alexandria, Egypt', rating: 4.6, projects_completed: 32, certifications: ['ISO 9001', 'Water Stewardship'], contact_email: 'contact@aquasave.eg', website: 'https://aquasave.eg', is_verified: true },
  { id: '3', name: 'Green Build Co.', description: 'Sustainable construction and green building consultants offering eco-friendly design and materials.', type: 'green_building', location: 'Giza, Egypt', rating: 4.7, projects_completed: 28, certifications: ['LEED AP', 'BREEAM Certified'], contact_email: 'hello@greenbuild.eg', website: 'https://greenbuild.eg', is_verified: true },
  { id: '4', name: 'EcoWaste Management', description: 'Comprehensive waste management solutions including recycling programs and circular economy implementation.', type: 'waste_management', location: 'Cairo, Egypt', rating: 4.5, projects_completed: 56, certifications: ['ISO 14001', 'Zero Waste Certified'], contact_email: 'info@ecowaste.eg', website: 'https://ecowaste.eg', is_verified: true },
  { id: '5', name: 'Carbon Neutral Partners', description: 'Carbon footprint assessment, reduction strategies, and carbon offset programs for businesses.', type: 'carbon_consulting', location: 'Cairo, Egypt', rating: 4.9, projects_completed: 67, certifications: ['CDP Certified', 'GHG Protocol'], contact_email: 'consult@carbonneutral.eg', website: 'https://carbonneutral.eg', is_verified: true },
  { id: '6', name: 'Nile Valley NGO', description: 'Non-profit organization focused on community-based environmental initiatives and sustainable agriculture.', type: 'ngo', location: 'Luxor, Egypt', rating: 4.4, projects_completed: 89, certifications: ['UN Global Compact', 'B Corp'], contact_email: 'partner@nilevalley.org', website: 'https://nilevalley.org', is_verified: true },
];

const Contractors = () => {
  const [contractors, setContractors] = useState<Contractor[]>(sampleContractors);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContractors();
  }, []);

  const fetchContractors = async () => {
    setIsLoading(true);
    const { data } = await supabase.from('contractors').select('*').order('rating', { ascending: false });
    if (data && data.length > 0) setContractors(data as Contractor[]);
    setIsLoading(false);
  };

  const filteredContractors = contractors.filter((contractor) => {
    const matchesSearch = contractor.name.toLowerCase().includes(searchQuery.toLowerCase()) || contractor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || contractor.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeLabel = (type: string) => contractorTypes.find(t => t.value === type)?.label || type;
  const getTypeBadgeColor = (type: string) => {
    const colors: Record<string, string> = { renewable_energy: 'bg-yellow-100 text-yellow-800', water_management: 'bg-blue-100 text-blue-800', waste_management: 'bg-green-100 text-green-800', sustainable_agriculture: 'bg-emerald-100 text-emerald-800', green_building: 'bg-teal-100 text-teal-800', carbon_consulting: 'bg-gray-100 text-gray-800', ngo: 'bg-purple-100 text-purple-800' };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">Contractor Marketplace</h1>
          <p className="text-muted-foreground">Find verified sustainability partners to execute your initiatives</p>
        </div>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search contractors..." className="pl-10" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-64"><Filter className="h-4 w-4 mr-2" /><SelectValue placeholder="Filter by category" /></SelectTrigger>
                <SelectContent>
                  {contractorTypes.map((type) => (<SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground mb-4">Showing {filteredContractors.length} contractors</p>
        {isLoading ? (
          <div className="text-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div></div>
        ) : filteredContractors.length === 0 ? (
          <Card><CardContent className="py-12 text-center"><Building2 className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" /><p className="text-muted-foreground">No contractors found</p></CardContent></Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContractors.map((contractor) => (
              <Card key={contractor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">{contractor.name}{contractor.is_verified && <CheckCircle className="h-4 w-4 text-primary" />}</CardTitle>
                      <Badge className={getTypeBadgeColor(contractor.type)}>{getTypeLabel(contractor.type)}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500"><Star className="h-4 w-4 fill-current" /><span className="text-sm font-medium">{contractor.rating}</span></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">{contractor.description}</CardDescription>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{contractor.location}</div>
                    <div className="text-sm"><span className="font-medium">{contractor.projects_completed}</span> projects completed</div>
                    {contractor.certifications?.length > 0 && <div className="flex flex-wrap gap-1">{contractor.certifications.slice(0, 2).map((cert, i) => <Badge key={i} variant="outline" className="text-xs">{cert}</Badge>)}</div>}
                  </div>
                  <div className="mt-4 pt-4 border-t flex gap-2">
                    <Button size="sm" className="flex-1">Contact</Button>
                    {contractor.website && <Button size="sm" variant="outline" asChild><a href={contractor.website} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /></a></Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contractors;
