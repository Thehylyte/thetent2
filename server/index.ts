import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleArtistRegistration,
  handleGetRegistrations,
} from "./routes/artist-registration";

export function createServer() {
  console.log("🚀 Creating Express server...");
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  console.log("📦 Setting up API routes...");

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  console.log("🎨 Registering artist registration routes...");
  console.log("handleArtistRegistration:", typeof handleArtistRegistration);
  console.log("handleGetRegistrations:", typeof handleGetRegistrations);

  app.post("/api/artist-registration", handleArtistRegistration);
  app.get("/api/artist-registrations", handleGetRegistrations);

  console.log("✅ Express server created with routes registered");
  return app;
}
