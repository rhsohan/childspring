import React, { useState, useEffect } from "react";
import {
  Heart, ArrowRight,
  CheckCircle2, Star, Brain, X, Plus, Minus
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  whyItMatters, neurodiverseSupport, ageTips,
  trainingPrograms, faqs
} from "../../data/parenting.jsx";

import FinalCTA from "../../components/CTA/FinalCTA";

const PositiveParenting = () => {
  useEffect(() => {
    // AOS is now handled globally in App.jsx via MutationObserver
  }, []);

  const [activeTab, setActiveTab] = useState("early");
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="bg-bg-main min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-[#0a1930] to-primary">
        <div className="absolute inset-0 bg-[url('/core/image/parenting/hero_bg.png')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930]/90 via-primary/60 to-transparent" />

        {/* Soft Glowing Orbs & Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-accent/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center pt-10">
          <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-sky-200 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8">
            <Heart className="w-4 h-4 text-accent animate-pulse-soft" />
            <span>Raising Children with Love and Understanding</span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-lg mb-6">
            Positive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-accent to-[#FF8A66] animate-gradient-text">Parenting</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-50/90 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 text-shadow-sm font-light">
            Building stronger families through love, guidance, respect, and understanding so that every child can grow, learn, and bloom.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-4">
            <a href="#training" className="relative overflow-hidden group/btn bg-gradient-accent text-white px-8 py-3.5 rounded-full font-heading font-semibold shadow-[0_0_20px_rgba(241,88,51,0.4)] hover:shadow-[0_0_40px_rgba(241,88,51,0.8)] hover:scale-105 transition-all duration-500 flex items-center gap-2">
              <span className="relative z-10">Join Our Training</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 px-8 py-3.5 rounded-full font-heading font-semibold hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Learn About Parenting
            </a>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" style={{ fill: "var(--color-bg-main)" }} />
          </svg>
        </div>
      </section>

      {/* Inspirational Quote Banner */}
      <section className="bg-bg-main py-12 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl font-heading font-bold text-secondary italic">
            "Children grow best when they feel <span className="text-primary">loved, understood,</span> and <span className="text-accent">supported.</span>"
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <img loading="lazy" decoding="async"
                src="/core/image/parenting/intro_illustration.png"
                alt="Parents reading with child"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-6">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">Positive Parenting?</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Positive parenting is a compassionate, evidence-based approach that focuses on developing a strong, deeply committed relationship between parent and child based on communication and mutual respect. It replaces harsh discipline with guidance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Respect', 'Communication', 'Understanding', 'Encouragement', 'Emotional support', 'Healthy boundaries'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="font-heading font-bold text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY IT MATTERS (Glass Cards) */}
      <section className="py-20 sm:py-28 bg-blue-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
            Why Positive Parenting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500">Matters</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-text-secondary text-lg max-w-2xl mx-auto mb-16">
            When children are raised in a supportive environment, they develop the emotional intelligence and resilience needed to thrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItMatters.map((feature, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="bg-white rounded-3xl p-6 border border-border-divider/50 hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] transition-all duration-500 hover:-translate-y-2 text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                    {React.cloneElement(feature.icon, { className: "w-8 h-8 transition-transform duration-500 group-hover:scale-110" })}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed group-hover:text-secondary/90 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEURODIVERSE SUPPORT */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
              Positive Parenting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-400 to-green-500">Neurodiverse Children</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Every child learns and develops differently. Neurodiverse children often need extra understanding, patience, and individualized support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neurodiverseSupport.map((item, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100 hover:from-teal-400 hover:via-emerald-400 hover:to-green-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] cursor-pointer h-full">
                  <div className="bg-emerald-50/80 group-hover:bg-white w-full h-full rounded-[15px] px-5 py-6 text-center flex flex-col justify-center items-center transition-all duration-500">
                    <h4 className="font-heading font-black text-xl text-emerald-950 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-500 mb-3">{item.title}</h4>
                    <div className="w-8 h-1 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full mb-4 opacity-40 group-hover:w-16 group-hover:opacity-100 transition-all duration-500" />
                    <p className="text-emerald-900/70 font-medium text-sm sm:text-base leading-relaxed group-hover:text-emerald-950/90 transition-colors duration-500">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARENTING TIPS BY AGE (Tabs) */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Soft bluish glows */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-200/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
            Positive Parenting at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Every Stage</span>
          </h2>

          <div className="mt-12 bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_15px_40px_rgba(14,165,233,0.1)] p-4 sm:p-8 border border-sky-100">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {ageTips.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-heading font-bold text-sm sm:text-base transition-all duration-500 border border-transparent ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white shadow-[0_10px_20px_rgba(14,165,233,0.3)] scale-105'
                    : 'bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-left bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/30 rounded-2xl p-6 sm:p-10 border border-sky-100 min-h-[250px] shadow-inner">
              {ageTips.map((tab) => (
                <div key={tab.id} className={`transition-opacity duration-500 ${activeTab === tab.id ? 'block animate-fade-in-up' : 'hidden'}`}>
                  <h3 className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-6">{tab.label}</h3>
                  <ul className="space-y-4">
                    {tab.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-sky-200">
                          <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        </div>
                        <p className="text-secondary text-lg leading-relaxed">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRAINING PROGRAMS */}
      <section id="training" className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
              Learn and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-blue-500">Grow as a Parent</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Join our expert-led training programs, workshops, and certificate courses to master positive parenting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((prog, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="bg-white rounded-3xl border border-border-divider/50 overflow-hidden hover:shadow-[0_20px_40px_rgba(43,110,235,0.1)] transition-all duration-500 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img loading="lazy" decoding="async" src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow text-center">
                    <h3 className="text-2xl font-heading font-bold text-secondary mb-3">{prog.title}</h3>
                    <p className="text-text-secondary mb-8 flex-grow">{prog.desc}</p>
                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="w-full py-4 rounded-xl font-heading font-bold text-primary bg-blue-50 hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs (Compact Light Theme) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10" data-aos="fade-down">
            <h2 className="text-3xl sm:text-4xl font-heading font-black leading-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-teal-500">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">We have answers. Explore our knowledge base.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50} className="group">
                <div className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-primary/30 shadow-[0_5px_20px_rgba(43,110,235,0.08)]' : 'border-border-divider/50 hover:border-primary/20 hover:shadow-sm'}`}>
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300 ${openFaq === idx ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/50'}`} />
                  <div
                    className="flex justify-between items-center cursor-pointer py-4 px-5 sm:px-6"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl sm:text-2xl font-heading font-black text-border-divider/60 group-hover:text-primary/30 transition-colors">0{idx + 1}</span>
                      <h4 className={`font-heading font-bold text-base sm:text-lg transition-colors duration-300 ${openFaq === idx ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>{faq.q}</h4>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 border ${openFaq === idx ? 'rotate-180 bg-gradient-to-br from-emerald-400 to-green-500 text-white border-transparent shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-blue-50 border-transparent text-primary group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:to-green-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:rotate-90'}`}>
                      {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed pl-[3.5rem] sm:pl-[4.5rem] pr-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA hideSecondaryBtn={true} />

      {/* PROGRAM MODAL */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProgram(null)}
          />

          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-secondary hover:bg-gray-100 transition-colors z-20 shadow-sm border border-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-48 relative">
              <img loading="lazy" decoding="async" src={selectedProgram.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h2 className="text-3xl font-heading font-black text-white">{selectedProgram.title}</h2>
              </div>
            </div>

            <div className="p-8">
              <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                {selectedProgram.desc}
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent" /> Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.highlights.map((h, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium">{h}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold text-secondary mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" /> Objectives
                  </h4>
                  <ul className="space-y-3">
                    {selectedProgram.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border-divider/50 flex justify-end">
                <Link to="/contact" className="bg-gradient-accent text-white px-8 py-3 rounded-xl font-heading font-bold hover:scale-105 transition-transform shadow-lg">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PositiveParenting;
