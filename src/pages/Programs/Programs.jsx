import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  BookOpen,
  Sparkles,
  Globe,
  Map,
  Lightbulb,
  HeartHandshake
} from "lucide-react";

import { programsData } from "../../data/programs";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import FinalCTA from "../../components/CTA/FinalCTA";
import Modal from "../../components/Modal/Modal";

export default function Programs() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-bg-main relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-24 text-white bg-gradient-to-br from-secondary via-[#0a1930] to-primary">
        {/* Ambient Hero Glows */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div data-aos="fade-up" className="inline-flex items-center space-x-2 bg-white/10 px-5 py-2 rounded-full text-sm font-semibold border border-white/20 text-sky-200 shadow-[0_0_30px_rgba(186,230,253,0.3)] mb-8">
            <span className="animate-pulse-soft">🌸</span>
            <span>Empowering Every Child and Family</span>
            <span className="animate-pulse-soft">🌸</span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FF8A66] to-[#FFE0D0] animate-gradient-text">Programs</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-100/90 text-lg sm:text-xl max-w-2xl font-light leading-relaxed mb-10">
            Building a world where every child belongs, every parent feels supported, and every community embraces inclusion.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-4">
            <a href="#programs-grid" className="relative overflow-hidden group/btn bg-gradient-accent text-white px-8 py-3.5 rounded-full font-heading font-semibold shadow-[0_0_20px_rgba(241,88,51,0.4)] hover:shadow-[0_0_40px_rgba(241,88,51,0.8)] hover:scale-105 transition-all duration-500 flex items-center gap-2">
              <span className="relative z-10">Explore Programs</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-y-1 group-hover/btn:rotate-90 transition-transform duration-500" />
            </a>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-3.5 rounded-full font-heading font-semibold hover:scale-105 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" style={{ fill: "var(--color-bg-main)" }} />
          </svg>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <div data-aos="fade-right" className="relative flex justify-center group/img perspective-1000">
            <div className="relative w-full max-w-lg transition-all duration-700 ease-out group-hover/img:scale-105 group-hover/img:rotate-y-3 group-hover/img:-rotate-x-2">
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent via-pink-400 to-purple-400 rounded-[2.5rem] transform rotate-3 transition-all duration-700 opacity-40 blur-xl group-hover/img:opacity-80 group-hover/img:blur-2xl" />
              <div className="absolute -inset-2 bg-gradient-to-bl from-sky-400 to-primary rounded-[2.5rem] transform -rotate-2 transition-all duration-700 opacity-0 blur-md group-hover/img:opacity-70 group-hover/img:blur-xl" />
              <div className="relative border-4 border-white/40 bg-white rounded-[2.5rem] overflow-hidden shadow-xl aspect-square flex items-center justify-center z-10">
                <img loading="lazy" decoding="async"
                  src="/core/image/programs/community.png"
                  alt="Inclusive Classroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/core/image/hero/hero-main.png";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-bg-section border border-border-divider px-4 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-wider text-primary shadow-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Our Commitment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent pb-1">
              Programs Designed for Growth, Inclusion, and Empowerment.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed text-justify">
              At ChildSpring, we go beyond basic care. Our highly structured initiatives are designed to foster holistic development across every stage of a child's life.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { text: "Child Development", icon: <Heart className="w-5 h-5 text-accent" /> },
                { text: "Positive Parenting", icon: <Users className="w-5 h-5 text-primary" /> },
                { text: "Inclusive Education", icon: <BookOpen className="w-5 h-5 text-success" /> },
                { text: "Community Building", icon: <Globe className="w-5 h-5 text-secondary" /> }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-border-divider/50 hover:shadow-md hover:border-accent/30 transition-all duration-300">
                  <div className="p-2 bg-bg-main rounded-lg">{item.icon}</div>
                  <span className="font-heading font-semibold text-text-primary">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 3. OUR PROGRAMS GRID */}
      <section id="programs-grid" className="py-20 bg-bg-section scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-sky-400 pb-2">
              Explore Our Initiatives
            </h2>
            <p className="text-lg text-text-secondary font-medium">
              Supporting children, empowering parents, strengthening schools, and building communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((prog, idx) => (
              <ProgramCard key={prog.id} prog={prog} idx={idx} openModal={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRAM JOURNEY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent pb-2">
            How Our Programs Create Impact
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success -translate-y-1/2 opacity-20 rounded-full" />
          {/* Vertical Line (Mobile) */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-primary via-accent to-success opacity-20 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {[
              { title: "Assessment", icon: <Map />, desc: "Understanding unique needs." },
              { title: "Planning", icon: <Lightbulb />, desc: "Customizing individual paths." },
              { title: "Support", icon: <HeartHandshake />, desc: "Clinical & educational care." },
              { title: "Development", icon: <Star />, desc: "Skill building & growth." },
              { title: "Inclusion", icon: <Globe />, desc: "Community integration." }
            ].map((step, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4 group relative cursor-default lg:hover:-translate-y-2 transition-transform duration-300 z-10">
                  {/* Clean White Background on Hover */}
                  <div className="absolute -inset-2 sm:-inset-4 bg-white rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl border border-primary/5 scale-95 group-hover:scale-100 -z-10 pointer-events-none" />
                  
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-bg-main shadow-md flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-accent/20 group-hover:shadow-[0_8px_20px_rgba(255,138,102,0.4)] group-hover:scale-110 transition-all duration-300 shrink-0">
                    {React.cloneElement(step.icon, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-secondary group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                    <p className="text-sm text-text-secondary mt-1 group-hover:text-secondary transition-colors duration-300">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT CARDS */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-[#e0f5eb] to-green-100 text-secondary relative overflow-hidden">
        {/* Soft ambient glows */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-success/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
            <span className="inline-flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest text-success border border-success/20 shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-success" />
              <span>Measurable Impact</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight">
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-success via-emerald-500 to-green-600 drop-shadow-sm">Positive Change</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="w-6 h-6 text-accent" />, title: "Child Development", desc: "Unlocking physical, cognitive, and social milestones through structured care." },
              { icon: <Users className="w-6 h-6 text-primary" />, title: "Family Empowerment", desc: "Equipping parents with the knowledge, tools, and emotional resilience they need." },
              { icon: <BookOpen className="w-6 h-6 text-success" />, title: "Inclusive Education", desc: "Transforming schools into welcoming spaces for neurodivergent minds." },
              { icon: <Globe className="w-6 h-6 text-secondary" />, title: "Community Awareness", desc: "Breaking stigmas and fostering widespread acceptance and integration." }
            ].map((impact, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="relative group p-px rounded-[1.5rem] bg-gradient-to-b from-white to-white/50 hover:from-white hover:to-white transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl overflow-hidden border border-success/10 hover:border-success/30 h-full">
                  <div className="bg-white/80 backdrop-blur-md rounded-[1.5rem] p-6 h-full flex flex-col items-center text-center relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 group-hover:scale-110 transition-all duration-500 will-change-transform">
                      {impact.icon}
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2 text-secondary group-hover:text-success transition-all duration-300">
                      {impact.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                      {impact.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY OUR PROGRAMS MATTER (Infographic) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent pb-1">
            Why Our Programs Matter
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-sm">The ripple effect of our holistic intervention model.</p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
          {[
            { level: "Child", color: "from-sky-400 to-blue-600" },
            { level: "Family", color: "from-emerald-400 to-green-600" },
            { level: "School", color: "from-amber-400 to-orange-500" },
            { level: "Community", color: "from-purple-400 to-fuchsia-600" },
            { level: "Society", color: "from-rose-400 to-red-600" }
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <div data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className={`flex-1 min-w-[120px] h-12 sm:h-14 rounded-2xl bg-gradient-to-r ${item.color} shadow-sm hover:shadow-lg flex items-center justify-center text-white font-heading font-bold text-xs sm:text-sm hover:-translate-y-1 transition-all duration-300 cursor-default px-4 text-center`}>
                  <span className="tracking-widest uppercase">{item.level}</span>
                </div>
              </div>
              {idx < 4 && (
                <div data-aos="fade-in" data-aos-delay={idx * 100 + 50} className="hidden md:flex text-accent shrink-0">
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 7. GALLERY (Programs in Action) */}
      <section className="py-16 sm:py-24 bg-bg-main relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <span className="inline-flex items-center justify-center space-x-2 bg-primary/10 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest text-primary mb-4">
              <Star className="w-3.5 h-3.5" />
              <span>Glimpses of Hope</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent pb-2">
              Programs in Action
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[300px]">
            {[
              { img: "/core/image/programs/child-development.png", span: "md:col-span-2 md:row-span-2", title: "Early Intervention" },
              { img: "/core/image/community/workshops.jpg", span: "md:col-span-1 md:row-span-1", title: "Community Workshops" },
              { img: "/core/image/programs/preschool.png", span: "md:col-span-1 md:row-span-1", title: "Inclusive Play" },
              { img: "/core/image/community/support-groups.jpg", span: "md:col-span-1 md:row-span-1", title: "Parent Support" },
              { img: "/core/image/programs/school-development.png", span: "md:col-span-1 md:row-span-1", title: "Teacher Training" }
            ].map((item, idx) => (
              <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100} className={`relative group overflow-hidden rounded-[2rem] bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-500 ${item.span}`}>
                <img loading="lazy" decoding="async" 
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1220]/90 via-[#0A1220]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-white font-heading font-bold text-xl sm:text-2xl drop-shadow-md">{item.title}</h3>
                    <div className="w-12 h-1.5 bg-gradient-to-r from-accent to-primary mt-3 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 origin-left" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <FinalCTA secondaryBtnText="Explore Services & Products" secondaryBtnLink="/services" />

      {/* Reusable Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        type="program"
      />
    </div>
  );
}
