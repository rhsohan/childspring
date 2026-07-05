import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProgramCard({ prog, idx = 0, openModal }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={idx * 50}
      className="group relative rounded-3xl p-[2px] bg-border-divider/50 hover:bg-gradient-to-br hover:from-primary hover:via-accent hover:to-secondary shadow-[0_10px_40px_-15px_rgba(3,74,110,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(23,14,179,0.25)] transition-all duration-700 ease-out hover:-translate-y-3 will-change-transform h-full"
    >
      <div className="relative h-full bg-white rounded-[22px] overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/50 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 flex-grow flex flex-col">
          {/* Poster Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-primary shrink-0">
            <img loading="lazy" decoding="async"
              src={prog.image}
              alt={prog.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
              <span className="text-white font-heading font-bold text-sm tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out drop-shadow-md">{prog.tagline}</span>
            </div>
          </div>
          {/* Info */}
          <div className="p-6 space-y-3 flex-grow">
            <h3 className="text-lg sm:text-xl font-heading font-black text-secondary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-colors duration-500 line-clamp-2 leading-tight">
              {prog.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 group-hover:text-text-primary transition-colors duration-300">
              {prog.shortDescription}
            </p>
          </div>
        </div>

        <div className="p-6 pt-0 relative z-10 mt-auto shrink-0">
          <button
            onClick={() => openModal && openModal(prog, "program")}
            className="w-full relative overflow-hidden group/btn bg-bg-section text-secondary group-hover:text-white py-3.5 rounded-xl font-heading font-semibold text-sm transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-[0_0_20px_rgba(11,107,175,0.4)] will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10">Learn More</span>
            <ArrowRight className="w-4 h-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
