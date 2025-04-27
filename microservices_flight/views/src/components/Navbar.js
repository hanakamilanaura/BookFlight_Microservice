import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Flight Booking
          </Link>
          <div className="flex space-x-4">
            <Link to="/flights" className="text-gray-700 hover:text-blue-600">
              Flights
            </Link>
            <Link to="/bookings" className="text-gray-700 hover:text-blue-600">
              My Bookings
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 