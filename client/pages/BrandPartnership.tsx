import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Building2,
  User,
  Phone,
  Mail,
  Package,
  Briefcase,
  CheckCircle,
  Send,
  Menu,
  X,
  Crown,
  Music,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { useScrollFade } from "../hooks/useScrollFade";

export default function BrandPartnership() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor, logoTextStyle } = useScrollFade();
  const [formData, setFormData] = useState({
    companyName: "",
    product: "",
    contactName: "",
    contactTitle: "",
    contactPhone: "",
    contactEmail: "",
    selectedFestivals: [] as string[],
    message: "",
  });

  const festivals = [
    {
      name: "Lollapalooza",
      location: "Chicago, IL",
      dates: "July 31 - August 3, 2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F2bc66643592a4bdeb30f109da17a6bf6?format=webp&width=800",
    },
    {
      name: "Riot Fest",
      location: "Chicago, IL",
      dates: "September 19-21, 2025",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sea.Hear.Now",
      location: "Asbury Park, NJ",
      dates: "September 13-14, 2025",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Country Calling",
      location: "Ocean City, MD",
      dates: "October 3-5, 2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F26b8027a38904d98b8cd653c90ef7c84?format=webp&width=800",
    },
    {
      name: "Oceans Calling",
      location: "Ocean City, MD",
      dates: "September 26-28, 2025",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFestivalToggle = (festivalName: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedFestivals: prev.selectedFestivals.includes(festivalName)
        ? prev.selectedFestivals.filter((f) => f !== festivalName)
        : [...prev.selectedFestivals, festivalName],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.contactName ||
      !formData.contactEmail ||
      formData.selectedFestivals.length === 0
    ) {
      alert(
        "Please fill in all required fields and select at least one festival.",
      );
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Partnership application:", formData);
    alert(
      `Thank you ${formData.contactName}! Your brand partnership application for ${formData.companyName} has been submitted. We'll be in touch within 48 hours to discuss opportunities at ${formData.selectedFestivals.join(", ")}.`,
    );

    // Reset form
    setFormData({
      companyName: "",
      product: "",
      contactName: "",
      contactTitle: "",
      contactPhone: "",
      contactEmail: "",
      selectedFestivals: [],
      message: "",
    });
  };

  return (
    <>
      <SEO
        title="Brand Partnership Opportunities | The Tent"
        description="Partner with The Tent to showcase your brand at major music festivals. Join our network of premium brands providing exclusive products and services to artists and VIP guests."
        keywords="brand partnership, festival sponsorship, music festival marketing, brand collaboration, VIP services, artist partnerships"
        url="https://thetent.club/brand-partnership"
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-tent-blue/5">
        {/* Navigation */}
        <nav
          className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
          style={navStyle}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                  alt="The Tent Logo"
                  className="w-8 h-8"
                />
                <span
                  className="text-2xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent transition-all duration-300"
                  style={logoTextStyle}
                >
                  THE TENT
                </span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/"
                  className={`${textColor} transition-colors`}
                >
                  Home
                </a>
                <a
                  href="/events"
                  className={`${textColor} transition-colors`}
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
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-tent-orange/10 to-tent-pink/10 text-tent-purple border-tent-purple/20 hover:from-tent-orange/20 hover:to-tent-pink/20">
                <Building2 className="w-4 h-4 mr-2" />
                Partnership Opportunities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
                Become a Brand Partner
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
                Join our exclusive network of premium brands and showcase your
                products to artists, entertainers, and VIP guests at major music
                festivals across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              Partnership Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Direct Artist Access
                  </h3>
                  <p className="text-muted-foreground">
                    Connect directly with top-tier artists and entertainers in
                    an exclusive, relaxed environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-tent-purple/20 hover:border-tent-purple/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-purple to-tent-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Premium Brand Exposure
                  </h3>
                  <p className="text-muted-foreground">
                    Showcase your products in our luxury hospitality environment
                    to a highly engaged audience.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-tent-pink/20 hover:border-tent-pink/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-pink to-tent-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Multi-Festival Network
                  </h3>
                  <p className="text-muted-foreground">
                    Access multiple festivals throughout the year with a single
                    partnership agreement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-tent-purple/20">
              <CardHeader>
                <h2 className="text-3xl font-bold text-center mb-4">
                  Partnership Application
                </h2>
                <p className="text-muted-foreground text-center">
                  Tell us about your brand and which festivals you're interested
                  in partnering with.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium mb-2"
                      >
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                          placeholder="Your Company Name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-sm font-medium mb-2"
                      >
                        Product/Service *
                      </label>
                      <div className="relative">
                        <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                          placeholder="What do you offer?"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium mb-2"
                      >
                        Contact Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                          placeholder="Your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contactTitle"
                        className="block text-sm font-medium mb-2"
                      >
                        Contact Title
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="contactTitle"
                          name="contactTitle"
                          value={formData.contactTitle}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                          placeholder="Your Job Title"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contactPhone"
                        className="block text-sm font-medium mb-2"
                      >
                        Contact Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          id="contactPhone"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-sm font-medium mb-2"
                      >
                        Contact Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          id="contactEmail"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Festival Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-4">
                      Which festivals are you interested in partnering with? *
                    </label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {festivals.map((festival) => (
                        <div
                          key={festival.name}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            formData.selectedFestivals.includes(festival.name)
                              ? "border-tent-purple bg-tent-purple/5"
                              : "border-border hover:border-tent-purple/40"
                          }`}
                          onClick={() => handleFestivalToggle(festival.name)}
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              src={festival.image}
                              alt={festival.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">
                                {festival.name}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {festival.location}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {festival.dates}
                              </p>
                            </div>
                            {formData.selectedFestivals.includes(
                              festival.name,
                            ) && (
                              <CheckCircle className="w-5 h-5 text-tent-purple" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                      placeholder="Tell us more about your partnership goals, previous festival experience, or any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Partnership Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border/50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <a href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                  alt="The Tent Logo"
                  className="w-6 h-6"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
                  THE TENT
                </span>
              </a>
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
                <a
                  href="/founders"
                  className="hover:text-foreground transition-colors"
                >
                  Founders
                </a>
                <a
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
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
    </>
  );
}
