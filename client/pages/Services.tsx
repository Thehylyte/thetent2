import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Sparkles,
  Heart,
  Shield,
  Crown,
  Music,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Scissors,
  Dumbbell,
  Coffee,
  Shirt,
  Package,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";

export default function Services() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const coreServices = [
    {
      icon: Sparkles,
      title: "Exclusive Products",
      description:
        "Receive seeded products and services from some of the newest and most innovative brands.",
      features: [
        "Latest tech gadgets",
        "Premium lifestyle products",
        "Limited edition items",
        "Brand partnerships",
      ],
      color: "tent-purple",
    },
    {
      icon: Heart,
      title: "Recovery & Wellness",
      description:
        "Professional massage services, hydration stations, healthy gourmet meals, and wellness amenities.",
      features: [
        "Professional massage therapy",
        "IV hydration therapy",
        "Healthy gourmet meals",
        "Meditation spaces",
      ],
      color: "tent-pink",
    },
    {
      icon: Shield,
      title: "Luxury Relaxation",
      description:
        "Private lounges, premium amenities, climate-controlled spaces, and concierge services.",
      features: [
        "Private artist lounges",
        "Climate-controlled spaces",
        "Premium amenities",
        "24/7 concierge",
      ],
      color: "tent-blue",
    },
  ];

  const specialtyServices = [
    {
      icon: Scissors,
      title: "Professional Grooming",
      description:
        "Premium grooming services including haircuts, styling, and grooming consultations.",
      provider: "Funk's Barber Shop & The Idle Hand Collective",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Recovery",
      description:
        "State-of-the-art recovery equipment and personalized fitness consultations.",
      provider: "NormaTec Recovery Systems",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Coffee,
      title: "Premium Dining",
      description:
        "Curated dining experiences with gourmet meals and premium beverages.",
      provider: "Exclusive Culinary Partners",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Shirt,
      title: "Fashion & Styling",
      description:
        "Personal styling services and access to premium fashion brands.",
      provider: "Premium Fashion Partners",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const brandPartners = [
    { name: "AG1", category: "Wellness" },
    { name: "Baha Mar", category: "Hospitality" },
    { name: "Jabra", category: "Technology" },
    { name: "Nike", category: "Athletic" },

    { name: "Ving Vodka", category: "Beverage" },
    { name: "Funk's Barber Shop", category: "Grooming" },
    { name: "Idle Hand Collective", category: "Grooming" },
    { name: "NormaTec", category: "Recovery" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Artist Registration",
      description:
        "Artists and their teams register for The Tent experience at upcoming festivals.",
    },
    {
      step: "02",
      title: "Custom Experience Design",
      description:
        "We create a personalized experience plan based on your specific needs and preferences.",
    },
    {
      step: "03",
      title: "Festival Activation",
      description:
        "Enjoy premium hospitality services throughout the festival duration with dedicated support.",
    },
    {
      step: "04",
      title: "Ongoing Partnership",
      description:
        "Access The Tent at multiple festivals throughout the year with exclusive member benefits.",
    },
  ];

  return (
    <>
      <SEO
        title="Services - Premium Festival Hospitality | The Tent"
        description="Discover The Tent's comprehensive hospitality services including exclusive products, recovery & wellness, luxury relaxation, professional grooming, and premium dining at major music festivals."
        keywords="festival services, VIP amenities, artist recovery, luxury hospitality, professional grooming, wellness services, festival VIP, concierge services"
        url="https://thetent.club/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-tent-blue/5">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                  alt="The Tent Logo"
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
                  THE TENT
                </span>
              </a>
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
                <a href="/services" className="text-foreground font-medium">
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
                    className="text-foreground font-medium px-2 py-1"
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
                <Crown className="w-4 h-4 mr-2" />
                Premium Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
                Elevate Your
                <br />
                Festival Experience
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                The Tent provides comprehensive hospitality services designed
                specifically for artists, entertainers, and VIP guests at major
                music festivals across the country.
              </p>

              {/* Hospitality Services Image */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F52bc3cb003404f31af2d590f8dfa04b5?format=webp&width=800"
                    alt="Luxury tent hospitality services interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
                Core Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our fundamental offerings that create the perfect hospitality
                environment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <Card
                  key={index}
                  className={`border-${service.color}/20 hover:border-${service.color}/40 transition-all duration-300 group`}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${service.color} to-${service.color === "tent-blue" ? "tent-purple" : service.color === "tent-purple" ? "tent-pink" : "tent-orange"} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle
                            className={`w-4 h-4 text-${service.color} mr-3 flex-shrink-0`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-orange via-tent-pink to-tent-purple bg-clip-text text-transparent">
                Specialty Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Curated experiences with our premium brand partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specialtyServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-tent-blue to-tent-purple rounded-xl flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-sm text-tent-purple font-medium">
                          {service.provider}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Partners */}
        <section className="py-16 px-6 bg-gradient-to-r from-tent-blue/10 via-tent-purple/10 to-tent-pink/10">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
                Brand Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We collaborate with industry-leading brands to provide exclusive
                products and services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {brandPartners.map((partner, index) => (
                <Card
                  key={index}
                  className="text-center p-4 hover:shadow-md transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-tent-orange to-tent-pink rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {partner.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Your journey to the ultimate festival experience
              </p>

              {/* Featured Image */}
              <div className="max-w-2xl mx-auto mb-16">
                <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F587938ffd40c49819e45fb9d8216fd94?format=webp&width=800"
                    alt="Artist enjoying The Tent experience with exclusive products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-tent-purple to-tent-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-tent-purple/30 to-tent-pink/30 -translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/20 via-tent-blue/20 to-tent-pink/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
              Ready to Experience The Tent?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of artists who have elevated their festival
              experience with our premium hospitality services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-8 py-6"
                asChild
              >
                <a href="/events">
                  <Crown className="w-5 h-5 mr-2" />
                  Book Services
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-tent-blue/30 hover:bg-tent-blue/10"
                asChild
              >
                <a href="/artist-registration">
                  <Users className="w-5 h-5 mr-2" />
                  Artist Registration
                </a>
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
                <a
                  href="/founders"
                  className="hover:text-foreground transition-colors"
                >
                  Founders
                </a>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
                <a href="/brand-partnership" className="hover:text-foreground transition-colors">
                  Brand Partners
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
