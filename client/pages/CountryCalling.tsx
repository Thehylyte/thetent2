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
  TreePine,
  Guitar,
  Truck,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { useScrollFade } from "../hooks/useScrollFade";

export default function CountryCalling() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor } = useScrollFade();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      icon: Sparkles,
      title: "Exclusive Products",
      description:
        "Access premium country lifestyle brands, artisanal goods, and limited-edition merchandise from Nashville's finest.",
    },
    {
      icon: Heart,
      title: "Recovery & Wellness",
      description:
        "Country-inspired wellness treatments, bourbon-infused spa services, and authentic southern comfort amenities.",
    },
    {
      icon: Guitar,
      title: "Country Artist Lounge",
      description:
        "Private honky-tonk style lounge with acoustic jamming spaces, whiskey bar, and rustic luxury amenities.",
    },
  ];

  const schedule = [
    {
      day: "Friday, October 3",
      events: [
        "11:00 AM - Country Tent Setup & Welcome",
        "1:00 PM - Artist Check-in Opens",
        "3:00 PM - Nashville-Style Services Begin",
        "5:00 PM - Country Artist Lounge Opens",
        "7:00 PM - Sunset Country VIP Experience",
      ],
    },
    {
      day: "Saturday, October 4",
      events: [
        "9:00 AM - Morning Country Breakfast",
        "11:00 AM - Country Brand Showcase",
        "1:00 PM - Southern BBQ Lunch Service",
        "3:00 PM - Country Wellness Treatments",
        "6:00 PM - Honky-Tonk Happy Hour",
      ],
    },
    {
      day: "Sunday, October 5",
      events: [
        "10:00 AM - Gospel Brunch Experience",
        "12:00 PM - Country Lifestyle Activations",
        "2:00 PM - Final Day Services",
        "4:00 PM - Country Roads Farewell",
        "6:00 PM - Tent Closes",
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
    "October 3, 2025",
    "October 4, 2025",
    "October 5, 2025",
  ];

  return (
    <>
      <SEO
        title="Country Calling Festival - VIP Hospitality | The Tent"
        description="Experience The Tent's premium VIP hospitality at Country Calling Festival in Ocean City, MD. Authentic southern hospitality meets luxury amenities at Maryland's premier country festival."
        keywords="Country Calling, country music festival, Ocean City MD, VIP country festival, southern hospitality, coastal country festival, October 2025"
        url="https://thetent.club/events/country-calling"
        image="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F26b8027a38904d98b8cd653c90ef7c84?format=webp&width=1200"
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-amber-50">
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
                <span className="text-2xl font-bold bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent">
                  THE TENT
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className={`${textColor} transition-colors`}>
                  Home
                </a>
                <a href="/events" className={`${textColor} transition-colors`}>
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

        {/* Back Navigation */}
        <div className="pt-24 pb-8 px-6">
          <div className="container mx-auto">
            <Button
              variant="ghost"
              className="mb-6 text-amber-700 hover:text-amber-800 hover:bg-amber-100"
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
              <Badge className="mb-6 bg-gradient-to-r from-amber-600/10 to-orange-600/10 text-amber-700 border-amber-600/20 hover:from-amber-600/20 hover:to-orange-600/20">
                <Guitar className="w-4 h-4 mr-2" />
                Country Music Festival
              </Badge>
              {/* Country Calling Logo */}
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F26b8027a38904d98b8cd653c90ef7c84?format=webp&width=800"
                  alt="Country Calling Logo"
                  className="h-32 md:h-40 w-auto mx-auto object-contain"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                Country Calling
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                <div className="flex items-center text-lg text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                  Ocean City, MD
                </div>
                <div className="flex items-center text-lg text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-2 text-amber-600" />
                  October 3-5, 2025
                </div>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Experience the heart of country music with The Tent's signature
                hospitality services at Maryland's premier country festival by
                the sea.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-lg px-8 py-6"
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
                  className="text-lg px-8 py-6 border-amber-600/30 text-amber-700 hover:bg-amber-50"
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
        <section className="py-16 px-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Country VIP Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Authentic southern hospitality meets luxury amenities for the
                ultimate country festival experience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-amber-200 hover:border-amber-300 transition-colors text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-amber-800">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Country Lifestyle Partners
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience premium country brands and authentic southern
                products
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Nashville Whiskey Co.",
                "Cowboy Hat Outfitters",
                "Southern Comfort Spa",
                "Country Roads Apparel",
              ].map((brand, index) => (
                <Card
                  key={index}
                  className="border-amber-200 hover:border-amber-300 transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-amber-800">{brand}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Premium country lifestyle brand
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <Card className="border-amber-200 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <h3 className="text-2xl font-bold text-center text-amber-800">
                    Book Your Country Experience
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Reserve your spot at Country Calling with The Tent
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-amber-800">
                      Select Date
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg bg-background focus:ring-2 focus:ring-amber-600 focus:border-transparent"
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
                      <label className="block text-sm font-medium mb-2 text-amber-800">
                        Preferred Time
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-3 border border-amber-200 rounded-lg bg-background focus:ring-2 focus:ring-amber-600 focus:border-transparent"
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
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-lg py-6"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Festival Schedule
              </h2>
              <p className="text-xl text-muted-foreground">
                Three days of country music and VIP hospitality
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schedule.map((day, index) => (
                <Card
                  key={index}
                  className="border-amber-200 hover:border-amber-300 transition-colors"
                >
                  <CardHeader>
                    <h3 className="text-xl font-bold text-amber-800">
                      {day.day}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {day.events.map((event, eventIndex) => (
                        <li
                          key={eventIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
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
        <section className="py-16 px-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Ocean City, Maryland
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Where country music meets coastal charm - experience authentic
                country culture with ocean views and Maryland's famous
                hospitality.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <TreePine className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-amber-800">
                    Coastal Country Vibes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Unique blend of country music and beachside atmosphere
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <Truck className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-amber-800">Easy Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Convenient location with dedicated artist transportation
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-amber-800">
                    VIP Security
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Private entrance and secure VIP areas for artists
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 bg-clip-text text-transparent">
              Ready for Country Calling?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join The Tent at Maryland's premier country festival. Register now
              for exclusive VIP access and authentic southern hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-lg px-8 py-6"
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
                className="text-lg px-8 py-6 border-amber-600/30 text-amber-700 hover:bg-amber-50"
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
    </>
  );
}
