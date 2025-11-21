import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Award,
  Heart,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Accommodations",
    "Activities",
    "Dining",
    "Gallery",
    "Contact",
  ];

  const services = [
    "Spa & Wellness",
    "Adventure Sports",
    "Conference Halls",
    "Wedding Events",
    "Room Service",
    "Travel Desk",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4">
              Heritage Resort
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Immerse yourself in luxury nestled within nature's embrace. Where every moment becomes a cherished memory.
            </p>
            <div className="flex items-center gap-2 text-amber-500 mb-4">
              <Award className="w-5 h-5" />
              <span className="text-sm font-semibold">5-Star Rated Resort</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="w-4 h-4 fill-current text-red-500" />
              <span className="text-sm">Trusted by 10,000+ guests</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-500 hover:translate-x-1 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:text-amber-500" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-500 hover:translate-x-1 transition-all duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:text-amber-500" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-amber-500 group-hover:text-white flex-shrink-0" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    123 Mountain View Road
                    <br />
                    Heritage Valley, HV 12345
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-amber-500 group-hover:text-white flex-shrink-0" />
                </div>
                <a
                  href="mailto:info@heritageresort.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  info@heritageresort.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-slate-700 p-2 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-amber-500 group-hover:text-white flex-shrink-0" />
                </div>
                <a
                  href="tel:+919078563412"
                  className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  +91 9078563412
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Connect with us</p>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:scale-110 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:scale-110 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:scale-110 transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 mb-8 border border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400 text-sm">
                Get exclusive deals and updates delivered to your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-slate-900 text-gray-300 rounded-lg border border-slate-600 focus:outline-none focus:border-amber-500 transition-colors w-full sm:w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Heritage Resort. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-amber-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-amber-500 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}