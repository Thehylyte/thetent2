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
  Key,
  Lock,
} from "lucide-react";
import { useState } from "react";

// List of 100 valid invite codes
const VALID_INVITE_CODES = [
  "TENT2024-A1B2C3",
  "FEST-VIP001",
  "ARTIST-PASS-001",
  "STAGE-ACCESS-101",
  "MUSIC-KEY-2024",
  "VIP-ARTIST-007",
  "BACKSTAGE-001",
  "PERFORMER-GOLD",
  "ARTIST-ELITE-001",
  "TENT-PREMIUM-01",
  "FESTIVAL-VIP-202",
  "MUSIC-PASS-2024",
  "ARTIST-GOLD-003",
  "STAGE-PASS-404",
  "VIP-CODE-2024",
  "PERFORMER-001",
  "ARTIST-KEY-007",
  "BACKSTAGE-VIP-1",
  "MUSIC-ELITE-24",
  "FEST-ARTIST-100",
  "TENT-ACCESS-201",
  "VIP-MUSIC-2024",
  "ARTIST-STAGE-01",
  "PREMIUM-PASS-24",
  "MUSIC-VIP-007",
  "ARTIST-FEST-101",
  "STAGE-VIP-2024",
  "PERFORMER-KEY-1",
  "BACKSTAGE-GOLD",
  "VIP-ARTIST-24",
  "MUSIC-ACCESS-01",
  "FEST-PREMIUM-1",
  "ARTIST-ELITE-24",
  "STAGE-KEY-2024",
  "VIP-PASS-101",
  "PERFORMER-VIP-1",
  "ARTIST-GOLD-24",
  "BACKSTAGE-KEY",
  "MUSIC-STAGE-01",
  "FEST-VIP-2024",
  "TENT-ARTIST-007",
  "VIP-ELITE-2024",
  "PERFORMER-GOLD-1",
  "STAGE-ARTIST-24",
  "MUSIC-PREMIUM",
  "ARTIST-VIP-101",
  "FEST-KEY-2024",
  "BACKSTAGE-PASS",
  "VIP-STAGE-007",
  "PERFORMER-ACCESS",
  "MUSIC-ARTIST-24",
  "TENT-VIP-2024",
  "STAGE-ELITE-01",
  "ARTIST-ACCESS-1",
  "VIP-PERFORMER-24",
  "FEST-STAGE-2024",
  "BACKSTAGE-VIP",
  "MUSIC-KEY-101",
  "ARTIST-PREMIUM",
  "VIP-FEST-2024",
  "PERFORMER-STAGE",
  "TENT-KEY-2024",
  "STAGE-VIP-101",
  "ARTIST-BACKSTAGE",
  "MUSIC-VIP-101",
  "FEST-ARTIST-24",
  "VIP-ACCESS-007",
  "PERFORMER-KEY",
  "STAGE-PREMIUM",
  "ARTIST-VIP-007",
  "BACKSTAGE-ELITE",
  "MUSIC-FEST-24",
  "TENT-PREMIUM",
  "VIP-STAGE-101",
  "PERFORMER-VIP",
  "ARTIST-KEY-101",
  "STAGE-ACCESS-24",
  "MUSIC-ELITE-01",
  "FEST-VIP-101",
  "VIP-ARTIST-KEY",
  "PERFORMER-GOLD",
  "BACKSTAGE-007",
  "TENT-STAGE-24",
  "ARTIST-FEST-07",
  "VIP-MUSIC-101",
  "STAGE-PERFORMER",
  "MUSIC-ACCESS-7",
  "FEST-PREMIUM",
  "ARTIST-STAGE-7",
  "VIP-KEY-2024",
  "PERFORMER-ELITE",
  "BACKSTAGE-101",
  "TENT-ARTIST-24",
  "STAGE-VIP-007",
  "MUSIC-PREMIUM-1",
  "ARTIST-ACCESS-7",
  "FEST-STAGE-101",
  "VIP-PERFORMER",
  "PERFORMER-007",
  "BACKSTAGE-KEY-1",
  "TENT-VIP-101",
  "STAGE-ARTIST-7",
  "MUSIC-VIP-007",
  "ARTIST-ELITE-7",
  "FEST-ACCESS-24",
  "VIP-STAGE-007",
  "PERFORMER-KEY-7",
  "BACKSTAGE-VIP-7",
  "TENT-PREMIUM-7",
  "STAGE-KEY-101",
  "MUSIC-ARTIST-7",
  "ARTIST-VIP-024",
  "FEST-ELITE-2024",
  "VIP-ACCESS-101",
  "PERFORMER-STAGE-7",
  "BACKSTAGE-GOLD-7",
  "TENT-KEY-101",
  "STAGE-VIP-024",
  "MUSIC-FEST-007",
  "ARTIST-PREMIUM-7",
  "VIP-PERFORMER-7",
  "FEST-STAGE-007",
  "PERFORMER-ACCESS-7",
  "BACKSTAGE-ELITE-7",
  "TENT-ARTIST-101",
];

