import { RequestHandler } from "express";
import { ArtistRegistrationRequest, ArtistRegistrationResponse } from "@shared/api";

// In-memory storage for demo purposes (in production, use a proper database)
const registrations: (ArtistRegistrationRequest & { id: string; timestamp: Date })[] = [];

export const handleArtistRegistration: RequestHandler = (req, res) => {
  try {
    const registrationData: ArtistRegistrationRequest = req.body;
    
    // Validate required fields
    const requiredFields = [
      'artistName', 'legalName', 'email', 'phone', 
      'managerName', 'managementEmail', 'genre', 'yearsActive'
    ];
    
    const missingFields = requiredFields.filter(field => 
      !registrationData[field as keyof ArtistRegistrationRequest] || 
      String(registrationData[field as keyof ArtistRegistrationRequest]).trim() === ''
    );
    
    if (missingFields.length > 0) {
      const response: ArtistRegistrationResponse = {
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      };
      return res.status(400).json(response);
    }
    
    // Validate email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(registrationData.email)) {
      const response: ArtistRegistrationResponse = {
        success: false,
        message: "Invalid email format"
      };
      return res.status(400).json(response);
    }
    
    if (!emailRegex.test(registrationData.managementEmail)) {
      const response: ArtistRegistrationResponse = {
        success: false,
        message: "Invalid management email format"
      };
      return res.status(400).json(response);
    }
    
    // Check if terms are agreed to
    if (!registrationData.agreeToTerms) {
      const response: ArtistRegistrationResponse = {
        success: false,
        message: "You must agree to the terms and conditions"
      };
      return res.status(400).json(response);
    }
    
    // Generate a unique registration ID
    const registrationId = `REG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Store the registration (in production, save to database)
    const newRegistration = {
      ...registrationData,
      id: registrationId,
      timestamp: new Date()
    };
    
    registrations.push(newRegistration);
    
    // Log registration for demo purposes
    console.log('New artist registration:', {
      id: registrationId,
      artistName: registrationData.artistName,
      email: registrationData.email,
      festivals: registrationData.selectedFestivals,
      timestamp: new Date().toISOString()
    });
    
    // Send success response
    const response: ArtistRegistrationResponse = {
      success: true,
      message: "Registration submitted successfully. You will receive confirmation within 48 hours.",
      registrationId
    };
    
    res.status(201).json(response);
  } catch (error) {
    console.error('Artist registration error:', error);
    const response: ArtistRegistrationResponse = {
      success: false,
      message: "Internal server error. Please try again later."
    };
    res.status(500).json(response);
  }
};

// Export function to get all registrations (for admin purposes)
export const getAllRegistrations = () => registrations;

// Admin endpoint to view all registrations
export const handleGetRegistrations: RequestHandler = (req, res) => {
  try {
    const formattedRegistrations = registrations.map(reg => ({
      id: reg.id,
      artistName: reg.artistName,
      legalName: reg.legalName,
      email: reg.email,
      phone: reg.phone,
      managerName: reg.managerName,
      managementEmail: reg.managementEmail,
      genre: reg.genre,
      yearsActive: reg.yearsActive,
      selectedFestivals: reg.selectedFestivals,
      specialRequests: reg.specialRequests,
      timestamp: reg.timestamp,
      agreeToTerms: reg.agreeToTerms
    }));

    res.status(200).json({
      success: true,
      count: registrations.length,
      registrations: formattedRegistrations
    });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({
      success: false,
      message: "Error fetching registrations"
    });
  }
};
