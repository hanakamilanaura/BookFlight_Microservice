<?php

namespace Database\Seeders;

use App\Models\Flight; // Import Flight model
use Illuminate\Database\Seeder;

class FlightSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Menambahkan 10 penerbangan dummy ke dalam tabel flights
        Flight::create([
            'flight_code' => 'GA123',
            'airline_name' => 'Garuda Indonesia',
            'departure_time' => '10:00:00',
            'from' => 'Jakarta',
            'to' => 'Bali',
        ]);

        Flight::create([
            'flight_code' => 'AI456',
            'airline_name' => 'Air India',
            'departure_time' => '11:30:00',
            'from' => 'Delhi',
            'to' => 'Mumbai',
        ]);

        Flight::create([
            'flight_code' => 'QF789',
            'airline_name' => 'Qantas Airways',
            'departure_time' => '15:00:00',
            'from' => 'Sydney',
            'to' => 'Melbourne',
        ]);

        Flight::create([
            'flight_code' => 'BA321',
            'airline_name' => 'British Airways',
            'departure_time' => '08:45:00',
            'from' => 'London',
            'to' => 'Paris',
        ]);

        Flight::create([
            'flight_code' => 'CX654',
            'airline_name' => 'Cathay Pacific',
            'departure_time' => '13:20:00',
            'from' => 'Hong Kong',
            'to' => 'Tokyo',
        ]);

        Flight::create([
            'flight_code' => 'EK987',
            'airline_name' => 'Emirates',
            'departure_time' => '16:15:00',
            'from' => 'Dubai',
            'to' => 'New York',
        ]);

        Flight::create([
            'flight_code' => 'NH234',
            'airline_name' => 'All Nippon Airways',
            'departure_time' => '19:00:00',
            'from' => 'Tokyo',
            'to' => 'Los Angeles',
        ]);

        Flight::create([
            'flight_code' => 'AF567',
            'airline_name' => 'Air France',
            'departure_time' => '17:50:00',
            'from' => 'Paris',
            'to' => 'Rome',
        ]);

        Flight::create([
            'flight_code' => 'SQ890',
            'airline_name' => 'Singapore Airlines',
            'departure_time' => '09:30:00',
            'from' => 'Singapore',
            'to' => 'Bangkok',
        ]);

        Flight::create([
            'flight_code' => 'JL123',
            'airline_name' => 'Japan Airlines',
            'departure_time' => '12:10:00',
            'from' => 'Osaka',
            'to' => 'Seoul',
        ]);
    }
}
