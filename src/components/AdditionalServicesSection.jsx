import { Sparkles, Mountain, Plane } from "lucide-react";

const additionalServices = [
  { id: "adventure", name: "Adventure Sports", icon: Mountain },
  { id: "spa", name: "Spa & Wellness", icon: Sparkles },
  { id: "airport", name: "Airport Transportation", icon: Plane },
];

export default function AdditionalServicesSection({ services, toggleService }) {
  return (
    <div className="pt-6 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-amber-600" />
        Additional Services
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {additionalServices.map((service) => {
          const Icon = service.icon;
          const isSelected = services.includes(service.id);
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? "border-amber-500 bg-amber-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50/50"
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <Icon size={24} />
              </div>
              <span
                className={`flex-1 text-left font-medium text-lg ${
                  isSelected ? "text-amber-900" : "text-gray-700"
                }`}
              >
                {service.name}
              </span>
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                  isSelected
                    ? "border-amber-500 bg-amber-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
