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
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-tent-orange via-tent-pink to-tent-purple rounded-sm"></div>
                <div className="absolute inset-0.5 bg-background rounded-sm"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-tent-blue via-tent-purple to-tent-orange rounded-sm"></div>
              </div>
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
                Book VIP Access
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
              The ultimate VIP hospitality sanctuary for artists and
              entertainers at live music festivals. Discover exclusive products,
              luxury recovery, and unparalleled relaxation.
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
              The VIP Difference
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
                  Access to premium merchandise, limited-edition festival gear,
                  and exclusive artist collaborations available only to VIP
                  guests.
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
              <div className="aspect-square bg-gradient-to-br from-tent-blue/20 via-tent-purple/20 to-tent-pink/20 rounded-3xl border border-border/50"></div>
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
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-tent-orange via-tent-pink to-tent-purple rounded-sm"></div>
              </div>
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
