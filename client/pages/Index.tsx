import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Star,
  Music,
  Sparkles,
  Shield,
  Heart,
  Crown,
  Menu,
  X,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { useScrollFade } from "../hooks/useScrollFade";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor } = useScrollFade();

  return (
    <>
      <SEO
        title="The Tent - Premium VIP Festival Hospitality for Artists"
        description="Elevate your festival experience with The Tent's exclusive VIP hospitality services. Professional recovery, luxury amenities, and concierge services for artists at major music festivals."
        keywords="festival hospitality, VIP services, artist amenities, music festival, luxury hospitality, artist services, festival VIP, entertainment hospitality, Lollapalooza, Riot Fest, Sea Hear Now"
        url="https://thetent.club/"
      />
      <div className="min-h-screen">
        {/* Navigation */}
        <nav
          className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
          style={navStyle}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F9415827adc79479ea84c8324db8a21db?format=webp&width=800"
                  alt="Logo"
                  className="w-8 h-8"
                />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#experience"
                  className={`${textColor} transition-colors`}
                >
                  Experience
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
                  className={`${textColor} transition-colors`}
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
                    href="#experience"
                    className={`${textColor} transition-colors px-2 py-1`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Experience
                  </a>
                  <a
                    href="/events"
                    className={`${textColor} transition-colors px-2 py-1`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </a>
                  <a
                    href="/founders"
                    className={`${textColor} transition-colors px-2 py-1`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Founders
                  </a>
                  <a
                    href="/services"
                    className={`${textColor} transition-colors px-2 py-1`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="/contact"
                    className="text-foreground/80 hover:text-[#A2B29F] active:text-[#A2B29F] transition-colors px-2 py-1"
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
        <section
          className="pt-24 pb-16 px-6"
          style={{ backgroundColor: "#2e2e2e" }}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F9e636fb1c64143d5a2e54ea7e5e98639?format=webp&width=800"
                alt="The Tent Logo"
                className="mb-6 mx-auto max-w-lg md:max-w-2xl"
              />
              <p
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 uppercase"
                style={{ color: "#f8f5ee" }}
              >
                the ultimate hospitality sanctuary
              </p>
            </div>

            {/* Hero Video */}
            <div className="relative w-full md:max-w-6xl md:mx-auto">
              <div className="aspect-video md:rounded-3xl border-0 md:border md:border-border/50 overflow-hidden md:shadow-2xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://cdn.builder.io/o/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F8438eca6c3a04d81adece5dcedfaa883?alt=media&token=de9839fc-593d-4536-8706-34ae9107fbbe&apiKey=669056b1b03f448b9ee2fa2d9e73b3a1"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="experience" className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F8F5EE" }}>
                The Difference
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ color: "#F8F5EE" }}>
                Curated experiences designed exclusively for artists,
                entertainers, and VIP guests
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-tent-orange/20 hover:border-tent-orange/40 transition-colors bg-gradient-to-br from-tent-orange/5 to-transparent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-orange to-tent-yellow rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8" style={{ color: "#6E6353" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Exclusive Products
                  </h3>
                  <p style={{ color: "#2E2E2E" }}>
                    Receive seeded products, services from some the newest and
                    most innovative brands
                  </p>
                </CardContent>
              </Card>

              <Card className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors bg-gradient-to-br from-tent-blue/5 to-transparent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8" style={{ color: "#6E6353" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Recovery & Wellness
                  </h3>
                  <p style={{ color: "#2E2E2E" }}>
                    Professional massage services, hydration stations, healthy
                    gourmet meals, and wellness amenities to keep you performing
                    at your best.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-tent-pink/20 hover:border-tent-pink/40 transition-colors bg-gradient-to-br from-tent-pink/5 to-transparent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-tent-pink to-tent-purple rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8" style={{ color: "#6E6353" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
                    Luxury Relaxation
                  </h3>
                  <p style={{ color: "#2E2E2E" }}>
                    Private lounges, premium amenities, climate-controlled
                    spaces, and concierge services in an exclusive, secure
                    environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Brand Partners Scrolling Section */}
        <section className="py-12 px-6 overflow-hidden">
          <div className="container mx-auto">
            <div className="relative">
              <div className="flex animate-scroll">
                <div className="flex items-center space-x-24 min-w-full shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F932e0b5c87df4bf4aa16268253c67118?format=webp&width=800"
                    alt="AG1"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F51edeafc13bb4a7a937d7bc9f6b491d9?format=webp&width=800"
                    alt="Baha Mar"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd919bb8a2bf143f596877bc377cdcf40?format=webp&width=800"
                    alt="Jabra"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F0e754eefabd0474e854fb4d5f99eccf0?format=webp&width=800"
                    alt="Nike"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F6fa25cdebc2e4ef38ad36d822d724269?format=webp&width=800"
                    alt="Ving Vodka"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F9b2feadc06144643ba476a6d6a5d2317?format=webp&width=800"
                    alt="Funk's Barber Shop"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F0145eebebc4643b6b99f888015330b50?format=webp&width=800"
                    alt="Idle Hand Collective"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F53b51afddcc74a39888aef9f2d67de28?format=webp&width=800"
                    alt="NormaTec"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
                {/* Duplicate for seamless scroll */}
                <div className="flex items-center space-x-24 min-w-full shrink-0">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F932e0b5c87df4bf4aa16268253c67118?format=webp&width=800"
                    alt="AG1"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F51edeafc13bb4a7a937d7bc9f6b491d9?format=webp&width=800"
                    alt="Baha Mar"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd919bb8a2bf143f596877bc377cdcf40?format=webp&width=800"
                    alt="Jabra"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F0e754eefabd0474e854fb4d5f99eccf0?format=webp&width=800"
                    alt="Nike"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F6fa25cdebc2e4ef38ad36d822d724269?format=webp&width=800"
                    alt="Ving Vodka"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F9b2feadc06144643ba476a6d6a5d2317?format=webp&width=800"
                    alt="Funk's Barber Shop"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F0145eebebc4643b6b99f888015330b50?format=webp&width=800"
                    alt="Idle Hand Collective"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F53b51afddcc74a39888aef9f2d67de28?format=webp&width=800"
                    alt="NormaTec"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Showcase */}
        <section className="py-16 px-6" style={{ backgroundColor: "#F8F5EE" }}>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-tent-purple/20 text-tent-purple border-tent-purple/30">
                  <Star className="w-4 h-4 mr-2" />
                  Artist Endorsed
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#2E2E2E" }}>
                  Where Music Legends
                  <span style={{ color: "#2E2E2E" }}>
                    {" "}
                    Recharge
                  </span>
                </h2>
                <p className="text-xl mb-8" style={{ color: "#2E2E2E" }}>
                  Join the artists, entertainers, and industry professionals who
                  trust The Tent for their festival recovery and relaxation
                  needs. Experience the difference that luxury hospitality
                  makes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge
                    variant="outline"
                    className="border-tent-blue/30 text-tent-blue"
                  >
                    Premium Access
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-tent-purple/30 text-tent-purple"
                  >
                    24/7 Concierge
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-tent-pink/30 text-tent-pink"
                  >
                    Exclusive Events
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F57d19e9adf25432b881206e1f3dc0261?format=webp&width=800"
                  alt="Artists enjoying The Tent VIP experience"
                  className="aspect-square object-cover rounded-3xl border border-border/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#F8F5EE" }}>
              Ready to Experience The Tent?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#F8F5EE", fontFamily: "Inter", fontWeight: "300" }}>
              Join the exclusive community of artists and entertainers who've
              discovered the ultimate festival VIP experience.
            </p>
            <Button
              size="lg"
              className="hover:opacity-90 transition-opacity text-lg px-12 py-6"
              style={{ backgroundColor: "#A2B29F" }}
              asChild
            >
              <a href="/artist-login">
                <Crown className="w-5 h-5 mr-2" />
                Book Your VIP Access
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border/50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F9415827adc79479ea84c8324db8a21db?format=webp&width=800"
                  alt="Logo"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="/brand-partnership"
                    className="hover:text-foreground transition-colors"
                  >
                    Become a Brand Partner
                  </a>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </div>
                <a
                  href="https://instagram.com/accessthetent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-2 rounded-full hover:bg-tent-purple/10 transition-colors group"
                  aria-label="Follow us on Instagram @accessthetent"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-tent-purple transition-colors" />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-muted-foreground">
              <p>
                &copy; 2024 The Tent. Elevating festival experiences worldwide.
              </p>
              <p className="text-xs mt-2">
                <a
                  href="/admin/registrations"
                  className="text-muted-foreground/60 hover:text-foreground transition-colors"
                >
                  Admin
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
