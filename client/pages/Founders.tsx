import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Star,
  Heart,
  Music,
  Sparkles,
  Crown,
  ArrowRight,
  MapPin,
  Calendar,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function Founders() {
  const founders = [];

  const milestones = [
    {
      year: "2019",
      title: "The Vision",
      description:
        "Three industry veterans recognized the need for premium artist hospitality at festivals.",
    },
    {
      year: "2020",
      title: "Planning & Development",
      description:
        "Spent the year designing the perfect hospitality experience and building key partnerships.",
    },
    {
      year: "2021",
      title: "First Launch",
      description:
        "Successfully launched at 3 major festivals, serving over 150 artists and their teams.",
    },
    {
      year: "2022",
      title: "Rapid Expansion",
      description:
        "Expanded to 12 festivals nationwide, introducing exclusive brand partnerships.",
    },
    {
      year: "2023",
      title: "Premium Services",
      description:
        "Added luxury amenities including professional grooming, wellness services, and gourmet dining.",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Became the go-to hospitality partner for artists at major festivals across the country.",
    },
    {
      year: "2025",
      title: "Next Chapter",
      description:
        "Launching comprehensive digital platform and expanding internationally.",
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
              <a href="/founders" className="text-foreground font-medium">
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
              <Users className="w-4 h-4 mr-2" />
              Meet the Team
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
              Our
              <br />
              Founders
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Meet the visionaries behind The Tent.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-tent-blue/20 hover:border-tent-blue/40 bg-background/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-tent-blue/20 group-hover:border-tent-blue/40 transition-colors"
                    />
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-tent-purple font-semibold mb-4">
                      {founder.title}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-6 text-center">
                    {founder.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-center">
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {founder.achievements.map((achievement, achIndex) => (
                        <Badge
                          key={achIndex}
                          variant="outline"
                          className="border-tent-purple/30 text-tent-purple text-xs"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={founder.linkedin}
                      className="p-2 rounded-full bg-tent-blue/10 hover:bg-tent-blue/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-tent-blue" />
                    </a>
                    <a
                      href={founder.twitter}
                      className="p-2 rounded-full bg-tent-purple/10 hover:bg-tent-purple/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-tent-purple" />
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      className="p-2 rounded-full bg-tent-pink/10 hover:bg-tent-pink/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-tent-pink" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Story Behind
                <span className="bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
                  {" "}
                  The Tent
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                It all started at a rainy festival in 2019. Three industry
                professionals found themselves huddled together, watching
                exhausted artists struggle to find proper rest and recovery
                between performances.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                That's when we realized the music industry was missing something
                crucial – a dedicated space where artists could truly recharge,
                access premium amenities, and connect with innovative brands
                that understand their unique needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From that moment, The Tent was born. Not just as a business, but
                as a mission to elevate the festival experience for the artists
                who make the magic happen.
              </p>
              <div className="flex items-center space-x-4">
                <Star className="w-6 h-6 text-tent-yellow" />
                <span className="text-lg font-semibold">
                  "We're not just providing a service – we're caring for the
                  artists who create the soundtrack to our lives."
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Festival scene"
                className="w-full aspect-video object-cover rounded-3xl border border-border/50 shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-pink to-tent-orange bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to revolutionizing festival hospitality –
              here's how we built The Tent
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-tent-blue via-tent-purple to-tent-pink h-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Badge className="bg-tent-purple text-white">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-tent-blue rounded-full border-4 border-background shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-tent-blue/10 via-tent-purple/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at The Tent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-tent-blue/20 hover:border-tent-blue/40 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Artist-First</h3>
                <p className="text-muted-foreground">
                  Every decision we make puts the artist experience at the
                  center. Their comfort, recovery, and success drive our
                  innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-tent-purple/20 hover:border-tent-purple/40 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tent-purple to-tent-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We set the highest standards for ourselves and deliver
                  unmatched quality in every aspect of our hospitality services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-tent-pink/20 hover:border-tent-pink/40 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tent-pink to-tent-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Music Community</h3>
                <p className="text-muted-foreground">
                  We're not just a service provider – we're part of the music
                  family, supporting the culture that brings people together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're an artist, festival organizer, or brand partner, we'd
            love to connect and explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-8 py-6"
            >
              <Crown className="w-5 h-5 mr-2" />
              Partner With Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-tent-blue/30 hover:bg-tent-blue/10"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact the Team
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
