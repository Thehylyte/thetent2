import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  MapPin,
  Music,
  Users,
  Clock,
  ArrowLeft,
  Star,
  Sparkles,
  Heart,
  Shield,
  Crown,
  Waves,
  Sun,
  Umbrella,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function SeaHearNow() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      icon: Sparkles,
      title: "Exclusive Products",
      description:
        "Receive seeded products and services from some of the newest and most innovative brands.",
    },
    {
      icon: Heart,
      title: "Recovery & Wellness",
      description:
        "Professional massage services, hydration stations, healthy gourmet meals, and wellness amenities.",
    },
    {
      icon: Waves,
      title: "Beachside Relaxation",
      description:
        "Ocean-view lounges, premium beach amenities, climate-controlled spaces, and coastal concierge services.",
    },
  ];

  const schedule = [
    {
      day: "Saturday, September 13",
      events: [
        "10:00 AM - Beachside Tent Setup & Welcome",
        "12:00 PM - Artist Check-in Opens",
        "2:00 PM - Ocean Wellness Services Begin",
        "4:00 PM - Beachside Artist Lounge Opens",
        "6:00 PM - Sunset VIP Experience",
      ],
    },
    {
      day: "Sunday, September 14",
      events: [
        "9:00 AM - Morning Beach Wellness",
        "11:00 AM - Coastal Brand Activations",
        "1:00 PM - Seaside Gourmet Lunch",
        "3:00 PM - Ocean Recovery Treatments",
        "5:00 PM - Farewell Beach Reception",
      ],
    },
  ];

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const availableDates = ["September 13, 2025", "September 14, 2025"];

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
                  <a href="/artist-login" onClick={() => setIsMobileMenuOpen(false)}>
                    Artist Login
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Events */}
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto">
          <a
            href="/events"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-500/20 hover:from-blue-500/20 hover:to-cyan-500/20">
                <Waves className="w-4 h-4 mr-2" />
                Beachside Festival
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent leading-tight">
                Sea.Hear.Now
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-3 text-blue-500" />
                  <span>Asbury Park, New Jersey</span>
                </div>
                <div className="flex items-center text-xl">
                  <Calendar className="w-6 h-6 mr-3 text-cyan-500" />
                  <span>September 13-14, 2025</span>
                </div>
                <div className="flex items-center text-xl">
                  <Sun className="w-6 h-6 mr-3 text-orange-500" />
                  <span>Beachside Experience</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience music by the ocean with The Tent's beachside
                hospitality sanctuary for artists and entertainers at this unique
                coastal festival. Enjoy premium oceanfront amenities while the
                sound of waves complements the rhythm of music.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-6"
                asChild
              >
                <a href="/artist-login">
                  <Waves className="w-5 h-5 mr-2" />
                  Access Beachside Lounge
                </a>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sea.Hear.Now Festival at Asbury Park Beach"
                className="w-full aspect-video object-cover rounded-3xl border border-border/50 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Beachside Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elevate your coastal festival experience with our premium oceanfront
              hospitality services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center border-blue-500/20 hover:border-cyan-500/40 transition-colors bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Featured Products */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              EVENT FEATURED PRODUCTS AND SERVICES
            </h2>
            <p className="text-lg text-muted-foreground">
              Exclusive beachside offerings from our premium brand partners
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card
                key={item}
                className="group hover:shadow-lg transition-all duration-300 border-blue-500/20"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-lg m-4 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <p className="text-sm font-medium text-muted-foreground">
                      Beach Product {item}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4 pt-0">
                  <h3 className="font-semibold mb-2">Coastal Experience {item}</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium beachside amenities and exclusive oceanfront services.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Experience */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fb017979ff0b141cd8af8f8de2687b8cb?format=webp&width=800"
                  alt="The Tent Logo"
                  className="w-12 h-12 mr-4"
                />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Reserve Your Beachside Experience
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Book your premium oceanfront services at Sea.Hear.Now
              </p>
            </div>

            <Card className="border-blue-500/20 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium mb-2"
                    >
                      Select Date
                    </label>
                    <select
                      id="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Choose your festival day</option>
                      {availableDates.map((date) => (
                        <option key={date} value={date}>
                          {date}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium mb-2"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-2"
                  >
                    Select Service
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Choose your beachside service</option>
                    <option value="wellness">Ocean Wellness & Recovery</option>
                    <option value="lounge">Beachside VIP Lounge</option>
                    <option value="products">Exclusive Product Access</option>
                    <option value="all">Complete Beachside Experience</option>
                  </select>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-6"
                  >
                    <Umbrella className="w-5 h-5 mr-2" />
                    Reserve Your Spot
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Reservations are confirmed within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Festival Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Your beachside experience timeline
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {schedule.map((day, index) => (
              <Card
                key={index}
                className="border-blue-500/20 bg-background/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <h3 className="text-xl font-bold text-center text-blue-600">
                    {day.day}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex items-center p-3 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 transition-colors"
                      >
                        <Clock className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{event}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Asbury Park Beach
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Located on the iconic Asbury Park coastline, The Tent provides an
                unparalleled beachside festival experience. Our oceanfront location
                offers stunning views of the Atlantic Ocean while you enjoy
                world-class music and premium hospitality services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                  <span>500 Ocean Avenue, Asbury Park, NJ 07712</span>
                </div>
                <div className="flex items-center">
                  <Waves className="w-5 h-5 text-cyan-500 mr-3" />
                  <span>Oceanfront Premium Location</span>
                </div>
                <div className="flex items-center">
                  <Sun className="w-5 h-5 text-orange-500 mr-3" />
                  <span>Beach Access & Sunset Views</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Asbury Park Beach"
                className="w-full aspect-video object-cover rounded-2xl border border-border/50 shadow-lg"
              />
            </div>
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
                href="/founders"
                className="hover:text-foreground transition-colors"
              >
                Founders
              </a>
              <a
                href="/services"
                className="hover:text-foreground transition-colors"
              >
                Services
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
  );
}
