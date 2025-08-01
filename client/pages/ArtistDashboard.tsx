import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  LogOut,
  Settings,
  Star,
  Crown,
  Music,
  Scissors,
  Heart,
  CheckCircle,
  Plus,
  ArrowRight,
  Menu,
  X,
  Zap,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollFade } from "../hooks/useScrollFade";

export default function ArtistDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navStyle, textColor } = useScrollFade();
  const [artistName, setArtistName] = useState("");
  const [artistEmail, setArtistEmail] = useState("");
  const [selectedFestival, setSelectedFestival] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showBarberDetails, setShowBarberDetails] = useState(false);
  const [selectedBarberService, setSelectedBarberService] = useState("");

  const upcomingFestivals = [
    {
      name: "Lollapalooza",
      location: "Chicago, IL",
      dates: "July 31 - August 3, 2025",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F2bc66643592a4bdeb30f109da17a6bf6?format=webp&width=800",
    },
    {
      name: "Riot Fest",
      location: "Chicago, IL",
      dates: "September 19-21, 2025",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sea.Hear.Now",
      location: "Asbury Park, NJ",
      dates: "September 13-14, 2025",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const services = [
    {
      id: "wellness",
      name: "Recovery & Wellness",
      icon: Heart,
      description: "Massage and wellness treatments",
      duration: "60 min",
      color: "tent-pink",
    },
    {
      id: "lounge",
      name: "Private Lounge Access",
      icon: Crown,
      description: "Exclusive relaxation space",
      duration: "Flexible",
      color: "tent-purple",
    },
    {
      id: "barbershop",
      name: "Barber Shop",
      icon: Scissors,
      description: "Premium barber services & grooming",
      duration: "30 min",
      color: "tent-orange",
    },
  ];

  const myReservations = [
    {
      id: 1,
      festival: "Lollapalooza",
      service: "Professional Grooming",
      date: "August 1, 2025",
      time: "2:00 PM",
      status: "confirmed",
    },
    {
      id: 2,
      festival: "Riot Fest",
      service: "Recovery & Wellness",
      date: "September 20, 2025",
      time: "11:00 AM",
      status: "pending",
    },
    {
      id: 3,
      festival: "Sea.Hear.Now",
      service: "Barber Shop",
      date: "September 13, 2025",
      time: "3:30 PM",
      status: "confirmed",
    },
    {
      id: 4,
      festival: "Lollapalooza",
      service: "Normatec Chairs",
      date: "August 2, 2025",
      time: "5:00 PM",
      status: "confirmed",
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

  const barberServices = [
    {
      id: "signature-cut",
      name: "Signature Cut",
      description: "Complete hair styling with premium products",
      duration: "45 min",
      price: "Complimentary",
      icon: "✂️",
    },
    {
      id: "beard-trim",
      name: "Beard Trim & Shape",
      description: "Professional beard grooming and shaping",
      duration: "25 min",
      price: "Complimentary",
      icon: "🪒",
    },
    {
      id: "hot-towel-shave",
      name: "Hot Towel Shave",
      description: "Traditional hot towel straight razor shave",
      duration: "35 min",
      price: "Complimentary",
      icon: "🔥",
    },
    {
      id: "cut-and-shave",
      name: "The Full Service",
      description: "Complete cut, beard trim, and hot towel finish",
      duration: "60 min",
      price: "Complimentary",
      icon: "👑",
    },
    {
      id: "styling-only",
      name: "Styling & Finish",
      description: "Hair styling with premium products (no cut)",
      duration: "20 min",
      price: "Complimentary",
      icon: "💫",
    },
    {
      id: "grooming-kit",
      name: "VIP Grooming Kit",
      description: "Take-home premium grooming products",
      duration: "5 min",
      price: "Complimentary",
      icon: "🎁",
    },
  ];

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("artistLoggedIn");
    const email = localStorage.getItem("artistEmail");
    const name = localStorage.getItem("artistName");

    if (!isLoggedIn) {
      window.location.href = "/artist-login";
      return;
    }

    setArtistEmail(email || "");
    setArtistName(name || "Artist");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("artistLoggedIn");
    localStorage.removeItem("artistEmail");
    localStorage.removeItem("artistName");
    window.location.href = "/artist-login";
  };

  const handleReservation = () => {
    if (
      selectedFestival &&
      selectedServices.length > 0 &&
      selectedDate &&
      selectedTime
    ) {
      // Enhanced confirmation message for multiple services
      const servicesList = selectedServices.join(", ");
      const hasBarberService = selectedServices.some((service) =>
        service.includes("Barber Shop"),
      );

      const confirmationMessage = hasBarberService
        ? `Reservation requested for ${servicesList} at ${selectedFestival} on ${selectedDate} at ${selectedTime}. Our partner team will contact you within 2 hours to confirm your exclusive appointments!`
        : `Reservation requested for ${servicesList} at ${selectedFestival} on ${selectedDate} at ${selectedTime}. You will receive a confirmation email shortly!`;

      alert(confirmationMessage);

      // Reset form
      setSelectedFestival("");
      setSelectedServices([]);
      setSelectedDate("");
      setSelectedTime("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-700 border-green-300";
      case "pending":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-300";
    }
  };

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
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
                alt="The Tent Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold" style={{ color: "#A2B29F" }}>
                THE TENT
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/artist-dashboard"
                className={`${textColor.replace("/80", "")} font-medium transition-colors`}
              >
                Dashboard
              </a>
              <a href="/events" className={`${textColor} transition-colors`}>
                Events
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{artistName}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-red-200 text-red-700 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
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
                  href="/artist-dashboard"
                  className="text-foreground font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </a>
                <a
                  href="/events"
                  className="text-foreground/80 hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </a>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2 py-1">
                  <User className="w-4 h-4" />
                  <span>{artistName}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-red-200 text-red-700 hover:bg-red-50 mx-2"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          {/* Welcome Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#F8F5EE" }}
                >
                  Welcome, {artistName}!
                </h1>
                <p className="text-xl text-muted-foreground">
                  Manage your reservations and access exclusive services
                </p>
              </div>
              <Badge className="bg-gradient-to-r from-tent-orange/10 to-tent-pink/10 text-tent-purple border-tent-purple/20">
                <Crown className="w-4 h-4 mr-2" />
                VIP Member
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-tent-blue/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Calendar
                        className="w-6 h-6"
                        style={{ color: "#6E6353" }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {myReservations.length}
                    </h3>
                    <p className="text-muted-foreground">Active Reservations</p>
                  </CardContent>
                </Card>
                <Card className="border-tent-pink/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Music className="w-6 h-6" style={{ color: "#6E6353" }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {upcomingFestivals.length}
                    </h3>
                    <p className="text-muted-foreground">Upcoming Festivals</p>
                  </CardContent>
                </Card>
                <Card className="border-tent-purple/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6" style={{ color: "#6E6353" }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Premium</h3>
                    <p className="text-muted-foreground">Membership Status</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* New Reservation Form */}
            <div className="lg:col-span-2" data-booking-form>
              <Card className="border-tent-purple/20">
                <CardHeader>
                  <h3 className="text-2xl font-bold flex items-center">
                    <Plus className="w-6 h-6 mr-2 text-tent-purple" />
                    Make New Reservation
                  </h3>
                  <p className="text-muted-foreground">
                    Book services for upcoming festivals
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Festival Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Select Festival
                    </label>
                    <div className="grid gap-3">
                      {upcomingFestivals.map((festival) => (
                        <div
                          key={festival.name}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedFestival === festival.name
                              ? "border-tent-purple bg-tent-purple/5"
                              : "border-border hover:border-tent-purple/40"
                          }`}
                          onClick={() => setSelectedFestival(festival.name)}
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={festival.image}
                              alt={festival.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-semibold">{festival.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {festival.location} • {festival.dates}
                              </p>
                            </div>
                            {selectedFestival === festival.name && (
                              <CheckCircle className="w-5 h-5 text-tent-purple ml-auto" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  {selectedFestival && (
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Select Service
                      </label>
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              selectedServices.includes(service.name)
                                ? `border-${service.color} bg-${service.color}/5`
                                : "border-border hover:border-tent-purple/40"
                            }`}
                            onClick={() => {
                              if (selectedServices.includes(service.name)) {
                                setSelectedServices(
                                  selectedServices.filter(
                                    (s) => s !== service.name,
                                  ),
                                );
                              } else {
                                setSelectedServices([
                                  ...selectedServices,
                                  service.name,
                                ]);
                              }
                            }}
                          >
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-10 h-10 bg-gradient-to-br from-${service.color} to-tent-purple rounded-lg flex items-center justify-center`}
                              >
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {service.description} • {service.duration}
                                </p>
                              </div>
                              {selectedServices.includes(service.name) && (
                                <CheckCircle className="w-5 h-5 text-tent-purple" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Date & Time Selection */}
                  {selectedServices.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium mb-2"
                        >
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium mb-2"
                        >
                          Preferred Time
                        </label>
                        <select
                          id="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-tent-purple focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  {selectedFestival &&
                    selectedServices.length > 0 &&
                    selectedDate &&
                    selectedTime && (
                      <Button
                        onClick={handleReservation}
                        className="w-full bg-gradient-to-r from-tent-purple to-tent-pink hover:from-tent-purple/90 hover:to-tent-pink/90 text-lg py-6"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Confirm Reservation
                      </Button>
                    )}
                </CardContent>
              </Card>

              {/* Additional Services Section - Only show if user has reservations */}
              {myReservations.length > 0 && (
                <Card className="border-tent-orange/20 mt-6">
                  <CardHeader>
                    <h3 className="text-2xl font-bold flex items-center">
                      <Sparkles className="w-6 h-6 mr-2 text-tent-orange" />
                      Premium Add-On Services
                    </h3>
                    <p className="text-muted-foreground">
                      Enhance your festival experience with our exclusive
                      partner services
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Barber Shop Service */}
                      <div className="p-6 border border-tent-orange/20 rounded-lg bg-gradient-to-br from-tent-orange/5 to-tent-pink/5">
                        {/* Partner Logos */}
                        <div className="flex items-center justify-center space-x-6 mb-4 p-3 bg-white/50 rounded-lg">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2F8d6b812a5232493694cbb0b580a2e5d1?format=webp&width=800"
                            alt="Funk's Barber Shop"
                            className="h-8 w-auto object-contain"
                          />
                          <div className="w-px h-8 bg-gray-300"></div>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Ff2cef598a35d45fe94196352c93f9416?format=webp&width=800"
                            alt="The Idle Hand Collective"
                            className="h-8 w-auto object-contain"
                          />
                        </div>

                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-tent-orange to-tent-pink rounded-lg flex items-center justify-center">
                            <Scissors className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-tent-orange">
                              Barber Shop
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Premium grooming experience from Funk's Barber
                              Shop or The Idle Hand Collective
                            </p>
                          </div>
                        </div>

                        {!showBarberDetails ? (
                          <>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                              <li>• Professional haircuts & styling</li>
                              <li>• Beard trimming & grooming</li>
                              <li>• Premium grooming products</li>
                              <li>�� VIP treatment & finishing</li>
                            </ul>
                            <Button
                              variant="outline"
                              className="w-full border-tent-orange/30 text-tent-orange hover:bg-tent-orange/10"
                              onClick={() => setShowBarberDetails(true)}
                            >
                              Book Barber Service
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </>
                        ) : (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h5 className="font-semibold text-tent-orange">
                                Choose Your Service
                              </h5>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setShowBarberDetails(false);
                                  setSelectedBarberService("");
                                }}
                                className="text-muted-foreground hover:text-foreground"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>

                            <div className="space-y-3 max-h-64 overflow-y-auto">
                              {barberServices.map((service) => (
                                <div
                                  key={service.id}
                                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                                    selectedBarberService === service.id
                                      ? "border-tent-orange bg-tent-orange/10"
                                      : "border-border hover:border-tent-orange/40"
                                  }`}
                                  onClick={() =>
                                    setSelectedBarberService(service.id)
                                  }
                                >
                                  <div className="flex items-start space-x-3">
                                    <span className="text-lg">
                                      {service.icon}
                                    </span>
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between">
                                        <h6 className="font-medium text-sm">
                                          {service.name}
                                        </h6>
                                        <span className="text-xs text-tent-orange font-medium">
                                          {service.price}
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {service.description}
                                      </p>
                                      <div className="flex items-center mt-2">
                                        <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground">
                                          {service.duration}
                                        </span>
                                        {selectedBarberService ===
                                          service.id && (
                                          <CheckCircle className="w-4 h-4 ml-auto text-tent-orange" />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {selectedBarberService && (
                              <Button
                                className="w-full bg-gradient-to-r from-tent-orange to-tent-pink hover:from-tent-orange/90 hover:to-tent-pink/90"
                                onClick={() => {
                                  const selectedServiceDetails =
                                    barberServices.find(
                                      (s) => s.id === selectedBarberService,
                                    );
                                  const serviceName = `Barber Shop - ${selectedServiceDetails?.name}`;
                                  setSelectedServices([
                                    ...selectedServices,
                                    serviceName,
                                  ]);
                                  setShowBarberDetails(false);
                                  setSelectedBarberService("");
                                  document
                                    .querySelector("[data-booking-form]")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                }}
                              >
                                Continue to Booking
                                <Calendar className="w-4 h-4 ml-2" />
                              </Button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Normatec Chairs Service */}
                      <div className="p-6 border border-tent-blue/20 rounded-lg bg-gradient-to-br from-tent-blue/5 to-tent-purple/5">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-tent-blue to-tent-purple rounded-lg flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-tent-blue">
                              Normatec Chairs
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Advanced recovery therapy
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                          <li>• Compression therapy technology</li>
                          <li>• Muscle recovery & circulation</li>
                          <li>• Pre & post-performance sessions</li>
                          <li>• Relaxing 30-minute treatment</li>
                        </ul>
                        <Button
                          variant="outline"
                          className="w-full border-tent-blue/30 text-tent-blue hover:bg-tent-blue/10"
                          onClick={() => {
                            setSelectedServices([
                              ...selectedServices,
                              "Normatec Chairs",
                            ]);
                            // Scroll to booking form
                            document
                              .querySelector("[data-booking-form]")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Book Recovery Session
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-tent-purple/10 to-tent-pink/10 rounded-lg border border-tent-purple/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Crown className="w-5 h-5 text-tent-purple" />
                        <span className="font-semibold text-tent-purple">
                          VIP Member Benefits
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        As a VIP member, enjoy priority booking and exclusive
                        access to our premium partner services. All services are
                        available at participating festivals.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* My Reservations */}
            <div>
              <Card className="border-tent-blue/20">
                <CardHeader>
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-tent-blue" />
                    My Reservations
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {myReservations.map((reservation) => (
                    <div
                      key={reservation.id}
                      className="p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm">
                          {reservation.festival}
                        </h4>
                        <Badge
                          className={`text-xs ${getStatusColor(reservation.status)}`}
                        >
                          {reservation.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {reservation.service}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {reservation.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {reservation.time}
                        </span>
                      </div>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    style={{ borderColor: "#A2B29F", color: "#A2B29F" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#A2B29F10")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    View All Reservations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F669056b1b03f448b9ee2fa2d9e73b3a1%2Fd552d3dff3c64d3ca968ef25827c341c?format=webp&width=800"
                alt="The Tent Logo"
                className="w-6 h-6"
              />
              <span className="text-xl font-bold" style={{ color: "#A2B29F" }}>
                THE TENT
              </span>
            </div>
            <div className="flex space-x-6 text-muted-foreground text-sm">
              <a
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Support
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
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
