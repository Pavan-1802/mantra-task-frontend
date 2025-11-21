export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      alt: "Luxury resort pool with mountain view",
      span: "col-span-1 row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      alt: "Resort accommodation exterior",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      alt: "Scenic nature view from resort",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      alt: "Spa and wellness center",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
      alt: "Fine dining experience",
      span: "col-span-1 row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      alt: "Mountain adventure activities",
      span: "col-span-2 row-span-1"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Gallery
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-50 transition-transform duration-300"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Explore the beauty and luxury that awaits you at Heritage Resort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer ${image.span}`}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Text overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-lg drop-shadow-lg">{image.alt}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500 rounded-tr-lg"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
