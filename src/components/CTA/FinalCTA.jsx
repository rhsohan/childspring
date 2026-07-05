import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ArrowRight } from 'lucide-react';

export default function FinalCTA({
  secondaryBtnText = "Explore Programs",
  secondaryBtnLink = "/programs",
  hideSecondaryBtn = false
}) {
  return (
    <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Massive Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div
        data-aos="zoom-in"
        className="bg-gradient-to-br from-secondary via-[#162f55] to-primary rounded-[2rem] py-10 px-6 sm:px-10 text-white relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(11,107,175,0.4)] border border-white/10 group hover:-translate-y-3 hover:shadow-[0_40px_70px_-20px_rgba(11,107,175,0.7)] hover:border-white/20 transition-all duration-700 ease-out"
      >
        {/* Ambient Inner Floaters */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/30 group-hover:scale-150 group-hover:-translate-x-10 transition-all duration-1000 ease-in-out" />
        <div className="absolute -bottom-20 -left-20 w-[20rem] h-[20rem] bg-primary/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/40 group-hover:scale-150 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-1000 ease-in-out" />

        {/* Sparkle decorative element */}
        <div className="absolute top-4 left-6 text-white/20 animate-pulse-soft hidden sm:block group-hover:text-accent group-hover:rotate-45 group-hover:scale-125 transition-all duration-700">
          <Star className="w-5 h-5" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-5">
          
          <span className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-sky-200 shadow-inner border border-white/10 group-hover:bg-white/20 transition-colors duration-500">
            <Heart className="w-3.5 h-3.5 text-accent animate-pulse-soft" />
            <span>Join The Movement</span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-[1.15] tracking-tight drop-shadow-md group-hover:scale-[1.02] transition-transform duration-700 ease-out">
            Together, Let's Help <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-sky-300">Every Child Bloom.</span>
          </h2>
          
          <p className="text-blue-100/90 text-sm sm:text-base font-medium leading-relaxed max-w-lg mx-auto">
            Join our mission of building a child-friendly society. Get in touch with us for assessments or parent support guides.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              to="/contact"
              className="bg-gradient-accent text-white px-6 py-3 rounded-full font-heading font-bold text-sm hover:scale-105 shadow-[0_10px_20px_-10px_rgba(241,88,51,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(241,88,51,0.8)] transition-all duration-300 flex items-center gap-2 group/btn"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            {!hideSecondaryBtn && (
              <Link
                to={secondaryBtnLink}
                className="bg-white/5 backdrop-blur-md text-white border border-white/20 hover:bg-white/15 px-6 py-3 rounded-full font-heading font-bold text-sm hover:scale-105 transition-all duration-300 shadow-sm"
              >
                {secondaryBtnText}
              </Link>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
