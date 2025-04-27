import React, { useState, useEffect } from 'react';
import { bookingAPI } from '../services/api';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Get actual userId from authentication context
  const userId = '1';

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const response = await bookingAPI.getUserBookings(userId);
      setBookings(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load bookings');
      setLoading(false);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      await bookingAPI.cancelBooking(bookingId);
      // Reload bookings after cancellation
      loadBookings();
    } catch (err) {
      setError('Failed to cancel booking');
    }
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">
                  Flight {booking.flightNumber}
                </h3>
                <p className="text-gray-600">
                  {booking.origin} → {booking.destination}
                </p>
                <p className="text-gray-600">
                  Date: {new Date(booking.date).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  Booking Reference: {booking.bookingReference}
                </p>
                <p className="text-gray-600">
                  Status: <span className="font-semibold">{booking.status}</span>
                </p>
              </div>
              
              <button
                onClick={() => handleCancelBooking(booking.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                disabled={booking.status === 'CANCELLED'}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))}

        {bookings.length === 0 && (
          <div className="text-center text-gray-500">
            You don't have any bookings yet.
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings; 