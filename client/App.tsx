import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { initializeMobileApp } from "./mobile-init";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Lollapalooza from "./pages/Lollapalooza";
import RiotFest from "./pages/RiotFest";
import SeaHearNow from "./pages/SeaHearNow";
import CountryCalling from "./pages/CountryCalling";
import OceansCalling from "./pages/OceansCalling";
import ArtistRegistration from "./pages/ArtistRegistration";
import ArtistLogin from "./pages/ArtistLogin";
import ArtistDashboard from "./pages/ArtistDashboard";
import Founders from "./pages/Founders";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BrandPartnership from "./pages/BrandPartnership";
import AdminRegistrations from "./pages/AdminRegistrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize mobile app features
    initializeMobileApp();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/lollapalooza" element={<Lollapalooza />} />
              <Route path="/events/riot-fest" element={<RiotFest />} />
              <Route path="/events/sea-hear-now" element={<SeaHearNow />} />
              <Route
                path="/events/country-calling"
                element={<CountryCalling />}
              />
              <Route
                path="/events/oceans-calling"
                element={<OceansCalling />}
              />
              <Route
                path="/artist-registration"
                element={<ArtistRegistration />}
              />
              <Route path="/artist-login" element={<ArtistLogin />} />
              <Route path="/artist-dashboard" element={<ArtistDashboard />} />
              <Route path="/founders" element={<Founders />} />
              <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brand-partnership" element={<BrandPartnership />} />
            <Route
              path="/admin/registrations"
              element={<AdminRegistrations />}
            />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

const container = document.getElementById("root")!;
if (!container._reactRoot) {
  container._reactRoot = createRoot(container);
}
container._reactRoot.render(<App />);
