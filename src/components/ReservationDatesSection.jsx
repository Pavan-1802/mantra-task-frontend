import { Calendar } from "lucide-react";

export default function ReservationDatesSection({ dates, setDates, minimumDate }) {
  return (
    <div className="pt-6 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-amber-600" />
        Reservation Dates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="checkIn"
          >
            Check In
          </label>
          <div className="relative">
            <Calendar
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="date"
              id="checkIn"
              min={minimumDate()}
              value={dates.checkIn}
              onChange={(e) =>
                setDates({ ...dates, checkIn: e.target.value })
              }
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="checkOut"
          >
            Check Out
          </label>
          <div className="relative">
            <Calendar
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="date"
              id="checkOut"
              min={dates.checkIn || minimumDate()}
              value={dates.checkOut}
              onChange={(e) =>
                setDates({ ...dates, checkOut: e.target.value })
              }
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
