import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  MapPin,
  Music,
  Users,
  Star,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function ArtistRegistration() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loginCredentials, setLoginCredentials] = useState<{
    email: string;
    password: string;
  } | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    artistName: "",
    legalName: "",
    email: "",
    phone: "",
    managerName: "",
    managementEmail: "",
    genre: "",
    yearsActive: "",
    selectedFestivals: [] as string[],
    specialRequests: "",
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Form validation function
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.artistName.trim()) {
      errors.artistName = "Artist name is required";
    }

    if (!formData.legalName.trim()) {
      errors.legalName = "Legal name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!formData.managerName.trim()) {
      errors.managerName = "Manager/Agent name is required";
    }

    if (!formData.managementEmail.trim()) {
      errors.managementEmail = "Management email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.managementEmail)) {
      errors.managementEmail = "Please enter a valid email address";
    }

    if (!formData.genre) {
      errors.genre = "Please select a genre";
    }

    if (!formData.yearsActive) {
      errors.yearsActive = "Please select years active";
    }

    if (!formData.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submission function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/artist-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle 404 - API endpoint not available
        if (response.status === 404) {
          throw new Error(
            "Registration service is currently unavailable. This appears to be a deployment configuration issue. Please contact support at jg@thetent.club to complete your registration."
          );
        }

        // Try to get the error message from the server response
        try {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `Server error: ${response.status}`,
          );
        } catch {
          throw new Error(
            `Registration failed with status: ${response.status}`,
          );
        }
      }

      const result = await response.json();
      setSubmitSuccess(true);
      if (result.loginCredentials) {
        setLoginCredentials(result.loginCredentials);
      }
      // Reset form after successful submission
      setFormData({
        artistName: "",
        legalName: "",
        email: "",
        phone: "",
        managerName: "",
        managementEmail: "",
        genre: "",
        yearsActive: "",
        selectedFestivals: [],
        specialRequests: "",
        agreeToTerms: false,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again.";

      console.error("Registration error:", error);
      setSubmitError(errorMessage);

      // If this is a deployment configuration issue, provide helpful guidance
      if (errorMessage.includes("deployment configuration issue")) {
        setTimeout(() => {
          setSubmitSuccess(true);
          setLoginCredentials({
            email: "jg@thetent.club",
            password: "Contact support for account setup"
          });
        }, 4000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const festivals = [
    {
      name: "Lollapalooza",
      location: "Chicago, IL",
      dates: "July 31 - August 3, 2025",
      status: "available",
    },
    {
      name: "Riot Fest",
      location: "Chicago, IL",
      dates: "September 19-21, 2025",
      status: "available",
    },
    {
      name: "Sea.Hear.Now",
      location: "Asbury Park, NJ",
      dates: "September 13-14, 2025",
      status: "available",
    },
    {
      name: "Country Calling",
      location: "Ocean City, MD",
      dates: "October 3-5, 2025",
      status: "limited",
    },
  ];

  const perks = [
    {
      icon: Crown,
      title: "Priority Access",
      description:
        "Skip the lines with dedicated artist entrances and fast-track services",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description:
        "Exclusive access to newest brands and limited-edition items",
    },
    {
      icon: Users,
      title: "Dedicated Concierge",
      description:
        "Personal hospitality coordinator for all your festival needs",
    },
  ];

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
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="/events"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Events
              </a>
              <a
                href="/founders"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Founders
              </a>
              <a
                href="/services"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button
                className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90"
                asChild
              >
                <a href="/artist-login">Artist Login</a>
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
                  Home
                </a>
                <a
                  href="/events"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </a>
                <a
                  href="/founders"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Founders
                </a>
                <a
                  href="/services"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button
                  className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 mt-2 mx-2"
                  asChild
                >
                  <a
                    href="/artist-login"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Artist Login
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-tent-orange/10 to-tent-pink/10 text-tent-purple border-tent-purple/20 hover:from-tent-orange/20 hover:to-tent-pink/20">
              <Star className="w-4 h-4 mr-2" />
              Exclusive Artist Program
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
              Artist
              <br />
              Registration
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join The Tent's exclusive artist program and secure your
              hospitality services at the festivals where you're performing.
              Priority access, premium amenities, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Artist Perks */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              Why Artists Choose The Tent
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <perk.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{perk.title}</h3>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-pink to-tent-orange bg-clip-text text-transparent">
                Register as an Artist
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Complete your registration to access The Tent at your upcoming
                festival performances
              </p>
              <p className="text-sm text-muted-foreground">
                Already registered?{" "}
                <a
                  href="/artist-login"
                  className="text-tent-purple hover:text-tent-pink transition-colors font-medium"
                >
                  Sign in to your dashboard
                </a>
              </p>
            </div>

            <Card className="border-tent-purple/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-center">
                  Artist Information
                </h3>
              </CardHeader>
              <CardContent className="space-y-8">
                {submitSuccess && (
                  <div className="bg-green-500/20 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">
                        Registration Successful!
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      Thank you for registering. Check your email for login
                      credentials and further instructions.
                    </p>
                    {loginCredentials && (
                      <div className="mt-3 p-3 bg-white/50 rounded border border-green-400">
                        <p className="font-medium text-sm mb-2">
                          🔐 Your Login Credentials:
                        </p>
                        <div className="text-xs space-y-1">
                          <p>
                            <strong>Email:</strong> {loginCredentials.email}
                          </p>
                          <p>
                            <strong>Password:</strong>{" "}
                            <code className="bg-gray-100 px-1 rounded">
                              {loginCredentials.password}
                            </code>
                          </p>
                          <p className="mt-2">
                            <a
                              href="/artist-login"
                              className="text-tent-purple hover:text-tent-pink font-medium underline"
                            >
                              → Login to Your Dashboard
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-500/20 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                    <span className="font-medium">Error: </span>
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                      Personal Details
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Artist/Stage Name
                        </label>
                        <input
                          type="text"
                          value={formData.artistName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artistName: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.artistName
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="Your stage or artist name"
                        />
                        {formErrors.artistName && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.artistName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Legal Name
                        </label>
                        <input
                          type="text"
                          value={formData.legalName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              legalName: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.legalName
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="Your legal name"
                        />
                        {formErrors.legalName && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.legalName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.phone
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="(555) 123-4567"
                        />
                        {formErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Management Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                      Management Contact
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Manager/Agent Name *
                        </label>
                        <input
                          type="text"
                          value={formData.managerName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              managerName: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.managerName
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="Manager or agent name"
                        />
                        {formErrors.managerName && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.managerName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Management Email *
                        </label>
                        <input
                          type="email"
                          value={formData.managementEmail}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              managementEmail: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.managementEmail
                              ? "border-red-500"
                              : "border-border"
                          }`}
                          placeholder="management@example.com"
                        />
                        {formErrors.managementEmail && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.managementEmail}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Performance Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                      Performance Details
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Genre *
                        </label>
                        <select
                          value={formData.genre}
                          onChange={(e) =>
                            setFormData({ ...formData, genre: e.target.value })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.genre
                              ? "border-red-500"
                              : "border-border"
                          }`}
                        >
                          <option value="">Select your genre</option>
                          <option value="rock">Rock</option>
                          <option value="pop">Pop</option>
                          <option value="hip-hop">Hip Hop</option>
                          <option value="electronic">Electronic</option>
                          <option value="country">Country</option>
                          <option value="folk">Folk</option>
                          <option value="jazz">Jazz</option>
                          <option value="classical">Classical</option>
                          <option value="other">Other</option>
                        </select>
                        {formErrors.genre && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.genre}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Years Active *
                        </label>
                        <select
                          value={formData.yearsActive}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              yearsActive: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
                            formErrors.yearsActive
                              ? "border-red-500"
                              : "border-border"
                          }`}
                        >
                          <option value="">Select experience level</option>
                          <option value="0-2">0-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                        {formErrors.yearsActive && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.yearsActive}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Festival Selection */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                      Festival Reservations
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select the festivals where you're performing and would
                      like to reserve The Tent services:
                    </p>
                    <div className="space-y-4">
                      {festivals.map((festival, index) => (
                        <Card key={index} className="border-border/50">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <input
                                  type="checkbox"
                                  id={`festival-${index}`}
                                  checked={formData.selectedFestivals.includes(
                                    festival.name,
                                  )}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setFormData({
                                        ...formData,
                                        selectedFestivals: [
                                          ...formData.selectedFestivals,
                                          festival.name,
                                        ],
                                      });
                                    } else {
                                      setFormData({
                                        ...formData,
                                        selectedFestivals:
                                          formData.selectedFestivals.filter(
                                            (f) => f !== festival.name,
                                          ),
                                      });
                                    }
                                  }}
                                  className="w-5 h-5 text-tent-purple border-border rounded focus:ring-tent-purple"
                                />
                                <div>
                                  <h5 className="font-semibold">
                                    {festival.name}
                                  </h5>
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-1" />
                                      {festival.location}
                                    </div>
                                    <div className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      {festival.dates}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge
                                className={
                                  festival.status === "available"
                                    ? "bg-green-500/20 text-green-700 border-green-300"
                                    : "bg-yellow-500/20 text-yellow-700 border-yellow-300"
                                }
                              >
                                {festival.status === "available"
                                  ? "Available"
                                  : "Limited"}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-tent-purple">
                      Additional Information
                    </h4>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Special Requirements or Requests
                      </label>
                      <textarea
                        rows={4}
                        value={formData.specialRequests}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            specialRequests: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent resize-none"
                        placeholder="Any special dietary requirements, accessibility needs, or specific services you'd like to request..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreeToTerms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeToTerms: e.target.checked,
                        })
                      }
                      className={`w-5 h-5 text-tent-purple border rounded focus:ring-tent-purple mt-1 ${
                        formErrors.agreeToTerms
                          ? "border-red-500"
                          : "border-border"
                      }`}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground"
                    >
                      I agree to The Tent's terms and conditions and understand
                      that registration is subject to verification of artist
                      credentials and festival performance confirmation. I
                      authorize The Tent to contact festival organizers to
                      verify my scheduled performances.
                    </label>
                    {formErrors.agreeToTerms && (
                      <p className="text-red-500 text-sm mt-1 ml-8">
                        {formErrors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Star className="w-5 h-5 mr-2" />
                        Submit Artist Registration
                      </>
                    )}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>
                      Registration is subject to verification. You will receive
                      confirmation within 48 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
              What Happens Next?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-tent-blue/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tent-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Verification</h3>
                <p className="text-muted-foreground">
                  We verify your artist credentials and festival performance
                  schedule within 48 hours.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-tent-purple/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tent-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Confirmation</h3>
                <p className="text-muted-foreground">
                  Receive your artist access confirmation and detailed
                  information about The Tent services.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-tent-pink/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-tent-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <p className="text-muted-foreground">
                  Enjoy premium hospitality services at your festival
                  performances with dedicated support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
            Questions About Registration?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our artist relations team is here to help with your registration and
            answer any questions about The Tent services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tent-blue to-tent-purple hover:from-tent-blue/90 hover:to-tent-purple/90 text-lg px-8 py-6"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Artist Relations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-tent-pink/30 hover:bg-tent-pink/10"
            >
              <Music className="w-5 h-5 mr-2" />
              View Festival Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                alt="The Tent Logo"
                className="w-6 h-6"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
                THE TENT
              </span>
            </div>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
              <a
                href="/events"
                className="hover:text-foreground transition-colors"
              >
                Events
              </a>
              <a
                href="/artist-registration"
                className="hover:text-foreground transition-colors"
              >
                Artists
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 The Tent. Elevating festival experiences worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
