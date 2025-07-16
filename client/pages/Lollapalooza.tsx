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

export default function Lollapalooza() {
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

  const schedule = [
    {
      day: "Thursday, July 31",
      events: [
        "10:00 AM - The Tent Setup & Welcome",
        "12:00 PM - Artist Check-in Opens",
        "2:00 PM - Wellness Services Begin",
        "6:00 PM - VIP Artist Lounge Opens",
      ],
    },
    {
      day: "Friday, August 1",
      events: [
        "9:00 AM - Morning Wellness Sessions",
        "11:00 AM - Brand Partner Activations",
        "1:00 PM - Gourmet Lunch Service",
        "3:00 PM - Recovery Treatments Available",
        "7:00 PM - Artist Networking Event",
      ],
    },
    {
      day: "Saturday, August 2",
      events: [
        "9:00 AM - Morning Recovery Sessions",
        "11:00 AM - Exclusive Product Previews",
        "1:00 PM - Premium Lunch Experience",
        "4:00 PM - Artist Relaxation Hours",
        "8:00 PM - VIP After-Party Access",
      ],
    },
    {
      day: "Sunday, August 3",
      events: [
        "10:00 AM - Final Wellness Sessions",
        "12:00 PM - Last Chance Brand Activations",
        "2:00 PM - Closing Lunch Service",
        "6:00 PM - The Tent Farewell",
      ],
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
                Lollapalooza
                <br />
                2025
              </h1>
              <div className="flex items-center text-xl text-muted-foreground mb-4">
                <MapPin className="w-6 h-6 mr-3 text-tent-blue" />
                Grant Park, Chicago, Illinois
              </div>
              <div className="flex items-center text-xl text-muted-foreground mb-6">
                <Calendar className="w-6 h-6 mr-3 text-tent-purple" />
                July 31 - August 3, 2025
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                In the heart of Chicago, The Tent brings luxury hospitality to
                one of America's premier music festivals. Experience the
                ultimate artist sanctuary with premium services, exclusive
                products, and unparalleled recovery amenities.
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
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F2bc66643592a4bdeb30f109da17a6bf6?format=webp&width=800"
                alt="Lollapalooza Festival"
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

      {/* Schedule Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-pink to-tent-orange bg-clip-text text-transparent">
              Daily Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your day-by-day guide to The Tent services at Lollapalooza 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {schedule.map((day, index) => (
              <Card
                key={index}
                className="border-tent-purple/20 hover:border-tent-purple/40 transition-colors"
              >
                <CardHeader>
                  <h3 className="text-2xl font-bold text-tent-purple">
                    {day.day}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="flex items-center space-x-3"
                      >
                        <Clock className="w-4 h-4 text-tent-blue flex-shrink-0" />
                        <span className="text-muted-foreground">{event}</span>
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
      <section className="py-16 px-6 bg-gradient-to-r from-tent-blue/10 via-tent-purple/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Find Us at
                <span className="bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
                  {" "}
                  Grant Park
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                The Tent will be located in the Artist Village area of Grant
                Park, providing easy access for performers and VIP guests while
                maintaining an exclusive, private atmosphere.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-tent-blue" />
                  <span>Artist Village, Section A - Grant Park</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-tent-purple" />
                  <span>Artist & VIP Access Only</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-tent-pink" />
                  <span>Premium Hospitality Experience</span>
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
            Ready for Lollapalooza?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure your access to The Tent at Lollapalooza 2025. Limited spots
            available for the ultimate festival hospitality experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-12 py-6"
            >
              <Crown className="w-5 h-5 mr-2" />
              Book Lollapalooza Access
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
