import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ serv, idx, openModal }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={idx * 50}
      className="group relative rounded-3xl p-[2px] bg-border-divider/50 hover:bg-gradient-to-br hover:from-success hover:via-emerald-400 hover:to-teal-600 shadow-[0_10px_40px_-15px_rgba(3,74,110,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.25)] transition-all duration-700 ease-out hover:-translate-y-3 will-change-transform"
    >
      <div className="relative h-full bg-white rounded-[22px] overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex-grow">
          {/* Poster Image */}
          <div className="relative h-44 overflow-hidden bg-gradient-primary">
            <img 
              loading="lazy" 
              decoding="async"
              src={serv.image}
              alt={serv.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
              <span className="text-white font-heading font-bold text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {serv.tagline}
              </span>
            </div>
          </div>
          {/* Info */}
          <div className="p-5 space-y-3">
            <h3 className="text-lg font-heading font-black text-secondary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-success group-hover:to-teal-600 transition-colors duration-500 line-clamp-2">
              {serv.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 group-hover:text-text-primary transition-colors duration-300">
              {serv.shortDescription}
            </p>
          </div>
        </div>

        <div className="p-5 pt-0 relative z-10">
          <button
            onClick={() => openModal(serv, "service")}
            className="w-full relative overflow-hidden group/btn bg-bg-section text-secondary group-hover:text-white py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-500 hover:scale-105 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-success via-emerald-500 to-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10">Explore Details</span>
            <ArrowRight className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
