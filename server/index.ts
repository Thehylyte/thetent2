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

  // API routes (without /api prefix since middleware adds it)
  app.get("/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/demo", handleDemo);

  console.log("🎨 Registering artist registration routes...");
  console.log("handleArtistRegistration:", typeof handleArtistRegistration);
  console.log("handleGetRegistrations:", typeof handleGetRegistrations);

  app.post("/artist-registration", handleArtistRegistration);
  app.get("/artist-registrations", handleGetRegistrations);

  console.log("✅ Express server created with routes registered");
  return app;
}
