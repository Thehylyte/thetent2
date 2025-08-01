import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Crown, Handshake } from "lucide-react";
import SEO from "../components/SEO";

export default function Index() {
  return (
    <>
      <SEO
        title="The Tent - Premium Festival Hospitality"
        description="The ultimate artist haven for premium festival hospitality services"
        keywords="festival hospitality, VIP services, artist amenities, music festival, luxury hospitality"
        url="https://thetent.club"
      />
      <div 
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ backgroundColor: "#2E2E2E" }}
      >
        {/* Logo Section */}
        <div className="text-center mb-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Ffbdfe906275c4845873741793fd3b52c?format=webp&width=800"
            alt="The Tent Logo"
            className="mb-8 mx-auto w-full max-w-lg md:max-w-xl lg:max-w-2xl"
          />
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto uppercase"
            style={{ color: "#F8F5EE", fontFamily: "Inter", fontWeight: "300" }}
          >
            The Ultimate Artist Haven
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* For Members Box */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-2"
            style={{ backgroundColor: "#F8F5EE", borderColor: "#A2B29F" }}
            onClick={() => window.location.href = "/artist-login"}
          >
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "#A2B29F" }}
              >
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 uppercase"
                style={{ color: "#2E2E2E", fontFamily: "Inter", fontWeight: "700" }}
              >
                For Members
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ color: "#2E2E2E", fontFamily: "Inter", fontWeight: "300" }}
              >
                Access your exclusive artist dashboard and premium hospitality services
              </p>
              <Button
                className="text-lg px-8 py-4 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2E2E2E", color: "#F8F5EE" }}
              >
                Artist Login
              </Button>
            </CardContent>
          </Card>

          {/* Brand Partners Box */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 group border-2"
            style={{ backgroundColor: "#F8F5EE", borderColor: "#6E6353" }}
            onClick={() => window.location.href = "/brand-partnership"}
          >
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "#6E6353" }}
              >
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-4 uppercase"
                style={{ color: "#2E2E2E", fontFamily: "Inter", fontWeight: "700" }}
              >
                Brand Partners
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ color: "#2E2E2E", fontFamily: "Inter", fontWeight: "300" }}
              >
                Join our exclusive brand partnership program and reach premium audiences
              </p>
              <Button
                className="text-lg px-8 py-4 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2E2E2E", color: "#F8F5EE" }}
              >
                Become a Partner
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p 
            className="text-sm"
            style={{ color: "#F8F5EE", opacity: 0.7 }}
          >
            © 2024 The Tent. Elevating festival experiences worldwide.
          </p>
        </div>
      </div>
    </>
  );
}
