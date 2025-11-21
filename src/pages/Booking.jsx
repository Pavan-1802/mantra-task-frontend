import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import PersonalInfoSection from "../components/PersonalInfoSection";
import ReservationDatesSection from "../components/ReservationDatesSection";
import AdditionalServicesSection from "../components/AdditionalServicesSection";

export default function Booking() {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    numberOfGuests: 1,
  });
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
  });
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const toggleService = (serviceId) => {
    setServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_BASE_URL}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: customerInfo.firstName,
          lastName: customerInfo.lastName,
          email: customerInfo.email,
          phone: customerInfo.phone,
          numberOfGuests: customerInfo.numberOfGuests,
          checkIn: dates.checkIn,
          checkOut: dates.checkOut,
          services,
        }),
      }
    );
    if (response.ok) {
      setCustomerInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        numberOfGuests: 1,
      });
      setDates({
        checkIn: "",
        checkOut: "",
      });
      setServices([]);
      navigate("/");
      toast.success("Booking submitted successfully!");
    } else {
      toast.error("Failed to submit booking. Please try again.");
    }
  };

  const minimumDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full font-medium transition-colors group"
        >
          <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </Link>

        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Book Your Stay
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in your details to reserve your perfect getaway at Heritage
            Resort
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="bg-white max-w-5xl mx-auto rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
        >
          <PersonalInfoSection
            customerInfo={customerInfo}
            setCustomerInfo={setCustomerInfo}
          />

          <ReservationDatesSection
            dates={dates}
            setDates={setDates}
            minimumDate={minimumDate}
          />

          <AdditionalServicesSection
            services={services}
            toggleService={toggleService}
          />

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transform hover:scale-[1.02] transition-all shadow-lg shadow-amber-500/30 text-lg"
            >
              Complete Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
