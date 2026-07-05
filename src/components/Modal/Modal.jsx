import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Target, Users, Sparkles, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Modal({ isOpen, onClose, item, type = "program" }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
          {/* Dark Cinematic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
          />

          {/* Premium Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white/95 backdrop-blur-xl w-full max-w-5xl h-full max-h-[90vh] rounded-[2.5rem] shadow-[0_30px_80px_-15px_rgba(3,74,110,0.5)] border border-white/40 overflow-hidden flex flex-col z-10"
          >
            {/* Elegant Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md hover:bg-white hover:text-accent text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative">
              
              {/* Header Image Banner - Cinematic */}
              <div className="relative h-72 sm:h-96 overflow-hidden bg-secondary">
                {/* Ambient Blurred Background Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-50 scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                
                <img loading="lazy" decoding="async"
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 w-full h-full object-contain p-4 drop-shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent z-10" />
                
                <div className="absolute bottom-8 left-8 right-8 z-20 text-white max-w-3xl">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      <span>{type === "program" ? "Program Overview" : "Service Details"}</span>
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight leading-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                      {item.title}
                    </h2>
                    <p className="text-blue-100 text-sm sm:text-lg font-light tracking-wide italic mt-3 max-w-2xl leading-relaxed">
                      {item.tagline}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Grid content */}
              <div className="p-6 sm:p-12 space-y-12">
                
                {/* Section 1: About & Core Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-xl">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      {type === "program" ? "About This Program" : "About This Service"}
                    </h3>
                    <p className="text-secondary/80 text-base sm:text-lg leading-loose font-medium">
                      {item.longDescription}
                    </p>
                  </div>

                  {/* Right side floating box */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-bg-section to-white p-6 rounded-3xl border border-border-divider shadow-sm space-y-6">
                      {item.whoBenefits && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4" /> Who Can Benefit
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.whoBenefits.map((beneficiary, index) => (
                              <span
                                key={index}
                                className="bg-white text-secondary border border-border-divider shadow-sm text-xs font-semibold px-3 py-1.5 rounded-lg"
                              >
                                {beneficiary}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Objectives or Included Services */}
                <div className="relative overflow-hidden rounded-[2rem] p-[2px] bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 shadow-sm">
                  <div className="relative z-10 bg-white/90 backdrop-blur-xl rounded-[30px] p-6 sm:p-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <h3 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3 mb-6 sm:mb-8">
                      <div className="p-2 bg-accent/10 rounded-xl">
                        <Target className="w-6 h-6 text-accent" />
                      </div>
                      {type === "program" ? "Key Objectives" : "Services Included"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {(type === "program" ? item.objectives : item.servicesIncluded).map((point, index) => (
                        <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-bg-section transition-colors duration-300">
                          <div className="mt-1 bg-white rounded-full shadow-sm p-1 group-hover:scale-110 transition-transform shrink-0">
                            <CheckCircle className="w-5 h-5 text-success" />
                          </div>
                          <span className="text-secondary/90 leading-relaxed font-medium text-[15px] tracking-wide">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 3: Benefits Grid */}
                {item.benefits && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                      <div className="p-2 bg-success/10 rounded-xl">
                        <Sparkles className="w-6 h-6 text-success" />
                      </div>
                      Program Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {item.benefits.map((benefit, index) => {
                        const isObject = typeof benefit === "object";
                        return (
                          <div key={index} className="group bg-white p-6 rounded-2xl border border-border-divider/60 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.2)] hover:-translate-y-1 transition-all duration-300">
                            <div className="w-10 h-10 rounded-xl bg-bg-section flex items-center justify-center mb-4 group-hover:bg-success/10 transition-colors">
                              <span className="text-success font-bold text-sm">0{index + 1}</span>
                            </div>
                            <h4 className="font-heading font-bold text-base tracking-tight text-secondary mb-2 group-hover:text-success transition-colors">
                              {isObject ? benefit.title : `Advantage ${index + 1}`}
                            </h4>
                            <p className="text-[13px] text-secondary/70 leading-relaxed font-medium tracking-wide">
                              {isObject ? benefit.description : benefit}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Section 4: Process Timeline */}
                {(item.timeline || item.process) && (
                  <div className="space-y-8 pb-4">
                    <h3 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-xl">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      Our Approach & Journey
                    </h3>
                    <div className="relative max-w-3xl ml-2 sm:ml-4">
                      {/* Timeline Line */}
                      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
                      
                      <div className="space-y-6 sm:space-y-8 pl-6 sm:pl-8">
                        {(item.timeline || item.process).map((step, index) => {
                          const isTimelineObj = typeof step === "object";
                          return (
                            <div key={index} className="relative group">
                              {/* Glowing Dot */}
                              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-[0_0_10px_rgba(11,107,175,0.4)] group-hover:scale-125 group-hover:bg-primary transition-all duration-300" />
                              
                              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-border-divider shadow-sm group-hover:shadow-md transition-shadow">
                                <h4 className="font-heading font-bold text-base tracking-tight text-secondary flex items-center gap-3 mb-2">
                                  <span className="text-[10px] uppercase tracking-wider font-extrabold bg-primary/10 text-primary px-2.5 py-1 rounded-md shrink-0">
                                    {isTimelineObj ? step.phase : `Phase ${index + 1}`}
                                  </span>
                                  {isTimelineObj ? step.title : step}
                                </h4>
                                {isTimelineObj && (
                                  <p className="text-[13px] text-secondary/70 leading-relaxed font-medium tracking-wide">
                                    {step.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Sticky Modal Footer CTA */}
            <div className="border-t border-border-divider/50 bg-white/90 backdrop-blur-xl p-3 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 z-20">
              <div className="text-center sm:text-left">
                <h4 className="font-heading font-bold text-secondary text-sm">Ready to take the next step?</h4>
                <p className="text-xs text-text-secondary mt-0.5">
                  Get in touch with our counselors for guidance.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none border border-border-divider text-text-secondary hover:text-secondary hover:border-secondary px-5 py-2 rounded-lg font-heading font-semibold text-xs transition-all duration-300"
                >
                  Cancel
                </button>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex-1 sm:flex-none relative overflow-hidden group/cta flex items-center justify-center gap-1.5 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-lg font-heading font-semibold text-xs hover:scale-105 shadow-[0_5px_15px_-5px_rgba(11,107,175,0.5)] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 whitespace-nowrap">Contact Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
