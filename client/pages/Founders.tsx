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
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useScrollFade } from "../hooks/useScrollFade";

export default function Founders() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor, logoTextStyle } = useScrollFade();
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
              <a href="/founders" className={`${textColor.replace('/80', '')} font-medium transition-colors`}>
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
                  className="text-foreground font-medium px-2 py-1"
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
              <p className="text-lg text-muted-foreground mb-6">
                Quickly after meeting several years ago in Nashville, Tennessee,
                we discovered a shared passion for live music and unforgettable
                experiences. After years of traveling to see our favorite
                artists, we realized we wanted to leverage our extensive
                backgrounds in hospitality and entertainment to give back to the
                musicians who had created countless cherished memories for us.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through our industry connections, we had the privilege of
                meeting and collaborating with some of our favorite musicians
                and entertainers at various festivals. It was during these
                events that we recognized a gap in the festival experience for
                the artists on stage.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We often witnessed bands arriving for soundchecks, only to spend
                their downtime waiting in their buses or in underwhelming artist
                lounges, where activities were minimal. This observation
                inspired the creation of our tent.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Music festivals offer amazing experiences for fans through brand
                activations and interactive opportunities. We aimed to create a
                similar, enjoyable environment for artists to enhance their
                festival experience as well.
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
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Ff9dfc48c8a584cd29d1db1860cfcd5f6?format=webp&width=800"
                    alt="The Tent founders Jared Gladstone & Chelsea Smith"
                    className="w-full h-auto object-contain rounded-2xl border border-border/50 shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2">
                      <p className="text-sm font-medium text-center">
                        <span className="text-tent-blue font-semibold">
                          Jared Gladstone
                        </span>{" "}
                        &{" "}
                        <span className="text-tent-pink font-semibold">
                          Chelsea Smith
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground text-center">
                        Founders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Ff4a967152e2b4a938ed84a51b81f72b2?format=webp&width=800"
                  alt="Jared Gladstone, The Tent co-founder"
                  className="w-full aspect-square object-cover rounded-2xl border border-border/50 shadow-lg"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F4a951d9cd77b4a6bb4fd0049c0f58329?format=webp&width=800"
                  alt="Chelsea Smith, The Tent co-founder"
                  className="w-full aspect-square object-cover rounded-2xl border border-border/50 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Favorite Artists */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-orange via-tent-pink to-tent-purple bg-clip-text text-transparent">
              Our Musical Inspirations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The artists who inspired us to create The Tent experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Jared Gladstone's Top 5 */}
            <Card className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-tent-blue mb-2">
                    Jared Gladstone
                  </h3>
                  <p className="text-muted-foreground">
                    My Top 5 Favorite Bands or Artists
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "1. Bruce Springsteen",
                    "2. Green Day",
                    "3. Morgan Wallen/ Luke Combs tied",
                    "4. The Gaslight Anthem",
                    "5. Creed",
                  ].map((artist, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-lg bg-tent-blue/5 hover:bg-tent-blue/10 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-tent-blue to-tent-purple rounded-full flex items-center justify-center mr-4">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">{artist}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chelsea Smith's Top 5 */}
            <Card className="border-tent-pink/20 hover:border-tent-pink/40 transition-colors bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-tent-pink mb-2">
                    Chelsea Smith
                  </h3>
                  <p className="text-muted-foreground">
                    My Top 5 Favorite Bands or Artists
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "1. Post Malone",
                    "2. Justin Timberlake",
                    "3. Morgan Wallen",
                    "4. Jon Summit",
                    "5. Dom Dolla",
                  ].map((artist, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-lg bg-tent-pink/5 hover:bg-tent-pink/10 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-tent-pink to-tent-orange rounded-full flex items-center justify-center mr-4">
                        <Music className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">{artist}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
              Our Journey in Photos
            </h2>
            <p className="text-lg text-muted-foreground">
              Behind the scenes moments from The Tent experience
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-gallery">
              <div className="flex space-x-6 min-w-full shrink-0">
                {/* Image 1 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F2ae4d1e8d6954e639c4141f978aa57bb?format=webp&width=800"
                    alt="The Tent founders at event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F75af3084783146148e7a665ea35bb404?format=webp&width=800"
                    alt="The Tent team with artists"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F93e41add8c5a40408c06183691e709fb?format=webp&width=800"
                    alt="The Tent experience with artists"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F6278bfe574ba46b3b0416bdf124a6305?format=webp&width=800"
                    alt="The Tent team backstage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 5 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F80925f4c7248438cb19363b307cbc470?format=webp&width=800"
                    alt="The Tent with special guests"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 6 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F1f78bcbfa1f84c52b022c9c9351b3291?format=webp&width=800"
                    alt="The Tent exclusive moments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 7 */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fbcd178d8b5044d2fa19f981c91d6619f?format=webp&width=800"
                    alt="The Tent founders and team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Remaining placeholders */}
                {[8, 9, 10].map((item) => (
                  <div
                    key={item}
                    className="flex-shrink-0 w-80 h-60 bg-gradient-to-br from-tent-blue/10 via-tent-purple/10 to-tent-pink/10 rounded-2xl border border-border/50 flex items-center justify-center group hover:from-tent-blue/20 hover:via-tent-purple/20 hover:to-tent-pink/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-tent-blue to-tent-purple rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-lg font-medium text-muted-foreground">
                        Gallery Image {item}
                      </p>
                      <p className="text-sm text-muted-foreground/80">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="flex space-x-6 min-w-full shrink-0">
                {/* Image 1 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F2ae4d1e8d6954e639c4141f978aa57bb?format=webp&width=800"
                    alt="The Tent founders at event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 2 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F75af3084783146148e7a665ea35bb404?format=webp&width=800"
                    alt="The Tent team with artists"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 3 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F93e41add8c5a40408c06183691e709fb?format=webp&width=800"
                    alt="The Tent experience with artists"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 4 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F6278bfe574ba46b3b0416bdf124a6305?format=webp&width=800"
                    alt="The Tent team backstage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 5 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F80925f4c7248438cb19363b307cbc470?format=webp&width=800"
                    alt="The Tent with special guests"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 6 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F1f78bcbfa1f84c52b022c9c9351b3291?format=webp&width=800"
                    alt="The Tent exclusive moments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Image 7 Duplicate */}
                <div className="flex-shrink-0 w-80 h-60 rounded-2xl border border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fbcd178d8b5044d2fa19f981c91d6619f?format=webp&width=800"
                    alt="The Tent founders and team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Remaining placeholders */}
                {[8, 9, 10].map((item) => (
                  <div
                    key={`duplicate-${item}`}
                    className="flex-shrink-0 w-80 h-60 bg-gradient-to-br from-tent-blue/10 via-tent-purple/10 to-tent-pink/10 rounded-2xl border border-border/50 flex items-center justify-center group hover:from-tent-blue/20 hover:via-tent-purple/20 hover:to-tent-pink/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-tent-blue to-tent-purple rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-lg font-medium text-muted-foreground">
                        Gallery Image {item}
                      </p>
                      <p className="text-sm text-muted-foreground/80">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                  Supporting the culture that brings people together.
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
              asChild
            >
              <a href="/brand-partnership">
                <Crown className="w-5 h-5 mr-2" />
                Partner With Us
              </a>
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
