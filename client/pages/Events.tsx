import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  MapPin,
  Music,
  Users,
  Clock,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Events() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const events = [
    {
      id: 1,
      name: "Lollapalooza",
      location: "Chicago, Illinois",
      dates: "July 31 - August 3, 2025",
      description:
        "In the heart of Chicago, The Tent brings luxury hospitality to one of America's premier music festivals.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F2bc66643592a4bdeb30f109da17a6bf6?format=webp&width=800",
      status: "confirmed",
      capacity: "Premium Experience",
      featured: true,
    },
    {
      id: 2,
      name: "Riot Fest",
      location: "Chicago, Illinois",
      dates: "September 19-21, 2025",
      description:
        "Join the punk rock revolution with The Tent's exclusive hospitality services for artists and fans at the ultimate alternative music festival.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "confirmed",
      capacity: "Artist & VIP Services",
      featured: true,
    },
    {
      id: 3,
      name: "Sea.Hear.Now",
      location: "Asbury Park, New Jersey",
      dates: "September 13-14, 2025",
      description:
        "Experience music by the ocean with The Tent's beachside hospitality sanctuary for artists and entertainers at this unique coastal festival.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "confirmed",
      capacity: "Beachside Lounge Services",
    },
    {
      id: 4,
      name: "Country Calling",
      location: "Ocean City, MD",
      dates: "October 3-5, 2025",
      description:
        "Experience the heart of country music with The Tent's signature hospitality services in Music City's premier country festival.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fe46d91fb74dd4a7baea55983f80217c8?format=webp&width=800",
      status: "pending",
      capacity: "Country Artist Services",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-700 border-green-300";
      case "pending":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-300";
      case "planning":
        return "bg-blue-500/20 text-blue-700 border-blue-300";
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-300";
    }
  };

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
              <a href="/events" className="text-foreground font-medium">
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-tent-orange/10 to-tent-pink/10 text-tent-purple border-tent-purple/20 hover:from-tent-orange/20 hover:to-tent-pink/20">
              <Calendar className="w-4 h-4 mr-2" />
              2025 Festival Season
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
              Upcoming
              <br />
              Events
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join The Tent at the most prestigious music festivals across the
              country. Your sanctuary awaits at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="pb-8 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              Featured Festivals
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <Card
                  key={event.id}
                  className="group overflow-hidden border-tent-blue/20 hover:border-tent-blue/40 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getStatusColor(event.status)}>
                        {event.status.charAt(0).toUpperCase() +
                          event.status.slice(1)}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.dates}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-tent-blue" />
                        <span className="font-medium">{event.capacity}</span>
                      </div>
                      <Button
                        variant="outline"
                        className="group/btn border-tent-blue/30 hover:bg-tent-blue/10"
                        onClick={() => {
                          if (event.name === "Lollapalooza") {
                            window.location.href = "/events/lollapalooza";
                          } else if (event.name === "Riot Fest") {
                            window.location.href = "/events/riot-fest";
                          }
                        }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            All{" "}
            <span className="bg-gradient-to-r from-tent-pink to-tent-orange bg-clip-text text-transparent">
              Scheduled Events
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-tent-purple/30"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      className={getStatusColor(event.status)}
                      variant="outline"
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </Badge>
                    <Music className="w-5 h-5 text-tent-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {event.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.dates}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-tent-purple/30 hover:bg-tent-purple/10 text-tent-purple"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
            Don't Miss Out
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure your spot at The Tent for the upcoming festival season.
            Premium hospitality experiences are limited and fill up fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Experience
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
