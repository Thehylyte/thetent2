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
} from "lucide-react";
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

export default function AdminRegistrations() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const fetchRegistrations = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/artist-registrations");

      if (!response.ok) {
        if (response.status === 404) {
          setError(
            "Admin API is currently unavailable due to deployment configuration. Please check the DEPLOYMENT_FIX.md guide or contact technical support. Registrations are being handled manually at jg@thetent.club",
          );
          return;
        }
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setRegistrations(data.registrations);
      } else {
        setError(
          "Failed to fetch registrations: " + (data.message || "Unknown error"),
        );
      }
    } catch (err) {
      console.error("Admin fetch error:", err);
      setError(
        "Error connecting to server. API endpoints may not be available in this deployment configuration.",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-tent-blue/5">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                alt="The Tent Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
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
              <Button
                onClick={fetchRegistrations}
                className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
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
              Artist Registrations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              View and manage all artist registration submissions
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-tent-purple" />
                <span className="font-medium">
                  {registrations.length} Total Registrations
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

          {!loading && !error && registrations.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                No Registrations Yet
              </h3>
              <p className="text-muted-foreground">
                Artist registrations will appear here once submitted.
              </p>
            </div>
          )}

          {!loading && !error && registrations.length > 0 && (
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
              alt="The Tent Logo"
              className="w-6 h-6"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
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
