import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleArtistRegistration,
  handleGetRegistrations,
} from "./routes/artist-registration";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API routes (without /api prefix since middleware adds it)
  app.get("/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/demo", handleDemo);
  app.post("/artist-registration", handleArtistRegistration);
  app.get("/artist-registrations", handleGetRegistrations);

  return app;
}
