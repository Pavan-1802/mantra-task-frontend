import { useState, useEffect } from "react";
import BookingsTable from "../components/BookingsTable";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/bookings`
      );
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="bg-white shadow-md">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-8xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Link to="/" className="bg-white backdrop-blur-sm p-3 rounded-full">
                <ArrowLeft className="w-6 h-6 text-amber-500" />
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Admin Dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-600 mb-4"></div>
            <p className="text-gray-600 font-medium">Loading bookings...</p>
          </div>
        ) : (
          <BookingsTable bookings={bookings} />
        )}
      </main>
    </div>
  );
}
