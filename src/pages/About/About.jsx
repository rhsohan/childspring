import React from "react";

import { Link } from "react-router-dom";
import { 
  Heart, ArrowRight, Users,
  Globe, Star, Smile
} from "lucide-react";
import FinalCTA from "../../components/CTA/FinalCTA";
import { 
  coreValues, journeyTimeline, initiatives, 
  partners, trustFeatures 
} from "../../data/about.jsx";

const About = () => {

  return (
    <div className="bg-bg-main min-h-screen overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-[#0a1930] to-primary">
        <div className="absolute inset-0 bg-[url('/core/image/about/hero_bg.png')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930]/90 via-primary/60 to-transparent" />
        
        {/* Soft Glowing Orbs & Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-accent/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center pt-10">
          <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-sky-200 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8">
            <Heart className="w-4 h-4 text-accent animate-pulse-soft" />
            <span>Caring Children, Supporting Parents</span>
            <Heart className="w-4 h-4 text-accent animate-pulse-soft" />
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-lg mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-accent to-[#FF8A66] animate-gradient-text">ChildSpring</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-50/90 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 text-shadow-sm font-light">
            Building a world where every child belongs, every family feels supported, and every community embraces inclusion.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/programs" className="relative overflow-hidden group/btn bg-gradient-accent text-white px-8 py-3.5 rounded-full font-heading font-semibold shadow-[0_0_20px_rgba(241,88,51,0.4)] hover:shadow-[0_0_40px_rgba(241,88,51,0.8)] hover:scale-105 transition-all duration-500 flex items-center gap-2">
              <span className="relative z-10">Learn About Our Programs</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 px-8 py-3.5 rounded-full font-heading font-semibold hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" style={{ fill: "white" }} />
          </svg>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <img loading="lazy" decoding="async" 
                src="/core/image/about/story_collage.png" 
                alt="ChildSpring Story Collage" 
                className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700 hover:shadow-[0_20px_40px_rgba(241,88,51,0.2)]"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400">Story</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                ChildSpring was founded on a simple, yet profound belief: <strong>every child deserves love and opportunities.</strong> We saw families struggling in silence and children with immense potential being misunderstood due to neurodiversity.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                We set out to create a sanctuary—a place where every parent receives the support and guidance they need, and where every neurodiverse child is met with deep understanding and inclusive care. We believe that communities become stronger when children and families are empowered to grow together.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Every child deserves love.', 'Every parent deserves support.', 'Neurodiversity is celebrated.', 'Communities grow together.'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-rose-100 hover:bg-rose-50/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer group/bullet">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0 group-hover/bullet:bg-gradient-to-br group-hover/bullet:from-rose-400 group-hover/bullet:to-orange-400 transition-all duration-300">
                      <Heart className="w-4 h-4 text-rose-500 group-hover/bullet:text-white" />
                    </div>
                    <span className="font-heading font-bold text-secondary text-sm group-hover/bullet:text-rose-950 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-6">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500">We Are</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-text-secondary leading-relaxed mb-12">
            ChildSpring is a child development and family support organization dedicated to creating lasting, positive change in society.
          </p>
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="200">
            {['Supporting neurodiverse children', 'Empowering parents', 'Promoting positive parenting', 'Building inclusive schools', 'Raising public awareness', 'Creating a child-friendly society'].map((focus, i) => (
              <span key={i} className="px-5 py-2.5 bg-white border border-border-divider/50 rounded-full font-heading font-bold text-secondary text-sm shadow-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white hover:border-transparent hover:shadow-lg hover:-translate-y-1 cursor-pointer transition-all duration-300">
                {focus}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Vision */}
            <div data-aos="fade-right">
              <div className="bg-[#F4F7FB] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-blue-100 shadow-xl group hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl mix-blend-overlay pointer-events-none" />
                <img loading="lazy" decoding="async" src="/core/image/about/vision.png" alt="Globe and flowers" className="w-32 h-32 object-contain mb-8 group-hover:scale-110 transition-transform duration-700 origin-bottom-left" />
                
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-secondary mb-6 relative z-10">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Vision</span></h2>
                <ul className="space-y-6 relative z-10">
                  <li className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-text-secondary text-lg">An inclusive society where positive parenting is ensured and every neurodiverse child is celebrated, supported, and empowered.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p className="text-text-secondary text-lg">To lead the movement for a child-friendly, neuro-inclusive, and parenting-literate society.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <Smile className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    <p className="text-text-secondary text-lg">A world where every child belongs and blooms.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission Infographic */}
            <div data-aos="fade-left" className="relative flex flex-col items-center justify-center h-full pt-4 sm:pt-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary mb-24 text-center w-full">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Mission</span></h2>
              
              {/* Radial Layout for Desktop, Grid for Mobile */}
              <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                {/* Center Circle */}
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse-slow" />
                
                <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-br from-primary via-purple-400 to-accent shadow-[0_10px_30px_rgba(43,110,235,0.2)] hover:shadow-[0_20px_50px_rgba(241,88,51,0.3)] hover:scale-105 hover:rotate-3 transition-all duration-700 cursor-pointer group">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-center p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <span className="relative z-10 font-heading font-black text-xl sm:text-2xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent group-hover:scale-105 transition-transform duration-500">
                      Championing Children & Families
                    </span>
                  </div>
                </div>

                {/* Orbiting Items - Responsive layout (grid on mobile, absolute radial on sm+) */}
                <div className="hidden sm:block">
                  {[
                    { label: "Inclusive Care", pos: "-top-8 left-1/2 -translate-x-1/2", hover: "hover:from-blue-400 hover:to-blue-600 hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)]" },
                    { label: "Expert Support", pos: "top-1/4 -right-12", hover: "hover:from-teal-400 hover:to-emerald-500 hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)]" },
                    { label: "Special Education", pos: "bottom-1/4 -right-12", hover: "hover:from-purple-400 hover:to-indigo-500 hover:shadow-[0_15px_30px_rgba(99,102,241,0.3)]" },
                    { label: "Parent Guidance", pos: "-bottom-8 left-1/2 -translate-x-1/2", hover: "hover:from-rose-400 hover:to-orange-500 hover:shadow-[0_15px_30px_rgba(244,63,94,0.3)]" },
                    { label: "Community Building", pos: "bottom-1/4 -left-12", hover: "hover:from-sky-400 hover:to-cyan-500 hover:shadow-[0_15px_30px_rgba(6,182,212,0.3)]" },
                    { label: "Public Awareness", pos: "top-1/4 -left-12", hover: "hover:from-amber-400 hover:to-orange-500 hover:shadow-[0_15px_30px_rgba(245,158,11,0.3)]" }
                  ].map((item, i) => (
                    <div key={i} className={`absolute ${item.pos} bg-white px-5 py-2.5 rounded-full border border-primary/20 shadow-lg font-heading font-bold text-sm text-secondary whitespace-nowrap z-20 hover:scale-110 hover:bg-gradient-to-r hover:text-white hover:border-transparent transition-all duration-500 cursor-pointer ${item.hover}`}>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="sm:hidden grid grid-cols-2 gap-3 mt-8 w-full">
                 {[
                    { label: "Inclusive Care", hover: "hover:from-blue-400 hover:to-blue-600" },
                    { label: "Expert Support", hover: "hover:from-teal-400 hover:to-emerald-500" },
                    { label: "Special Education", hover: "hover:from-purple-400 hover:to-indigo-500" },
                    { label: "Parent Guidance", hover: "hover:from-rose-400 hover:to-orange-500" },
                    { label: "Community Building", hover: "hover:from-sky-400 hover:to-cyan-500" },
                    { label: "Public Awareness", hover: "hover:from-amber-400 hover:to-orange-500" }
                  ].map((item, i) => (
                    <div key={i} className={`bg-white px-3 py-3 text-center rounded-xl border border-primary/20 shadow-sm font-heading font-bold text-xs text-secondary hover:bg-gradient-to-r hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer ${item.hover}`}>
                      {item.label}
                    </div>
                  ))}
              </div>

              <p className="text-text-secondary text-center mt-12 max-w-md mx-auto italic leading-relaxed">
                "To champion the rights and development of all children by providing inclusive care, expert support, special education, guiding parents, building communities, and raising public awareness."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-20 sm:py-28 bg-blue-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-16">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="bg-white rounded-3xl p-8 border border-border-divider/50 hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2 text-left group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:text-white transition-all duration-500 mb-6 shadow-sm group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">{value.title}</h3>
                  <p className="text-text-secondary text-sm sm:text-base">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR JOURNEY */}
      <section className="py-10 sm:py-16 bg-gradient-to-br from-[#F4F7FB] to-blue-50/80 relative overflow-hidden">

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-accent">Journey</span>
          </h2>

          <div className="relative max-w-5xl mx-auto mt-4">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:-translate-x-1/2" />
            
            <div className="space-y-4 lg:space-y-4 relative z-10">
              {journeyTimeline.map((step, idx) => {
                const isEven = idx % 2 === 0;
                const nodeStyles = [
                  'bg-blue-100 text-blue-600 border-blue-200 group-hover/item:from-blue-500 group-hover/item:to-indigo-500',
                  'bg-emerald-100 text-emerald-600 border-emerald-200 group-hover/item:from-emerald-400 group-hover/item:to-teal-500',
                  'bg-rose-100 text-rose-600 border-rose-200 group-hover/item:from-rose-400 group-hover/item:to-orange-500',
                  'bg-purple-100 text-purple-600 border-purple-200 group-hover/item:from-purple-500 group-hover/item:to-pink-500',
                  'bg-amber-100 text-amber-600 border-amber-200 group-hover/item:from-amber-400 group-hover/item:to-orange-500'
                ];
                const currentNodeStyle = nodeStyles[idx % nodeStyles.length];

                return (
                  <div key={idx} data-aos={isEven ? "fade-right" : "fade-left"} data-aos-delay={idx * 100} className={`relative flex flex-col lg:flex-row items-center w-full ${isEven ? 'lg:flex-row-reverse' : ''} group/item`}>
                    
                    {/* Desktop Empty Half */}
                    <div className="hidden lg:block lg:w-1/2" />

                    {/* Timeline Node */}
                    <div className={`absolute left-6 lg:left-1/2 -translate-x-1/2 w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center font-heading font-black text-base lg:text-lg shadow-sm z-20 group-hover/item:border-transparent group-hover/item:bg-gradient-to-br group-hover/item:text-white group-hover/item:shadow-[0_10px_20px_rgba(241,88,51,0.2)] transition-all duration-500 top-4 lg:top-1/2 lg:-translate-y-1/2 ${currentNodeStyle}`}>
                      <span>{idx + 1}</span>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 text-left'}`}>
                      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border-divider/50 group-hover/item:border-transparent transition-all duration-500 group-hover/item:-translate-y-2 group-hover/item:shadow-[0_20px_40px_rgba(43,110,235,0.08)] relative overflow-hidden text-left lg:text-inherit">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-orange-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                        <span className="text-accent font-bold text-sm uppercase tracking-wider mb-2 block">{step.year}</span>
                        <h4 className="text-secondary font-heading font-bold text-xl sm:text-2xl mb-3 leading-tight group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-primary group-hover/item:to-accent transition-all duration-500">{step.title}</h4>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INITIATIVES */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">Initiatives</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We operate across multiple domains to ensure holistic development and support for families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((init, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="bg-white rounded-3xl border border-border-divider/50 overflow-hidden hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] transition-all duration-500 group flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative bg-blue-50">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img loading="lazy" decoding="async" src={init.image} alt={init.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-heading font-bold text-secondary mb-3">{init.title}</h3>
                    <p className="text-text-secondary mb-8 flex-grow">{init.desc}</p>
                    <Link to="/programs" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 9. PARTNERS */}
      <section className="py-24 bg-gradient-to-br from-[#F4F7FB] via-white to-blue-50/50 relative overflow-hidden border-b border-border-divider/30">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
          <h3 data-aos="fade-up" className="text-3xl sm:text-4xl font-heading font-black text-secondary">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">Clients & Partners</span>
          </h3>
        </div>
        
        <div className="relative w-full flex items-center justify-center z-10">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 max-w-6xl mx-auto px-4">
            {partners.map((p, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group relative flex flex-col items-center cursor-pointer">
                {/* Colorful glowing aura behind the card on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />
                
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col items-center justify-center border border-border-divider/60 group-hover:border-transparent transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(43,110,235,0.12)] group-hover:bg-white overflow-hidden z-10">
                  
                  {/* Premium top border gradient line */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Logo Image */}
                  <div className="h-16 sm:h-20 w-full flex items-center justify-center mb-3">
                    <img loading="lazy" decoding="async" 
                      src={p.logo} 
                      alt={p.name} 
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-md" 
                    />
                  </div>
                  
                  {/* Partner Name */}
                  <span className="text-xs sm:text-[13px] font-bold text-text-secondary group-hover:text-primary uppercase tracking-widest text-center transition-colors duration-300">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 11. TRUST FEATURES */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-16">
            Why Families Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500">ChildSpring</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feat, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-border-divider/50 hover:border-transparent transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] flex flex-col items-center text-center overflow-hidden h-full">
                  
                  {/* Top Border Gradient */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glowing background aura */}
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Icon Container */}
                  <div className="relative w-20 h-20 rounded-full bg-white border-2 border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] transition-all duration-500 group-hover:scale-110 z-10">
                    <div className="transform transition-transform duration-500 group-hover:scale-110">
                      {feat.icon}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <h4 className="font-heading font-bold text-xl text-secondary mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-500 transition-all duration-500">{feat.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed relative z-10 transition-colors duration-300">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INSPIRATIONAL QUOTE */}
      <section className="bg-primary/5 py-16 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary italic leading-relaxed">
            "Every child deserves to belong, to be understood, and to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">bloom.</span>"
          </p>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <FinalCTA />
      
    </div>
  );
};

export default About;
