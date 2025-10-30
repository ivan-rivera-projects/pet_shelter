/**
 * API Service Layer
 * Centralized module for all backend API calls
 *
 * This service uses axios to make HTTP requests to the AWS API Gateway backend.
 * All API endpoints are configured via environment variables for flexibility.
 */

import axios from 'axios';

// Base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_GATEWAY_URL;

// Validate that the API URL is configured
if (!API_BASE_URL) {
  console.error('VITE_API_GATEWAY_URL is not configured in .env file');
}

/**
 * Fetch all pets from the backend
 *
 * @returns {Promise<Array>} Array of pet objects
 * @throws {Error} If the API request fails
 */
export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data.pets || [];
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw new Error('Failed to fetch pets from the server');
  }
};

/**
 * Create a new adoption application
 *
 * @param {Object} applicationData - The application details
 * @param {string} applicationData.pet_id - ID of the pet being adopted
 * @param {string} applicationData.pet_name - Name of the pet
 * @param {string} applicationData.species - Species of the pet
 * @param {string} applicationData.pet_image - Image filename of the pet
 * @param {string} applicationData.applicant_name - Name of the applicant
 * @param {string} applicationData.email - Email of the applicant
 * @param {string} applicationData.phone - Phone number of the applicant
 * @returns {Promise<Object>} The created application object
 * @throws {Error} If the API request fails
 */
export const createApplication = async (applicationData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/applications`,
      applicationData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.application;
  } catch (error) {
    console.error('Error creating application:', error);
    throw new Error('Failed to submit adoption application');
  }
};

/**
 * Fetch all adoption applications
 *
 * @returns {Promise<Array>} Array of application objects
 * @throws {Error} If the API request fails
 */
export const fetchApplications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/applications`);
    return response.data.applications || [];
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw new Error('Failed to fetch applications from the server');
  }
};

/**
 * Get the S3 bucket URL for pet images
 *
 * @returns {string} The S3 bucket URL
 */
export const getPetImagesUrl = () => {
  const url = import.meta.env.VITE_PET_IMAGES_BUCKET_URL;
  if (!url) {
    console.error('VITE_PET_IMAGES_BUCKET_URL is not configured in .env file');
  }
  return url;
};