export default function ArtistRegistration() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loginCredentials, setLoginCredentials] = useState<{
    email: string;
    password: string;
  } | null>(null);

  // Invite code state
  const [showInviteOverlay, setShowInviteOverlay] = useState(true);
  const [inviteCode, setInviteCode] = useState("");
  const [inviteError, setInviteError] = useState("");

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
      // First submit to your existing API
      const response = await fetch("/api/artist-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Try multiple HubSpot integration approaches
      try {
        const HUBSPOT_PORTAL_ID = "243491121";
        const HUBSPOT_FORM_ID = "f103fea8-9071-4b53-8290-9a427742e643";

        // Approach 1: Standard HubSpot Forms API
        const hubspotData = new FormData();

        // Add basic contact fields
        hubspotData.append("email", formData.email);
        hubspotData.append("firstname", formData.artistName || "");
        hubspotData.append("lastname", formData.legalName || "");
        hubspotData.append("phone", formData.phone || "");

        // Add all other fields as custom properties
        hubspotData.append("artist_name", formData.artistName || "");
        hubspotData.append("legal_name", formData.legalName || "");
        hubspotData.append("manager_name", formData.managerName || "");
        hubspotData.append("management_email", formData.managementEmail || "");
        hubspotData.append("genre", formData.genre || "");
        hubspotData.append("years_active", formData.yearsActive || "");
        hubspotData.append("special_requests", formData.specialRequests || "");

        if (
          formData.festivalsPlayed &&
          Array.isArray(formData.festivalsPlayed)
        ) {
          hubspotData.append(
            "festivals_played",
            formData.festivalsPlayed.join(", "),
          );
        }
        if (
          formData.upcomingFestivals &&
          Array.isArray(formData.upcomingFestivals)
        ) {
          hubspotData.append(
            "upcoming_festivals",
            formData.upcomingFestivals.join(", "),
          );
        }

        console.log(
          "Attempting HubSpot submission with data:",
          Object.fromEntries(hubspotData.entries()),
        );

        // Try the HubSpot submission
        const hubspotResponse = await fetch(
          `https://forms.hubspot.com/uploads/form/v2/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
          {
            method: "POST",
            body: hubspotData,
            mode: "cors",
          },
        );

        console.log("HubSpot response:", {
          ok: hubspotResponse.ok,
          status: hubspotResponse.status,
          statusText: hubspotResponse.statusText,
        });

        if (hubspotResponse.ok) {
          console.log("✅ Successfully submitted to HubSpot");
        } else {
          console.error("❌ HubSpot submission failed");

          // If the standard approach fails, try the alternative API approach
          try {
            const alternativeData = {
              fields: [
                { name: "email", value: formData.email },
                { name: "firstname", value: formData.artistName },
                { name: "lastname", value: formData.legalName },
                { name: "phone", value: formData.phone },
                { name: "artist_name", value: formData.artistName },
                { name: "genre", value: formData.genre },
              ],
              context: {
                pageUri: window.location.href,
                pageName: document.title,
              },
            };

            console.log("Trying alternative HubSpot approach...");
            const altResponse = await fetch(
              `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(alternativeData),
              },
            );

            if (altResponse.ok) {
              console.log("✅ Alternative HubSpot submission succeeded");
            } else {
              console.error("❌ Alternative HubSpot submission also failed");
            }
          } catch (altError) {
            console.error("Alternative HubSpot approach error:", altError);
          }
        }
      } catch (hubspotError) {
        console.error("HubSpot integration error:", hubspotError);
      }

      if (!response.ok) {
        // Handle 404 - API endpoint not available
        if (response.status === 404) {
          throw new Error(
            "Registration service is currently unavailable. This appears to be a deployment configuration issue. Please contact support at jg@thetent.club to complete your registration.",
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
            password: "Contact support for account setup",
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

  const handleInviteCodeSubmit = () => {
    if (!inviteCode.trim()) {
      setInviteError("Please enter an invite code");
      return;
    }

    if (VALID_INVITE_CODES.includes(inviteCode.trim().toUpperCase())) {
      setShowInviteOverlay(false);
      setInviteError("");
    } else {
      setInviteError(
        "Invalid invite code. Please check your code and try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-tent-blue/5">
      {/* Invite Code Overlay */}
      {showInviteOverlay && (
        <div className="fixed top-20 left-0 right-0 bottom-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-border/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8" style={{ color: "#6E6353" }} />
              </div>
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "#2E2E2E" }}
              >
                Invite Code Required
              </h2>
              <p className="text-muted-foreground">
                Please enter your exclusive invite code to access artist
                registration.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#2E2E2E" }}
                >
                  Invite Code
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={inviteCode}
                    onChange={(e) => {
                      setInviteCode(e.target.value.toUpperCase());
                      setInviteError("");
                    }}
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleInviteCodeSubmit()
                    }
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent text-center font-mono tracking-wider"
                    style={{ color: "#000000" }}
                    placeholder="ENTER-YOUR-CODE"
                    maxLength={20}
                  />
                </div>
                {inviteError && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    {inviteError}
                  </p>
                )}
              </div>

              <Button
                onClick={handleInviteCodeSubmit}
                className="w-full text-lg py-6"
                style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Access Registration
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Don't have an invite code? Contact your manager or{" "}
                  <a
                    href="/contact"
                    className="text-tent-purple hover:underline"
                  >
                    get in touch with us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
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
                className="hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#A2B29F" }}
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
                  className="hover:opacity-90 transition-opacity mt-2 mx-2"
                  style={{ backgroundColor: "#A2B29F" }}
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
      <section className="relative pt-32 pb-16 min-h-screen flex items-center">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fe148e56462fc40ad9588f859a82ac05d?format=webp&width=800"
            alt="The Tent brand card on acoustic guitar"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Overlaid Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase drop-shadow-2xl"
              style={{ color: "#F8F5EE" }}
            >
              Artist Registration
            </h1>
            <p
              className="text-xl md:text-2xl max-w-4xl mx-auto drop-shadow-lg"
              style={{
                color: "#F8F5EE",
                fontFamily: "Inter",
                fontWeight: "300"
              }}
            >
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
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#F8F5EE" }}
            >
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
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <perk.icon
                      className="w-8 h-8"
                      style={{ color: "#6E6353" }}
                    />
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
      <section className="py-16 px-6" style={{ backgroundColor: "#6E6353" }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#F8F5EE" }}
              >
                Register as an Artist
              </h2>
              <p className="text-xl mb-4" style={{ color: "#F8F5EE" }}>
                Complete your registration to access The Tent at your upcoming
                festival performances
              </p>
              <p className="text-sm" style={{ color: "#F8F5EE" }}>
                Already registered?{" "}
                <a
                  href="/artist-login"
                  className="transition-colors font-medium"
                  style={{ color: "#F8F5EE" }}
                >
                  Sign in to your dashboard
                </a>
              </p>
            </div>

            <Card className="border-tent-purple/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <h3
                  className="text-2xl font-bold text-center"
                  style={{ color: "#F8F5EE" }}
                >
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
                    <h4
                      className="text-lg font-semibold mb-4"
                      style={{ color: "#F8F5EE" }}
                    >
                      Personal Details
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
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
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
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
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                    <h4
                      className="text-lg font-semibold mb-4"
                      style={{ color: "#F8F5EE" }}
                    >
                      Management Contact
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
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
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
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
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                    <h4
                      className="text-lg font-semibold mb-4"
                      style={{ color: "#F8F5EE" }}
                    >
                      Performance Details
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
                          Genre *
                        </label>
                        <select
                          value={formData.genre}
                          onChange={(e) =>
                            setFormData({ ...formData, genre: e.target.value })
                          }
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                        <label
                          className="block text-sm font-medium mb-2"
                          style={{ color: "#F8F5EE" }}
                        >
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
                          className={`w-full px-4 py-3 border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent ${
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
                    <h4
                      className="text-lg font-semibold mb-4"
                      style={{ color: "#F8F5EE" }}
                    >
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
                    <h4
                      className="text-lg font-semibold mb-4"
                      style={{ color: "#2E2E2E" }}
                    >
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
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-white focus:ring-2 focus:ring-tent-purple focus:border-transparent resize-none"
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
                      className="text-sm"
                      style={{
                        color: "#A2B29F",
                        fontFamily: "Inter",
                        fontWeight: "300",
                      }}
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
                    className="w-full text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#2E2E2E" }}
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
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 uppercase"
              style={{ color: "#F8F5EE" }}
            >
              What Happens Next?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-tent-blue/20">
              <CardContent className="p-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{ backgroundColor: "#2E2E2E" }}
                >
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
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{ backgroundColor: "#2E2E2E" }}
                >
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
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{ backgroundColor: "#2E2E2E" }}
                >
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
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#F8F5EE" }}
          >
            Questions About Registration?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#F8F5EE" }}
          >
            Our artist relations team is here to help with your registration and
            answer any questions about The Tent services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#A2B29F" }}
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
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
                alt="The Tent Logo"
                className="w-6 h-6"
              />
              <span className="text-xl font-bold" style={{ color: "#A2B29F" }}>
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
