import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Crown,
  Calendar,
  MessageSquare,
  Building,
  Star,
  Send,
  CheckCircle,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    festival: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for general inquiries",
      contact: "info@thetent.club",
      action: "mailto:info@thetent.club",
      color: "tent-purple",
    },
    {
      icon: Instagram,
      title: "Follow Us",
      description: "Stay updated on Instagram",
      contact: "@thetent.club",
      action: "https://instagram.com/thetent.club",
      color: "tent-pink",
    },
  ];

  const inquiryTypes = [
    { value: "artist", label: "Artist Services" },
    { value: "festival", label: "Festival Partnership" },
    { value: "brand", label: "Brand Partnership" },
    { value: "media", label: "Media Inquiry" },
    { value: "general", label: "General Question" },
  ];

  const upcomingFestivals = [
    "Lollapalooza 2025",
    "Riot Fest 2025",
    "Sea.Hear.Now 2025",
    "Country Calling 2025",
    "Other Festival",
  ];

  const officeLocations = [
    {
      city: "Chicago",
      state: "IL",
      description: "Festival operations hub for Midwest events",
      isHeadquarters: false,
    },
    {
      city: "Las Vegas",
      state: "NV",
      description: "West Coast operations and entertainment partnerships",
      isHeadquarters: true,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
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
              <a href="/contact" className="text-foreground font-medium">
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
                  className="text-foreground font-medium px-2 py-1"
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
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase"
              style={{
                color: "#F8F5EE",
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              Contact The Tent
            </h1>
            <p
              className="text-xl md:text-2xl max-w-4xl mx-auto mb-8"
              style={{
                color: "#F8F5EE",
                fontFamily: "Inter",
                fontWeight: "300",
              }}
            >
              Ready to elevate your festival experience? Let's connect and
              create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6" style={{ backgroundColor: "#6E6353" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 uppercase"
              style={{
                color: "#F8F5EE",
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              Ways to Connect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`border-${method.color}/20 hover:border-${method.color}/40 transition-all duration-300 group cursor-pointer`}
                onClick={() => window.open(method.action, "_blank")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon
                      className="w-8 h-8"
                      style={{ color: "#6E6353" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <p className={`text-${method.color} font-semibold`}>
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#F8F5EE" }}
              >
                Send Us a Message
              </h2>
              <p className="text-xl" style={{ color: "#F8F5EE" }}>
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <Card className="border-tent-blue/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors"
                        placeholder="Your company or band name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium mb-2"
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="festival"
                        className="block text-sm font-medium mb-2"
                      >
                        Festival of Interest
                      </label>
                      <select
                        id="festival"
                        name="festival"
                        value={formData.festival}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors"
                      >
                        <option value="">Select a festival</option>
                        {upcomingFestivals.map((festival) => (
                          <option key={festival} value={festival}>
                            {festival}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your needs, questions, or how we can help elevate your festival experience..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="text-lg px-8 py-6 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#A2B29F" }}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-6 border-tent-blue/30 hover:bg-tent-blue/10"
                      asChild
                    >
                      <a
                        href="/artist-registration"
                        style={{ color: "#F8F5EE" }}
                      >
                        <Crown
                          className="w-5 h-5 mr-2"
                          style={{ color: "#F8F5EE" }}
                        />
                        Artist Registration
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-6" style={{ backgroundColor: "#A2B29F" }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 uppercase"
              style={{
                color: "#2E2E2E",
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              Our Locations
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{
                color: "#2E2E2E",
                fontFamily: "Inter",
                fontWeight: "300",
              }}
            >
              We operate from key music industry hubs across the country
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {officeLocations.map((location, index) => (
              <Card
                key={index}
                className={`${location.isHeadquarters ? "border-tent-purple/40" : "border-tent-blue/20"} hover:shadow-lg transition-all duration-300`}
                style={
                  location.isHeadquarters ? { backgroundColor: "#F8F5EE" } : {}
                }
              >
                <CardContent className="p-6 text-center">
                  {location.city === "Chicago" && (
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F693ce03fd54e4817a7d58d6f3ed92365?format=webp&width=800"
                        alt="Chicago skyline"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  {location.city === "Las Vegas" && (
                    <div className="mb-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fcae8423f000f43d3bf8cf32a6540187b?format=webp&width=800"
                        alt="Las Vegas welcome sign"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
                      {location.isHeadquarters ? (
                        <Building
                          className="w-6 h-6"
                          style={{ color: "#6E6353" }}
                        />
                      ) : (
                        <MapPin
                          className="w-6 h-6"
                          style={{ color: "#6E6353" }}
                        />
                      )}
                    </div>
                    {location.isHeadquarters && (
                      <Badge className="bg-tent-purple/10 text-tent-purple border-tent-purple/20">
                        <Star className="w-3 h-3 mr-1" />
                        HQ
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {location.city}, {location.state}
                  </h3>
                  {location.address && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {location.address}
                    </p>
                  )}
                  <p className="text-muted-foreground">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6">
                <a
                  href="/"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Home
                </a>
                <a
                  href="/events"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Events
                </a>
                <a
                  href="/artist-registration"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Artists
                </a>
                <a
                  href="/founders"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Founders
                </a>
                <a
                  href="/services"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Services
                </a>
              </div>
              <a
                href="https://instagram.com/accessthetent"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 p-2 rounded-full hover:bg-tent-purple/10 transition-colors group"
                aria-label="Follow us on Instagram @thetent.club"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-tent-purple transition-colors" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center" style={{ color: "#F8F5EE" }}>
            <p>
              &copy; 2024 The Tent. Elevating festival experiences worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
