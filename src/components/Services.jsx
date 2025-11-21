import { Home, Mountain, Sparkles, Utensils, Waves, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Luxury Accommodation",
      description: "Immerse yourself in elegance with our meticulously designed suites featuring panoramic views, premium furnishings, and cutting-edge amenities.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: Sparkles,
      title: "Wellness & Spa",
      description: "Rejuvenate your senses with holistic treatments, therapeutic massages, and personalized wellness journeys in our tranquil sanctuary.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Mountain,
      title: "Adventure Activities",
      description: "Embark on exhilarating experiences from mountain trekking to water sports, guided by expert instructors in breathtaking natural settings.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-5">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full tracking-wider uppercase shadow-lg">
              What We Offer
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Exceptional <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a world of luxury, adventure, and tranquility designed to create unforgettable memories
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className={`${service.bgColor} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-md group-hover:shadow-xl`}>
                      <Icon className={`w-10 h-10 ${service.iconColor} group-hover:rotate-12 transition-transform duration-500`} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 text-center">
                    <button className={`inline-flex items-center gap-2 text-sm font-semibold ${service.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}>
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>        
      </div>
    </section>
  );
}