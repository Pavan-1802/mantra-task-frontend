import { formatDate } from "../../utils";

export default function BookingsTable({ bookings }) {
  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 max-w-7xl mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-amber-500 to-orange-500">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">
                Guests
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Check-In
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Check-Out
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Services
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-amber-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {booking.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {booking.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    +91 {booking.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-semibold text-gray-900">
                    {booking.numberOfGuests}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(booking.checkIn)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(booking.checkOut)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {booking.services && booking.services.length > 0 ? (
                        booking.services.map((service) => (
                          <span
                            key={service}
                            className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
                          >
                            {service}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-400 italic">None</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="w-20 h-20 mb-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <p className="text-xl font-semibold text-gray-500 mb-1">No bookings found</p>
                    <p className="text-sm text-gray-400">Bookings will appear here once created</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
