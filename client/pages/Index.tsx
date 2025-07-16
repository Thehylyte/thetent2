import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, Music, Sparkles, Shield, Heart, Crown } from "lucide-react";

export default function Index() {
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
                href="#experience"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Experience
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
            <Badge className="mb-6 bg-gradient-to-r from-tent-orange/20 to-tent-pink/20 text-tent-purple border-tent-purple/30">
              <Crown className="w-4 h-4 mr-2" />
              Exclusive VIP Experience
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tent-blue via-tent-purple to-tent-pink bg-clip-text text-transparent leading-tight">
              Elevate Your
              <br />
              Festival Experience
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The ultimate hospitality sanctuary for artists and entertainers at
              live music festivals. Discover exclusive products, luxury
              recovery, and unparalleled relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-8 py-6"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Enter The Tent
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-tent-blue/30 hover:bg-tent-blue/10"
              >
                <Music className="w-5 h-5 mr-2" />
                Watch Experience
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-6xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-tent-blue/20 via-tent-purple/20 to-tent-pink/20 rounded-3xl border border-border/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-tent-blue/10 via-transparent to-tent-pink/10"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-tent-orange via-tent-pink to-tent-purple rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                      <Crown className="w-8 h-8 text-tent-purple" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-foreground/60">
                    Your VIP Experience Awaits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple to-tent-blue bg-clip-text text-transparent">
              The Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated experiences designed exclusively for artists,
              entertainers, and VIP guests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-tent-orange/20 hover:border-tent-orange/40 transition-colors bg-gradient-to-br from-tent-orange/5 to-transparent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tent-orange to-tent-yellow rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-tent-orange">
                  Exclusive Products
                </h3>
                <p className="text-muted-foreground">
                  Receive seeded products, services from some the newest and
                  most innovative brands
                </p>
              </CardContent>
            </Card>

            <Card className="border-tent-blue/20 hover:border-tent-blue/40 transition-colors bg-gradient-to-br from-tent-blue/5 to-transparent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tent-blue to-tent-purple rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-tent-blue">
                  Recovery & Wellness
                </h3>
                <p className="text-muted-foreground">
                  Professional massage services, hydration stations, healthy
                  gourmet meals, and wellness amenities to keep you performing
                  at your best.
                </p>
              </CardContent>
            </Card>

            <Card className="border-tent-pink/20 hover:border-tent-pink/40 transition-colors bg-gradient-to-br from-tent-pink/5 to-transparent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-tent-pink to-tent-purple rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-tent-pink">
                  Luxury Relaxation
                </h3>
                <p className="text-muted-foreground">
                  Private lounges, premium amenities, climate-controlled spaces,
                  and concierge services in an exclusive, secure environment.
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F94e22145274e4dc1b364dbd01ccb88ac?format=webp&width=800"
                  alt="Rhone"
                  className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F7151841591214dd4bc50551b9b5afeb8?format=webp&width=800"
                  alt="State & Liberty"
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
              <div className="flex items-center space-x-16 min-w-full">
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
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F94e22145274e4dc1b364dbd01ccb88ac?format=webp&width=800"
                  alt="Rhone"
                  className="h-12 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F7151841591214dd4bc50551b9b5afeb8?format=webp&width=800"
                  alt="State & Liberty"
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
      <section className="py-16 px-6 bg-gradient-to-r from-tent-purple/10 via-tent-blue/10 to-tent-pink/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-tent-purple/20 text-tent-purple border-tent-purple/30">
                <Star className="w-4 h-4 mr-2" />
                Artist Endorsed
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Where Music Legends
                <span className="bg-gradient-to-r from-tent-blue to-tent-purple bg-clip-text text-transparent">
                  {" "}
                  Recharge
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the artists, entertainers, and industry professionals who
                trust The Tent for their festival recovery and relaxation needs.
                Experience the difference that luxury hospitality makes.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tent-purple via-tent-blue to-tent-pink bg-clip-text text-transparent">
            Ready to Experience The Tent?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the exclusive community of artists and entertainers who've
            discovered the ultimate festival VIP experience.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg px-12 py-6"
          >
            <Crown className="w-5 h-5 mr-2" />
            Book Your VIP Access
          </Button>
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
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
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
