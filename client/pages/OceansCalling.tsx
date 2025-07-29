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
  Anchor,
  Shell,
  Fish,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useScrollFade } from "../hooks/useScrollFade";

export default function OceansCalling() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor } = useScrollFade();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      icon: Waves,
      title: "Oceanfront VIP Village",
      description:
        "Exclusive beachfront lounge with panoramic ocean views, private cabanas, and direct beach access for artists.",
    },
    {
      icon: Heart,
      title: "Coastal Wellness Sanctuary",
      description:
        "Ocean-inspired spa services, salt water therapy, beach yoga sessions, and marine-based wellness treatments.",
    },
    {
      icon: Shell,
      title: "Seaside Artist Retreat",
      description:
        "Private oceanside spaces for relaxation, acoustic jam sessions, and sunset viewing with premium coastal amenities.",
    },
  ];

  const schedule = [
    {
      day: "Friday, September 26",
      events: [
        "11:00 AM - Ocean Tent Setup & Welcome",
        "1:00 PM - Artist Check-in Opens",
        "3:00 PM - Beachside Services Begin",
        "5:00 PM - Oceanfront VIP Village Opens",
        "7:00 PM - Sunset Ocean Experience",
      ],
    },
    {
      day: "Saturday, September 27",
      events: [
        "9:00 AM - Morning Beach Yoga",
        "11:00 AM - Ocean Brand Activations",
        "1:00 PM - Seaside Gourmet Lunch",
        "3:00 PM - Coastal Wellness Treatments",
        "6:00 PM - Golden Hour Beach Reception",
      ],
    },
    {
      day: "Sunday, September 28",
      events: [
        "10:00 AM - Ocean Sunrise Experience",
        "12:00 PM - Final Beach Activations",
        "2:00 PM - Coastal Farewell Brunch",
        "4:00 PM - Beach Cleanup & Closure",
        "6:00 PM - Ocean Festival Ends",
      ],
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const availableDates = [
    "September 26, 2025",
    "September 27, 2025",
    "September 28, 2025",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/30 via-blue-50/20 to-teal-50/30">
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
        style={navStyle}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
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
            </div>
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

      {/* Back Navigation */}
      <div className="pt-24 pb-8 px-6">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            className="mb-6 text-cyan-700 hover:text-cyan-800 hover:bg-cyan-100"
            asChild
          >
            <a href="/events">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </a>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 text-cyan-700 border-cyan-600/20 hover:from-cyan-600/20 hover:to-blue-600/20">
              <Waves className="w-4 h-4 mr-2" />
              Ocean Music Festival
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Oceans Calling
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              <div className="flex items-center text-lg text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2 text-cyan-600" />
                Ocean City, MD
              </div>
              <div className="flex items-center text-lg text-muted-foreground">
                <Calendar className="w-5 h-5 mr-2 text-cyan-600" />
                September 26-28, 2025
              </div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Where music meets the ocean. Experience The Tent's premier
              beachside hospitality at Maryland's most spectacular coastal music
              festival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-6"
                asChild
              >
                <a href="/artist-registration">
                  <Star className="w-5 h-5 mr-2" />
                  Register for VIP Access
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-cyan-600/30 text-cyan-700 hover:bg-cyan-50"
                asChild
              >
                <a href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Artist Relations
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-50/50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Oceanfront VIP Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in luxury with our exclusive beachfront
              hospitality designed for ocean-loving artists
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-cyan-200 hover:border-cyan-300 transition-colors text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-cyan-800">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ocean Partners */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Ocean Lifestyle Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience premium coastal brands and ocean-inspired luxury
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Saltwater Spirits Co.",
              "Coastal Couture",
              "Ocean Wellness Spa",
              "Tidal Wave Surfboards",
            ].map((brand, index) => (
              <Card
                key={index}
                className="border-cyan-200 hover:border-cyan-300 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-cyan-800">{brand}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Premium ocean lifestyle brand
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-50/50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="border-cyan-200 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-2xl font-bold text-center text-cyan-800">
                  Book Your Ocean Experience
                </h3>
                <p className="text-center text-muted-foreground">
                  Reserve your beachfront sanctuary at Oceans Calling
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cyan-800">
                    Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-cyan-200 rounded-lg bg-background focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                  >
                    <option value="">Choose your festival day</option>
                    {availableDates.map((date) => (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan-800">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-cyan-200 rounded-lg bg-background focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    >
                      <option value="">Select your preferred time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg py-6"
                    asChild
                  >
                    <a href="/artist-registration">
                      <Crown className="w-5 h-5 mr-2" />
                      Complete VIP Registration
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Festival Schedule
            </h2>
            <p className="text-xl text-muted-foreground">
              Three days of ocean music and beachfront hospitality
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <Card
                key={index}
                className="border-cyan-200 hover:border-cyan-300 transition-colors"
              >
                <CardHeader>
                  <h3 className="text-xl font-bold text-cyan-800">{day.day}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <li
                        key={eventIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">
                          {event}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-50/50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Ocean City, Maryland
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of world-class music and pristine
              Atlantic coastline at one of the East Coast's premier beachfront
              destinations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-cyan-200">
              <CardContent className="p-6 text-center">
                <Anchor className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-cyan-800">
                  Beachfront Festival
                </h3>
                <p className="text-sm text-muted-foreground">
                  Direct beach access with stages on the sand and ocean views
                </p>
              </CardContent>
            </Card>
            <Card className="border-cyan-200">
              <CardContent className="p-6 text-center">
                <Fish className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-cyan-800">
                  Coastal Convenience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Easy boardwalk access with ocean-to-stage transportation
                </p>
              </CardContent>
            </Card>
            <Card className="border-cyan-200">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-cyan-800">
                  VIP Beach Security
                </h3>
                <p className="text-sm text-muted-foreground">
                  Private beachfront entrance and exclusive coastal VIP areas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Ready for Oceans Calling?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join The Tent at Maryland's premier ocean music festival. Register
            now for exclusive beachfront VIP access and coastal luxury
            hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-6"
              asChild
            >
              <a href="/artist-registration">
                <Star className="w-5 h-5 mr-2" />
                Start Your Registration
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-cyan-600/30 text-cyan-700 hover:bg-cyan-50"
              asChild
            >
              <a href="/events">
                <Music className="w-5 h-5 mr-2" />
                View All Festivals
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
