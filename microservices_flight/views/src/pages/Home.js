import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to Flight Booking System
      </h1>
      
      <p className="text-xl text-gray-600 mb-12">
        Book your next flight with ease and convenience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/flights"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-bold text-blue-600 mb-4">Search Flights</h2>
          <p className="text-gray-600">
            Find and book available flights to your destination
          </p>
        </Link>

        <Link
          to="/bookings"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-bold text-blue-600 mb-4">My Bookings</h2>
          <p className="text-gray-600">
            View and manage your flight bookings
          </p>
        </Link>

        <Link
          to="/profile"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 className="text-xl font-bold text-blue-600 mb-4">Profile</h2>
          <p className="text-gray-600">
            Update your personal information
          </p>
        </Link>
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Simple and straightforward flight booking process
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Best Prices</h3>
            <p className="text-gray-600">
              Competitive prices and special offers
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Customer support available around the clock
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 