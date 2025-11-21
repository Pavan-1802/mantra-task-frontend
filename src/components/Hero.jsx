import { useState } from "react";
import { Link } from "react-router";

export default function Hero() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80)] bg-cover bg-center bg-fixed"
        style={{ transform: 'scale(1.1)' }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-300/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/15 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-5xl space-y-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
            <div className="text-amber-400 text-sm tracking-[0.3em] uppercase font-light">
              Escape • Relax • Rejuvenate
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6">
            <span className="inline-block hover:text-amber-400 transition-colors duration-500">Heritage</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 inline-block">
              Resort
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-100 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-amber-400 font-medium">timeless elegance</span> meets <span className="text-amber-400 font-medium">natural serenity</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link 
              to="/booking"
              className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-lg font-semibold rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-amber-500/50 hover:scale-105"
            >
              <span className="relative z-10">Book Your Escape</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 pt-12 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">Luxury Suites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">5★</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wider text-gray-300">Concierge</div>
            </div>
          </div>
        </div>
        {showBookingModal && <BookingModal onClose={() => setShowBookingModal(false)} />}
      </div>
    </section>
  );
}