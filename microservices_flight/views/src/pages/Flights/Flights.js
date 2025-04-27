import React, { useState, useEffect } from 'react';
import { flightAPI, bookingAPI } from '../../services/api';

function Flights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: '',
  });

  useEffect(() => {
    loadFlights();
  }, []);

  const loadFlights = async () => {
    try {
      setLoading(true);
      const response = await flightAPI.getAllFlights();
      const flightData = response.data?.data || [];
      console.log('Processed flight data:', flightData);
      setFlights(flightData);
    } catch (err) {
      console.error('Error fetching flights:', err);
      setError(err.response?.data?.message || 'Failed to load flights');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await flightAPI.searchFlights(searchParams);
      const searchResults = response.data?.data || [];
      console.log('Processed search results:', searchResults);
      setFlights(searchResults);
    } catch (err) {
      console.error('Error searching flights:', err);
      setError(err.response?.data?.message || 'Failed to search flights');
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async (flight) => {
    try {
      const userId = '1'; // TODO: replace with real auth user
      const bookingData = {
        userId,
        flightId: flight.id,
        flightNumber: flight.flight_code,
        origin: flight.from,
        destination: flight.to,
        date: flight.departure_time,
        price: flight.price || 1000000, 
        status: 'BOOKED'
      };
      
      await bookingAPI.createBooking(bookingData);
      alert('Booking successful!');
    } catch (err) {
      console.error('Booking failed:', err);
      setError('Failed to book flight');
    }
  };

  if (loading) return <div className="text-center p-4">Loading flights...</div>;
  if (error) return (
    <div className="text-center p-4">
      <p className="text-red-500">{error}</p>
      <button 
        onClick={loadFlights}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Available Flights</h1>
      
      <form onSubmit={handleSearch} className="mb-8 bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="From"
            className="border p-2 rounded"
            value={searchParams.from}
            onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
          />
          <input
            type="text"
            placeholder="To"
            className="border p-2 rounded"
            value={searchParams.to}
            onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
          />
          <input
            type="time"
            className="border p-2 rounded"
            value={searchParams.date}
            onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search Flights
        </button>
      </form>

      {flights.length === 0 ? (
        <div className="text-center text-gray-500">No flights found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flights.map((flight) => (
            <div key={flight.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg">{flight.from} → {flight.to}</h3>
              <p className="text-gray-600">Departure Time: {flight.departure_time}</p>
              <p className="text-gray-600">Flight Code: {flight.flight_code}</p>
              <p className="text-gray-600">Airline: {flight.airline_name}</p>
              <p className="text-lg font-bold text-blue-600 mt-2">
                ${flight.price?.toLocaleString() || '1,000,000'}
              </p>
              <button
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
                onClick={() => handleBooking(flight)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Flights;
