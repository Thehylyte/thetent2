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
import { useScrollFade } from "../hooks/useScrollFade";

export default function Services() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor } = useScrollFade();

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
        <nav
          className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
          style={navStyle}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
                  alt="The Tent Logo"
                  className="w-8 h-8"
                />
                <span
                  className="text-2xl font-bold"
                  style={{ color: "#A2B29F" }}
                >
                  THE TENT
                </span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className={`${textColor} transition-colors`}>
                  Home
                </a>
                <a href="/events" className={`${textColor} transition-colors`}>
                  Events
                </a>
                <a
                  href="/founders"
                  className={`${textColor} transition-colors`}
                >
                  Founders
                </a>
                <a
                  href="/services"
                  className={`${textColor.replace("/80", "")} font-medium transition-colors`}
                >
                  Services
                </a>
                <a href="/contact" className={`${textColor} transition-colors`}>
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
              <Badge className="mb-6 bg-gradient-to-r from-tent-orange/10 to-tent-pink/10 text-tent-purple border-tent-purple/20 hover:from-tent-orange/20 hover:to-tent-pink/20">
                <Crown className="w-4 h-4 mr-2" />
                Premium Services
              </Badge>
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase"
                style={{
                  color: "#F8F5EE",
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              >
                Elevate Your
                <br />
                Festival Experience
              </h1>
              <p
                className="text-xl md:text-2xl max-w-4xl mx-auto mb-8"
                style={{
                  color: "#F8F5EE",
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                The Tent provides comprehensive hospitality services designed
                specifically for artists, entertainers, and VIP guests at major
                music festivals across the country.
              </p>

              {/* Hospitality Services Image */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F02ebf5923eed4143ac82ff0511e1e97a?format=webp&width=800"
                    alt="Luxury tent hospitality services interior"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
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
                Core Services
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{
                  color: "#2E2E2E",
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
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
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon
                        className="w-8 h-8"
                        style={{ color: "#6E6353" }}
                      />
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
                            className="w-4 h-4 mr-3 flex-shrink-0"
                            style={{ color: "#6E6353" }}
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
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 uppercase"
                style={{
                  color: "#F8F5EE",
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              >
                Specialty Services
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{
                  color: "#F8F5EE",
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
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
                      <div className="w-12 h-12 flex items-center justify-center mr-4">
                        <service.icon
                          className="w-6 h-6"
                          style={{ color: "#6E6353" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold"
                          style={{
                            color: "#2E2E2E",
                            fontFamily: "Inter",
                            fontWeight: "700",
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{
                            color: "#2E2E2E",
                            fontFamily: "Inter",
                            fontWeight: "300",
                          }}
                        >
                          {service.provider}
                        </p>
                      </div>
                    </div>
                    <p
                      style={{
                        color: "#2E2E2E",
                        fontFamily: "Inter",
                        fontWeight: "300",
                      }}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Partners */}
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
                Brand Partners
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{
                  color: "#F8F5EE",
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
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
                    {partner.name === "AG1" ? (
                      <div className="w-16 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F6c1df44c33af4a2da5fa5f5fab4705c1?format=webp&width=800"
                          alt="AG1 Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-tent-orange to-tent-pink rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                    )}
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

        {/* Scrolling Gallery */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-gallery">
                <div className="flex space-x-6 min-w-full shrink-0">
                  {/* Image 1 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F7e2bd3cb789f477eaa3670f582d857f8?format=webp&width=800"
                      alt="The Tent exclusive service moment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F92e45cdc2d414733b49c7841af613365?format=webp&width=800"
                      alt="The Tent VIP experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image 3 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F96d085abcea24cd2aaf23748cbf98bb5?format=webp&width=800"
                      alt="The Tent hospitality service"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image 4 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Ff96ea201d95341fd948d047c509cec88?format=webp&width=800"
                      alt="The Tent premium experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image 5 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fc7bdb9354cc840d89414177c81cb880e?format=webp&width=800"
                      alt="The Tent exclusive moments"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image 6 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fadd824dc69bd460c9472d0607044688e?format=webp&width=800"
                      alt="The Tent artist services"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Image 7 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F07b9a7931d2a4ea18295d4578ac9dfba?format=webp&width=800"
                      alt="The Tent hospitality experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>


                </div>

                {/* Duplicate the images for seamless loop */}
                <div className="flex space-x-6 min-w-full shrink-0">
                  {/* Duplicate Image 1 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F7e2bd3cb789f477eaa3670f582d857f8?format=webp&width=800"
                      alt="The Tent exclusive service moment"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Duplicate Image 2 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F92e45cdc2d414733b49c7841af613365?format=webp&width=800"
                      alt="The Tent VIP experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Duplicate Image 3 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F96d085abcea24cd2aaf23748cbf98bb5?format=webp&width=800"
                      alt="The Tent hospitality service"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Duplicate Image 4 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Ff96ea201d95341fd948d047c509cec88?format=webp&width=800"
                      alt="The Tent premium experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Duplicate Image 5 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fc7bdb9354cc840d89414177c81cb880e?format=webp&width=800"
                      alt="The Tent exclusive moments"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Duplicate Image 6 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fadd824dc69bd460c9472d0607044688e?format=webp&width=800"
                      alt="The Tent artist services"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Duplicate Image 7 */}
                  <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F07b9a7931d2a4ea18295d4578ac9dfba?format=webp&width=800"
                      alt="The Tent hospitality experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-16 px-6">
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
                How It Works
              </h2>
              <p
                className="text-xl max-w-3xl mx-auto mb-12"
                style={{
                  color: "#F8F5EE",
                  fontFamily: "Inter",
                  fontWeight: "300",
                }}
              >
                Your journey to the ultimate festival experience
              </p>

              {/* Featured Image */}
              <div className="max-w-2xl mx-auto mb-16">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F587938ffd40c49819e45fb9d8216fd94?format=webp&width=800"
                    alt="Artist enjoying The Tent experience with exclusive products"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                      style={{ backgroundColor: "#A2B29F" }}
                    >
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div
                        className="hidden md:block absolute top-8 left-full w-full h-0.5 -translate-x-8"
                        style={{ backgroundColor: "#F8F5EE" }}
                      ></div>
                    )}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3 uppercase"
                    style={{
                      color: "#F8F5EE",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#F8F5EE",
                      fontFamily: "Inter",
                      fontWeight: "300",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6" style={{ backgroundColor: "#6E6353" }}>
          <div className="container mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 uppercase flex flex-wrap items-center justify-center gap-2"
              style={{
                color: "#F8F5EE",
                fontFamily: "Inter",
                fontWeight: "700",
              }}
            >
              Ready to Experience{" "}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F3617430fab024488a01fb5e9d36427b1?format=webp&width=800"
                alt="The Tent"
                className="h-12 md:h-16 inline-block"
              />
              ?
            </h2>
            <p
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{
                color: "#F8F5EE",
                fontFamily: "Inter",
                fontWeight: "300",
              }}
            >
              Join hundreds of artists who have elevated their festival
              experience with our premium hospitality services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#A2B29F" }}
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
                  alt="The Tent Logo"
                  className="w-6 h-6"
                />
                <span
                  className="text-xl font-bold"
                  style={{ color: "#A2B29F" }}
                >
                  THE TENT
                </span>
              </div>
              <div className="flex space-x-6" style={{ color: "#F8F5EE" }}>
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
                  href="/contact"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Contact
                </a>
                <a
                  href="/brand-partnership"
                  className="transition-colors"
                  style={{ color: "#F8F5EE" }}
                >
                  Brand Partners
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
    </>
  );
}
