/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Artist registration request and response types
 */
export interface ArtistRegistrationRequest {
  artistName: string;
  legalName: string;
  email: string;
  phone: string;
  managerName: string;
  managementEmail: string;
  genre: string;
  yearsActive: string;
  selectedFestivals: string[];
  specialRequests: string;
  agreeToTerms: boolean;
}

export interface ArtistRegistrationResponse {
  success: boolean;
  message: string;
  registrationId?: string;
  loginCredentials?: {
    email: string;
    password: string;
  };
}
