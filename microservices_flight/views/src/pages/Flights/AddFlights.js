import React, { useState } from 'react';
import { flightAPI } from '../../services/api';

function AddFlight() {
  const [formData, setFormData] = useState({
    flight_code: '',
    airline_name: '',
    departure_time: '',
    from: '',
    to: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    
    try {
      const response = await flightAPI.createFlight(formData);
      console.log('Flight created:', response.data);
      setMessage('Flight created successfully!');
      setFormData({
        flight_code: '',
        airline_name: '',
        departure_time: '',
        from: '',
        to: '',
      });
    } catch (err) {
      console.error('Error creating flight:', err);
      setError(err.response?.data?.message || 'Failed to create flight');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Flight</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="flight_code"
            placeholder="Flight Code"
            value={formData.flight_code}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="airline_name"
            placeholder="Airline Name"
            value={formData.airline_name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="time"
            name="departure_time"
            placeholder="Departure Time"
            value={formData.departure_time}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="from"
            placeholder="From (e.g. CGK)"
            value={formData.from}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="to"
            placeholder="To (e.g. SBY)"
            value={formData.to}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Flight'}
        </button>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </form>
    </div>
  );
}

export default AddFlight;
