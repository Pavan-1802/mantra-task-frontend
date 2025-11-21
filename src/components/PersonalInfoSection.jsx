import { User, Mail, Phone, Users } from "lucide-react";

export default function PersonalInfoSection({ customerInfo, setCustomerInfo }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <User className="w-6 h-6 text-amber-600" />
        Personal Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="firstName"
          >
            First Name
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              id="firstName"
              value={customerInfo.firstName}
              onChange={(e) =>
                setCustomerInfo({
                  ...customerInfo,
                  firstName: e.target.value,
                })
              }
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="John"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              id="lastName"
              value={customerInfo.lastName}
              onChange={(e) =>
                setCustomerInfo({
                  ...customerInfo,
                  lastName: e.target.value,
                })
              }
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="email"
              id="email"
              value={customerInfo.email}
              onChange={(e) =>
                setCustomerInfo({
                  ...customerInfo,
                  email: e.target.value,
                })
              }
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="john.doe@example.com"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <div className="relative flex items-center gap-2">
            <span className="text-gray-700 font-medium">+91</span>
            <Phone
              className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="tel"
              id="phone"
              value={customerInfo.phone}
              onChange={(e) =>
                setCustomerInfo({
                  ...customerInfo,
                  phone: e.target.value,
                })
              }
              required
              pattern="[0-9]{10}"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            className="block text-gray-700 mb-2 font-medium text-sm"
            htmlFor="numberOfGuests"
          >
            Number of Guests
          </label>
          <div className="relative">
            <Users
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="number"
              id="numberOfGuests"
              min="1"
              max="20"
              value={customerInfo.numberOfGuests}
              onChange={(e) =>
                setCustomerInfo({
                  ...customerInfo,
                  numberOfGuests: e.target.value,
                })
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
