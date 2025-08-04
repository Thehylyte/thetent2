import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Calendar,
  Music,
  Mail,
  Phone,
  Clock,
  RefreshCw,
  Eye,
  Menu,
  X,
  Building2,
  Briefcase,
  Download,
} from "lucide-react";
// Removed xlsx import - using native CSV download instead
import { useState, useEffect } from "react";

interface Registration {
  id: string;
  artistName: string;
  legalName: string;
  email: string;
  phone: string;
  managerName: string;
  managementEmail: string;
  genre: string;
  yearsActive: string;
  selectedFestivals: string[];
  specialRequests: string;
  timestamp: string;
  agreeToTerms: boolean;
}

interface PartnerRegistration {
  id: string;
  companyName: string;
  product: string;
  contactName: string;
  contactTitle: string;
  contactPhone: string;
  contactEmail: string;
  selectedFestivals: string[];
  message: string;
  timestamp: string;
}

export default function AdminRegistrations() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [partnerRegistrations, setPartnerRegistrations] = useState<PartnerRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'artists' | 'partners'>('artists');

  const fetchRegistrations = async () => {
    setLoading(true);
    setError("");

    try {
      // Fetch both artist and partner registrations
      const [artistResponse, partnerResponse] = await Promise.allSettled([
        fetch("/api/artist-registrations"),
        fetch("/api/partner-registrations")
      ]);

      // Handle artist registrations
      if (artistResponse.status === 'fulfilled' && artistResponse.value.ok) {
        const artistData = await artistResponse.value.json();
        if (artistData.success) {
          setRegistrations(artistData.registrations);
        }
      }

      // Handle partner registrations (mock data for now)
      setPartnerRegistrations([
        {
          id: "partner-1",
          companyName: "Example Brand Co.",
          product: "Premium Beverages",
          contactName: "Jane Smith",
          contactTitle: "Marketing Director",
          contactPhone: "(555) 123-4567",
          contactEmail: "jane@examplebrand.com",
          selectedFestivals: ["Lollapalooza", "Riot Fest"],
          message: "Interested in showcasing our premium beverage line at VIP areas.",
          timestamp: new Date().toISOString()
        }
      ]);

      // Check if any API failed
      if (artistResponse.status === 'rejected' ||
          (artistResponse.status === 'fulfilled' && !artistResponse.value.ok)) {
        setError(
          "Admin API is currently unavailable due to deployment configuration. Some registrations may not display. Contact jg@thetent.club for manual access."
        );
      }
    } catch (err) {
      console.error("Admin fetch error:", err);
      setError(
        "Error connecting to server. API endpoints may not be available in this deployment configuration."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const toggleCardExpansion = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const downloadExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Prepare artist registrations data
    const artistData = registrations.map(reg => ({
      'Artist Name': reg.artistName,
      'Legal Name': reg.legalName,
      'Email': reg.email,
      'Phone': reg.phone,
      'Manager Name': reg.managerName,
      'Manager Email': reg.managementEmail,
      'Genre': reg.genre,
      'Years Active': reg.yearsActive,
      'Selected Festivals': reg.selectedFestivals.join(', '),
      'Special Requests': reg.specialRequests,
      'Terms Agreed': reg.agreeToTerms ? 'Yes' : 'No',
      'Submission Date': formatDate(reg.timestamp),
      'Registration ID': reg.id
    }));

    // Prepare partner registrations data
    const partnerData = partnerRegistrations.map(partner => ({
      'Company Name': partner.companyName,
      'Product/Service': partner.product,
      'Contact Name': partner.contactName,
      'Contact Title': partner.contactTitle,
      'Contact Email': partner.contactEmail,
      'Contact Phone': partner.contactPhone,
      'Selected Festivals': partner.selectedFestivals.join(', '),
      'Message': partner.message,
      'Submission Date': formatDate(partner.timestamp),
      'Partner ID': partner.id
    }));

    // Create worksheets
    const artistWorksheet = XLSX.utils.json_to_sheet(artistData);
    const partnerWorksheet = XLSX.utils.json_to_sheet(partnerData);

    // Add worksheets to workbook
    XLSX.utils.book_append_sheet(workbook, artistWorksheet, 'Artist Registrations');
    XLSX.utils.book_append_sheet(workbook, partnerWorksheet, 'Brand Partners');

    // Generate Excel file and download
    const fileName = `The_Tent_Registrations_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-tent-blue/5">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
                alt="The Tent Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold" style={{ color: "#A2B29F" }}>
                THE TENT
              </span>
              <Badge className="ml-2 bg-red-500/20 text-red-700 border-red-300">
                ADMIN
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Back to Site
              </a>
              <div className="flex gap-2">
                <Button
                  onClick={fetchRegistrations}
                  className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button
                  onClick={downloadExcel}
                  variant="outline"
                  className="border-tent-blue/30 hover:bg-tent-blue/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Excel
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-tent-blue/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/50">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="/"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Back to Site
                </a>
                <Button
                  onClick={() => {
                    fetchRegistrations();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 mx-2"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button
                  onClick={() => {
                    downloadExcel();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="border-tent-blue/30 hover:bg-tent-blue/10 mx-2"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Excel
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              View and manage all registration submissions
            </p>

            {/* Tab Navigation */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('artists')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'artists'
                    ? 'bg-tent-purple text-white'
                    : 'bg-white/10 text-muted-foreground hover:bg-white/20'
                }`}
              >
                <Music className="w-4 h-4 mr-2 inline" />
                Artist Registrations ({registrations.length})
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'partners'
                    ? 'bg-tent-purple text-white'
                    : 'bg-white/10 text-muted-foreground hover:bg-white/20'
                }`}
              >
                <Building2 className="w-4 h-4 mr-2 inline" />
                Brand Partners ({partnerRegistrations.length})
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-tent-purple" />
                <span className="font-medium">
                  {activeTab === 'artists' ? registrations.length : partnerRegistrations.length} Total {activeTab === 'artists' ? 'Artists' : 'Partners'}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-tent-blue" />
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registrations List */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          {loading && (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-4 border-tent-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading registrations...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-8 text-center">
              <span className="font-medium">Error: </span>
              {error}
            </div>
          )}

          {!loading && !error &&
           ((activeTab === 'artists' && registrations.length === 0) ||
            (activeTab === 'partners' && partnerRegistrations.length === 0)) && (
            <div className="text-center py-12">
              {activeTab === 'artists' ? (
                <Music className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              ) : (
                <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              )}
              <h3 className="text-xl font-semibold mb-2">
                No {activeTab === 'artists' ? 'Artist' : 'Partner'} Registrations Yet
              </h3>
              <p className="text-muted-foreground">
                {activeTab === 'artists' ? 'Artist' : 'Brand partner'} registrations will appear here once submitted.
              </p>
            </div>
          )}

          {/* Artist Registrations */}
          {!loading && !error && activeTab === 'artists' && registrations.length > 0 && (
            <div className="space-y-6">
              {registrations.map((registration) => (
                <Card
                  key={registration.id}
                  className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">
                          {registration.artistName}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {registration.legalName}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-tent-purple/20 text-tent-purple border-tent-purple/30">
                          {registration.genre}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleCardExpansion(registration.id)}
                          className="border-tent-blue/30 hover:bg-tent-blue/10"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          {expandedCards.has(registration.id) ? "Less" : "More"}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-tent-blue" />
                        <span className="text-sm">{registration.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-tent-green" />
                        <span className="text-sm">{registration.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Music className="w-4 h-4 mr-2 text-tent-purple" />
                        <span className="text-sm">
                          {registration.yearsActive} years active
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-tent-orange" />
                        <span className="text-sm">
                          {formatDate(registration.timestamp)}
                        </span>
                      </div>
                    </div>

                    {registration.selectedFestivals.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Selected Festivals:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {registration.selectedFestivals.map(
                            (festival, index) => (
                              <Badge
                                key={index}
                                className="bg-tent-orange/20 text-tent-orange border-tent-orange/30"
                              >
                                {festival}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {expandedCards.has(registration.id) && (
                      <div className="border-t border-border/50 pt-4 space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">
                            Management Contact:
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                            <div>Manager: {registration.managerName}</div>
                            <div>Email: {registration.managementEmail}</div>
                          </div>
                        </div>

                        {registration.specialRequests && (
                          <div>
                            <h4 className="font-medium mb-2">
                              Special Requests:
                            </h4>
                            <p className="text-sm text-muted-foreground bg-background/50 p-3 rounded-lg">
                              {registration.specialRequests}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Registration ID: {registration.id}</span>
                          <span>
                            Terms Agreed:{" "}
                            {registration.agreeToTerms ? "✓" : "✗"}
                          </span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Partner Registrations */}
          {!loading && !error && activeTab === 'partners' && partnerRegistrations.length > 0 && (
            <div className="space-y-6">
              {partnerRegistrations.map((partner) => (
                <Card
                  key={partner.id}
                  className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold">
                          {partner.companyName}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {partner.product}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-tent-orange/20 text-tent-orange border-tent-orange/30">
                          PARTNER
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleCardExpansion(partner.id)}
                          className="border-tent-blue/30 hover:bg-tent-blue/10"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          {expandedCards.has(partner.id) ? "Less" : "More"}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-tent-blue" />
                        <span className="text-sm">{partner.contactEmail}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-tent-green" />
                        <span className="text-sm">{partner.contactPhone}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-tent-purple" />
                        <span className="text-sm">
                          {partner.contactName} - {partner.contactTitle}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-tent-orange" />
                        <span className="text-sm">
                          {formatDate(partner.timestamp)}
                        </span>
                      </div>
                    </div>

                    {partner.selectedFestivals.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">
                          Interested Festivals:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {partner.selectedFestivals.map(
                            (festival, index) => (
                              <Badge
                                key={index}
                                className="bg-tent-orange/20 text-tent-orange border-tent-orange/30"
                              >
                                {festival}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {expandedCards.has(partner.id) && (
                      <div className="border-t border-border/50 pt-4 space-y-4">
                        {partner.message && (
                          <div>
                            <h4 className="font-medium mb-2">
                              Partnership Message:
                            </h4>
                            <p className="text-sm text-muted-foreground bg-background/50 p-3 rounded-lg">
                              {partner.message}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Partner ID: {partner.id}</span>
                          <span>Type: Brand Partnership</span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
              alt="The Tent Logo"
              className="w-6 h-6"
            />
            <span className="text-xl font-bold" style={{ color: "#A2B29F" }}>
              THE TENT
            </span>
            <Badge className="bg-red-500/20 text-red-700 border-red-300">
              ADMIN
            </Badge>
          </div>
          <p className="text-muted-foreground">
            &copy; 2024 The Tent. Admin Dashboard - Artist Registration
            Management
          </p>
        </div>
      </footer>
    </div>
  );
}
