import axios from 'axios';

// Axios instance dengan konfigurasi default
const axiosInstance = axios.create();

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any auth token here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response);
    return Promise.reject(error);
  }
);

// Base URLs for each service
const USER_SERVICE_URL = 'http://localhost:8001/api';
const FLIGHT_SERVICE_URL = 'http://localhost:8002/api';
const BOOKING_SERVICE_URL = 'http://localhost:8003/api';

// Flight Service API
export const flightAPI = {
  getAllFlights: () => axiosInstance.get(`${FLIGHT_SERVICE_URL}/flights`),
  getFlightById: (id) => axiosInstance.get(`${FLIGHT_SERVICE_URL}/flights/${id}`),
  searchFlights: (params) => axiosInstance.get(`${FLIGHT_SERVICE_URL}/flights/search`, { params }),
};

// Booking Service API
export const bookingAPI = {
  createBooking: (bookingData) => axiosInstance.post(`${BOOKING_SERVICE_URL}/booking`, bookingData),
  getUserBookings: (userId) => axiosInstance.get(`${BOOKING_SERVICE_URL}/booking/user/${userId}`),
  getBookingById: (id) => axiosInstance.get(`${BOOKING_SERVICE_URL}/booking/${id}`),
  cancelBooking: (id) => axiosInstance.delete(`${BOOKING_SERVICE_URL}/booking/${id}`),
};

// User Service API
export const userAPI = {
  login: (credentials) => axiosInstance.post(`${USER_SERVICE_URL}/auth/login`, credentials),
  register: (userData) => axiosInstance.post(`${USER_SERVICE_URL}/auth/register`, userData),
  getUserProfile: (id) => axiosInstance.get(`${USER_SERVICE_URL}/user/${id}`),
  updateUserProfile: (id, userData) => axiosInstance.put(`${USER_SERVICE_URL}/user/${id}`, userData),
}; 