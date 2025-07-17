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
} from "lucide-react";

export default function RiotFest() {
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
      icon: Shield,
      title: "Luxury Relaxation",
      description:
        "Private lounges, premium amenities, climate-controlled spaces, and concierge services.",
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
                href="/artist-registration"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Artists
              </a>
              <a
                href="/founders"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Founders
              </a>
              <a
                href="#services"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90">
                Book Access
              </Button>
            </div>
          </div>
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
              <Badge className="mb-6 bg-green-500/20 text-green-700 border-green-300">
                <Crown className="w-4 h-4 mr-2" />
                Confirmed Event
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
                Riot Fest
                <br />
                2025
              </h1>
              <div className="flex items-center text-xl text-muted-foreground mb-4">
                <MapPin className="w-6 h-6 mr-3 text-tent-blue" />
                Douglass Park, Chicago, Illinois
              </div>
              <div className="flex items-center text-xl text-muted-foreground mb-6">
                <Calendar className="w-6 h-6 mr-3 text-tent-purple" />
                September 19-21, 2025
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Join the punk rock revolution with The Tent's exclusive
                hospitality services for artists and fans at the ultimate
                alternative music festival. Experience premier recovery and
                relaxation in the heart of Chicago's rebellious music scene.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-8 py-6"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Reserve Your Spot
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-tent-blue/30 hover:bg-tent-blue/10"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Riot Fest"
                className="w-full aspect-video object-cover rounded-3xl border border-border/50 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              What We Provide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive hospitality services are designed to keep you at
              your peak performance throughout the festival.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products and Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-orange via-tent-pink to-tent-purple bg-clip-text text-transparent">
              EVENT FEATURED PRODUCTS AND SERVICES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the exclusive brands and premium services available at
              The Tent during Riot Fest 2025
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card
                key={item}
                className="group hover:shadow-lg transition-all duration-300 border-tent-blue/20 hover:border-tent-blue/40 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-tent-blue/10 via-tent-purple/10 to-tent-pink/10 rounded-xl border border-border/50 flex items-center justify-center mb-4 group-hover:from-tent-blue/20 group-hover:via-tent-purple/20 group-hover:to-tent-pink/20 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-tent-blue to-tent-purple rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Product {item}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm mb-1">
                      Featured Brand
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Premium Service
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Exclusive partnerships and premium services available at Riot Fest
            </p>
            <Button
              variant="outline"
              className="border-tent-purple/30 hover:bg-tent-purple/10 text-tent-purple"
            >
              <Crown className="w-4 h-4 mr-2" />
              View All Partners
            </Button>
          </div>
        </div>
      </section>

      {/* Haircut Reservation Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F33620c51e79f4fd7a60c09e98f764404?format=webp&width=800"
                alt="The Idle Hand Collective"
                className="h-16"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-pink to-tent-orange bg-clip-text text-transparent">
              Book Your Cut
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule your premium grooming session with The Idle Hand
              Collective available at The Tent during Riot Fest
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-tent-purple/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-bold">
                    Reserve Your Appointment
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Date *
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent">
                      <option value="">Select a date</option>
                      <option value="2025-09-19">Friday, September 19</option>
                      <option value="2025-09-20">Saturday, September 20</option>
                      <option value="2025-09-21">Sunday, September 21</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent">
                      <option value="">Select time</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Type *
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent">
                    <option value="">Select service</option>
                    <option value="haircut">Premium Haircut</option>
                    <option value="haircut-beard">Haircut + Beard Trim</option>
                    <option value="beard-trim">Beard Trim Only</option>
                    <option value="shave">Hot Towel Shave</option>
                    <option value="full-service">Full Grooming Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-tent-purple focus:border-transparent resize-none"
                    placeholder="Any specific styling requests or preferences..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-tent-purple border-border rounded focus:ring-tent-purple"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to the terms and conditions and understand that this
                    is a premium service
                  </label>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg py-6"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve My Appointment
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    Appointments are subject to availability. You will receive a
                    confirmation email within 24 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-blue/10 via-tent-purple/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Find Us at
                <span className="bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
                  {" "}
                  Douglass Park
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                The Tent will be located in the Artist Village area of Douglass
                Park, providing easy access for performers and VIP guests while
                maintaining an exclusive, private atmosphere for the punk rock
                community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-tent-blue" />
                  <span>Artist Village, Section B - Douglass Park</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-tent-purple" />
                  <span>Artist & VIP Access Only</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-tent-pink" />
                  <span>Alternative Music Hospitality Hub</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-tent-blue/20 via-tent-purple/20 to-tent-pink/20 rounded-3xl border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-tent-blue" />
                  <p className="text-xl font-semibold text-foreground/80">
                    Interactive Map Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
            Ready for Riot Fest?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure your access to The Tent at Riot Fest 2025. Limited spots
            available for the ultimate alternative music festival hospitality
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-12 py-6"
            >
              <Crown className="w-5 h-5 mr-2" />
              Book Riot Fest Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-12 py-6 border-tent-blue/30 hover:bg-tent-blue/10"
            >
              <Music className="w-5 h-5 mr-2" />
              View All Events
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
