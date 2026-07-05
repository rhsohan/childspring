import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Check,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Star
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Data layers
import { programsData } from "../../data/programs";
import { servicesData } from "../../data/services";
import { testimonialsData } from "../../data/testimonials";

// Modal component
import Modal from "../../components/Modal/Modal";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ProgramCard from "../../components/ProgramCard/ProgramCard";
import FinalCTA from "../../components/CTA/FinalCTA";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState("program"); // "program" or "service"
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setIsModalOpen(true);
  };

  // Stats Counters
  const stats = [
    { icon: <BookOpen className="w-8 h-8 text-primary" />, title: "🧩 Neurodiverse Support", count: "10+ Programs", desc: "Tailored clinical support" },
    { icon: <Heart className="w-8 h-8 text-accent" />, title: "❤️ Positive Parenting", count: "30+ Services", desc: "Empowering families" },
    { icon: <Users className="w-8 h-8 text-secondary" />, title: "👨‍👩‍👧 Family Guidance", count: "Endless Smiles", desc: "Every child celebrated" },
    { icon: <Award className="w-8 h-8 text-success" />, title: "🌍 Inclusive Community", count: "100% Commitment", desc: "Building inclusion" }
  ];

  // Why choose us cards
  const choices = [
    { title: "Expert Care", desc: "Access to certified child psychologists, behavioral experts, and special educators.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
    { title: "Inclusive Environment", desc: "Campuses and programs designed for children of all abilities to thrive.", icon: <Globe className="w-6 h-6 text-secondary" /> },
    { title: "Personalized Guidance", desc: "Customized IEPs and therapy charts tailored to each child's speed.", icon: <Zap className="w-6 h-6 text-accent" /> },
    { title: "Parent Empowerment", desc: "Scientific workshops and certificate modules to lower family burnout.", icon: <Heart className="w-6 h-6 text-success" /> },
    { title: "Community Building", desc: "Rallying peer support systems and neighborhood integration gatherings.", icon: <Users className="w-6 h-6 text-primary" /> },
    { title: "Holistic Development", desc: "Targeting cognitive, academic, motor, and physical intelligence channels.", icon: <Award className="w-6 h-6 text-accent" /> }
  ];

  // Initiatives list
  const initiatives = [
    { title: "Community Awareness", tag: "Movement", img: "/core/image/community/awareness.png" },
    { title: "Workshops", tag: "Training", img: "/core/image/community/workshops.jpg" },
    { title: "Seminars", tag: "Education", img: "/core/image/community/seminars.jpg" },
    { title: "Parent Support Groups", tag: "Guidance", img: "/core/image/community/support-groups.jpg" },
    { title: "School Collaborations", tag: "Inclusion", img: "/core/image/community/collaborations.jpg" }
  ];

  return (
    <div className="bg-bg-main relative min-h-screen">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen bg-hero-traffic-blue flex items-center justify-center overflow-hidden pt-40 sm:pt-25 pb-36 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left content */}
            <div className="space-y-6 group/left transition-all duration-700 hover:translate-x-3 will-change-transform" data-aos="fade-right">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20 text-sky-200 transition-all duration-500 hover:bg-white/25 hover:border-white/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(186,230,253,0.5)] cursor-default will-change-transform">
                <span className="animate-pulse-soft">🌸</span>
                <span>Welcome to ChildSpring</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight leading-tight transition-all duration-700 group-hover/left:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white animate-gradient-text transition-all duration-500 hover:brightness-125">Every Child</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FF8A66] to-[#FFE0D0] animate-gradient-text-fast drop-shadow-sm hover:drop-shadow-[0_0_15px_rgba(241,88,51,0.8)] transition-all duration-300">Belongs</span> <span className="text-white">and</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-[#A7F3D0] animate-gradient-text drop-shadow-sm hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] transition-all duration-300">Blooms</span>
              </h1>
              <p className="text-blue-100/90 text-lg max-w-xl font-light leading-relaxed text-justify transition-all duration-500 group-hover/left:text-white">
                Supporting neurodiverse children and empowering parents through expert clinical care, inclusive childhood education, and positive parenting frameworks.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/services"
                  className="relative overflow-hidden group/btn bg-gradient-accent text-white px-8 py-3.5 rounded-full font-heading font-semibold shadow-[0_0_20px_rgba(241,88,51,0.4)] hover:shadow-[0_0_40px_rgba(241,88,51,0.8)] hover:scale-110 transition-all duration-500 flex items-center gap-2 will-change-transform"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 rounded-full" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/30 hover:border-white/60 px-8 py-3.5 rounded-full font-heading font-semibold hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 will-change-transform"
                >
                  Learn About Us
                </Link>
              </div>
            </div>

            {/* Right content illustration */}
            <div className="flex justify-center group/right perspective-1000" data-aos="fade-left">
              <div className="relative w-full max-w-lg transition-all duration-700 ease-out group-hover/right:scale-105 group-hover/right:-rotate-y-3 group-hover/right:rotate-x-2 will-change-transform">
                {/* Floating graphic frames around the main illustration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent via-pink-500 to-purple-500 rounded-3xl transform rotate-3 transition-all duration-700 ease-in-out group-hover/right:rotate-6 group-hover/right:scale-110 group-hover/right:opacity-80 group-hover/right:blur-2xl opacity-40 blur-md will-change-transform" />
                <div className="absolute inset-0 bg-gradient-to-bl from-sky-400 to-primary rounded-3xl transform -rotate-2 transition-all duration-700 ease-in-out group-hover/right:-rotate-6 group-hover/right:scale-105 group-hover/right:opacity-70 group-hover/right:blur-xl opacity-0 blur-sm will-change-transform" />

                <div className="relative border-4 border-white/20 group-hover/right:border-white/60 rounded-3xl overflow-hidden shadow-2xl group-hover/right:shadow-[0_0_60px_rgba(255,255,255,0.3)] bg-white aspect-video sm:aspect-square flex items-center justify-center transition-all duration-700 z-10">
                  <img fetchpriority="high" decoding="sync"
                    src="/core/image/hero/hero-main.png"
                    alt="Happy Neurodiverse Children and Caring Parents"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/right:scale-110 group-hover/right:rotate-1 will-change-transform"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center space-y-4 bg-black/40 opacity-0 group-hover/right:opacity-100 transition-opacity duration-500">
                    <Heart className="w-16 h-16 text-accent fill-accent animate-pulse-soft group-hover/right:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(241,88,51,0.8)] will-change-transform" />
                    <span className="font-heading font-black text-xl text-white drop-shadow-md">Love, Care, Support & Growth</span>
                    <p className="text-xs text-white/90 font-medium max-w-xs drop-shadow-md">Connecting specialized therapist care, parents, and neuro-inclusive classrooms</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Curved section divider with premium glowing border */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]"
          >
            <defs>
              <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="50%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="var(--color-secondary)" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* The main solid background of the curve */}
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" style={{ fill: "var(--color-bg-main)" }} />
            {/* The glowing gradient stroke strictly tracing the top curve */}
            <path d="M0,0 C300,90 900,90 1200,0" fill="none" stroke="url(#curve-gradient)" strokeWidth="5" filter="url(#glow)" className="opacity-80" />
            <path d="M0,0 C300,90 900,90 1200,0" fill="none" stroke="white" strokeWidth="1" className="opacity-50" />
          </svg>
        </div>
      </section>

      {/* 2. FLOATING STATISTICS SECTION */}
      <section className="relative z-20 py-12 mt-8 sm:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="group relative bg-white rounded-3xl p-6 border border-white hover:border-white/50 flex flex-col justify-center items-start overflow-hidden shadow-[0_10px_40px_-15px_rgba(3,74,110,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(23,14,179,0.15)] hover:-translate-y-3 transition-all duration-500 ease-out cursor-default"
            >
              {/* Premium Background Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex items-center space-x-4 w-full">
                {/* Glowing Icon Wrapper */}
                <div className="p-3.5 bg-bg-main group-hover:bg-white rounded-2xl shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(241,88,51,0.2)] transition-all duration-500 border border-transparent group-hover:border-accent/20">
                  <div className="transform group-hover:scale-105 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] text-text-secondary font-black tracking-widest uppercase mb-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:from-accent group-hover:to-[#FF8A66] transition-all duration-700">
                    {stat.count}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-5 w-full h-px bg-gradient-to-r from-border-divider to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <p className="relative z-10 text-[13px] text-text-secondary mt-4 font-medium group-hover:text-text-primary transition-colors duration-300">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 3. ABOUT CHILDSPRING PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left illustration */}
          <div data-aos="fade-right" className="relative flex justify-center group/img perspective-1000">
            <div className="relative w-full max-w-lg transition-all duration-700 ease-out group-hover/img:scale-105 group-hover/img:rotate-y-3 group-hover/img:-rotate-x-2 will-change-transform">
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent via-pink-500 to-purple-500 rounded-[2.5rem] transform rotate-2 transition-all duration-700 ease-in-out group-hover/img:-rotate-3 group-hover/img:scale-110 group-hover/img:opacity-80 group-hover/img:blur-2xl opacity-40 blur-xl will-change-transform" />
              <div className="absolute -inset-2 bg-gradient-to-bl from-sky-400 to-primary rounded-[2.5rem] transform -rotate-1 transition-all duration-700 ease-in-out group-hover/img:rotate-3 group-hover/img:scale-105 group-hover/img:opacity-70 group-hover/img:blur-xl opacity-0 blur-md will-change-transform" />

              <div className="relative border-4 border-white/40 group-hover/img:border-white/80 bg-white rounded-[2.5rem] overflow-hidden shadow-xl group-hover/img:shadow-[0_0_50px_rgba(255,255,255,0.4)] aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center transition-all duration-700 z-10">
                <img loading="lazy" decoding="async"
                  src="/core/image/about-preview.png"
                  alt="Parents and Children Illustration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:-rotate-1 will-change-transform"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center space-y-3 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                  <Heart className="w-12 h-12 text-accent fill-accent animate-pulse-soft group-hover/img:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(241,88,51,0.8)] will-change-transform" />
                  <h4 className="font-heading font-black text-lg text-white drop-shadow-md">Celebrating Every Single Child</h4>
                  <p className="text-xs text-white/90 max-w-xs drop-shadow-md">Building an inclusive environment where difference is valued, not corrected.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content info */}
          <div data-aos="fade-left" className="space-y-6 group/text transition-all duration-700 hover:-translate-x-2 will-change-transform">
            <div className="inline-flex items-center space-x-2 bg-bg-section border border-border-divider px-4 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-wider text-primary shadow-sm group-hover/text:shadow-[0_0_20px_rgba(11,107,175,0.2)] transition-all duration-500">
              <span className="animate-pulse-soft">🌸</span>
              <span>About ChildSpring</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black leading-tight transition-all duration-500 group-hover/text:drop-shadow-[0_0_15px_rgba(3,74,110,0.1)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary group-hover/text:from-primary group-hover/text:to-secondary transition-all duration-700">Caring Children,</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF8A66] group-hover/text:drop-shadow-[0_0_15px_rgba(241,88,51,0.3)] transition-all duration-500">Supporting Parents.</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed text-justify group-hover/text:text-text-primary transition-colors duration-500">
              At ChildSpring, we are committed to creating a child-friendly, parenting-literate, and neuro-inclusive society. We believe that with the right guidance, every child belongs, blooms, and discovers their unique strengths.
            </p>
            <p className="text-text-secondary text-base leading-relaxed text-justify group-hover/text:text-text-primary transition-colors duration-500">
              We stand as a collaborative movement bridging the gaps between certified clinicians, school administration bodies, and parents looking for reliable family support networks.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="relative overflow-hidden group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-secondary to-primary text-white px-8 py-3.5 rounded-full font-heading font-semibold hover:shadow-[0_0_30px_rgba(11,107,175,0.4)] hover:scale-110 transition-all duration-500 will-change-transform"
              >
                <span className="relative z-10">Learn More About Us</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 4. VISION & MISSION SECTION */}
      <section className="py-20 bg-bg-section border-t border-b border-border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Vision card */}
            <div
              data-aos="fade-up"
              className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_40px_-15px_rgba(3,74,110,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(23,14,179,0.15)] border border-white hover:border-white/50 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/50 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:shadow-[0_0_25px_rgba(11,107,175,0.4)] flex items-center justify-center text-primary group-hover:text-white mb-6 transition-all duration-500 will-change-transform group-hover:scale-110">
                  <Star className="w-7 h-7 fill-current group-hover:animate-pulse-soft" />
                </div>
                <h3 className="text-2xl font-heading font-black text-secondary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-colors duration-500">
                  Our Vision
                </h3>
                <p className="text-text-secondary text-base leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  An inclusive society where positive parenting is ensured and every neurodiverse child is celebrated, supported, and empowered. We strive to mold local communities into welcoming homes that protect child rights and appreciate unique learning speeds.
                </p>
              </div>
              <div className="relative z-10 mt-8 border-t border-border-divider group-hover:border-primary/20 pt-6 text-sm italic font-medium text-primary flex items-center gap-2 transition-colors duration-500">
                <Heart className="w-4 h-4 text-accent fill-accent group-hover:scale-125 transition-transform duration-500" /> "Every child belongs and blooms."
              </div>
            </div>

            {/* Mission card */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_40px_-15px_rgba(3,74,110,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(74,222,128,0.15)] border border-white hover:border-white/50 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 will-change-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/50 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-success/10 group-hover:bg-success group-hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] flex items-center justify-center text-success group-hover:text-white mb-6 transition-all duration-500 will-change-transform group-hover:scale-110">
                  <Award className="w-7 h-7 fill-current group-hover:animate-pulse-soft" />
                </div>
                <h3 className="text-2xl font-heading font-black text-secondary mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-success group-hover:to-emerald-500 transition-colors duration-500">
                  Our Mission
                </h3>
                <ul className="space-y-4">
                  {[
                    "Ensure positive parenting and empower every neurodiverse child.",
                    "Lead a child-friendly, neuro-inclusive, and parenting-literate society.",
                    "Create a world where every child belongs and blooms.",
                    "Help every neurodiverse child bloom through positive parenting and expert care."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-success/20 group-hover:bg-success flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-500">
                        <Check className="w-3.5 h-3.5 text-success group-hover:text-white stroke-[3] transition-colors duration-500" />
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 5. FEATURED PROGRAMS SECTION */}
      <section className="py-24 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 group/header" data-aos="fade-up">
            <span className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm hover:shadow-[0_0_20px_rgba(11,107,175,0.2)] transition-all duration-500 cursor-default">
              <Star className="w-3.5 h-3.5 text-accent" />
              <span>Structured Solutions</span>
              <Star className="w-3.5 h-3.5 text-accent" />
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-sky-400 pb-2 transform group-hover/header:scale-105 transition-transform duration-500">
              Our Featured Programs
            </h2>
            <p className="text-lg text-text-secondary font-medium">
              Empowering children, parents, schools, and communities with systematic plans.
            </p>
          </div>

          {/* Programs Grid (4 cards in a row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.slice(0, 4).map((prog, idx) => (
              <ProgramCard key={prog.id} prog={prog} idx={idx} openModal={openModal} />
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/programs"
              className="relative overflow-hidden group/allbtn inline-flex items-center space-x-2 bg-gradient-to-r from-secondary to-primary text-white px-10 py-4 rounded-full font-heading font-extrabold uppercase tracking-wide hover:shadow-[0_0_30px_rgba(11,107,175,0.4)] hover:scale-110 transition-all duration-500 will-change-transform"
            >
              <span className="relative z-10">View All Programs</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover/allbtn:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/allbtn:translate-y-0 transition-transform duration-500 rounded-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 6. FEATURED SERVICES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 group/header" data-aos="fade-up">
          <span className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-secondary shadow-sm hover:shadow-[0_0_20px_rgba(3,74,110,0.2)] transition-all duration-500 cursor-default">
            <Star className="w-3.5 h-3.5 text-success" />
            <span>Expert Interventions</span>
            <Star className="w-3.5 h-3.5 text-success" />
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-success to-primary pb-2 transform group-hover/header:scale-105 transition-transform duration-500">
            Our Featured Services
          </h2>
          <p className="text-lg text-text-secondary font-medium">
            Providing specialized clinical, behavioral, and parenting guidance.
          </p>
        </div>

        {/* Services Grid (4 cards in a row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {servicesData.slice(0, 4).map((serv, idx) => (
            <ServiceCard key={serv.id} serv={serv} idx={idx} openModal={openModal} />
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            to="/services"
            className="relative overflow-hidden group/allbtn inline-flex items-center space-x-2 bg-gradient-to-r from-success to-secondary text-white px-10 py-4 rounded-full font-heading font-extrabold uppercase tracking-wide hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-110 transition-all duration-500 will-change-transform"
          >
            <span className="relative z-10">View All Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover/allbtn:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/allbtn:translate-y-0 transition-transform duration-500 rounded-full" />
          </Link>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 7. WHY CHOOSE SECTION */}
      <section className="py-24 bg-bg-section border-t border-b border-border-divider relative overflow-hidden">
        {/* Soft decorative shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 group/header" data-aos="fade-up">
            <span className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm hover:shadow-[0_0_20px_rgba(11,107,175,0.2)] transition-all duration-500 cursor-default">
              <Star className="w-3.5 h-3.5 text-accent" />
              <span>Trust & Support</span>
              <Star className="w-3.5 h-3.5 text-accent" />
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary pb-2 transform group-hover/header:scale-105 transition-transform duration-500">
              Why Families Trust Us
            </h2>
            <p className="text-lg text-text-secondary font-medium">
              Connecting professional integrity with a mother's warmth and clinical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {choices.map((choice, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group relative bg-white/80 backdrop-blur-md rounded-[32px] p-1 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(11,107,175,0.2)] hover:-translate-y-2 will-change-transform h-full"
              >
                {/* Premium Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[2px] bg-white rounded-[30px] z-0" />

                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 z-0" />

                <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bg-section to-white border border-border-divider shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                    <div className="text-primary group-hover:text-accent transition-colors duration-500 [&>svg]:w-7 [&>svg]:h-7">
                      {choice.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                    {choice.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {choice.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 8. POSITIVE PARENTING HIGHLIGHT */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Warm Family Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/75 via-primary/95 to-accent/90 z-10 mix-blend-multiply" />
        <img loading="lazy" decoding="async"
          src="/core/image/backgrounds/parenting-bg.jpg"
          alt="Warm Family Group Interaction"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-[100px] z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full" data-aos="zoom-in" data-aos-duration="800">

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group">

            {/* Glass panel internal reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">

              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-2 w-full lg:w-auto">
                  <Heart className="w-8 h-8 text-accent fill-accent animate-pulse-soft" />
                  <span className="text-accent text-sm font-bold tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Positive Parenting</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 tracking-tight leading-tight drop-shadow-sm">
                  Understanding is the first step.
                </h2>

                <p className="text-blue-50/90 text-sm sm:text-base font-light max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide">
                  Build stronger relationships through modern child psychology, continuous advisory guidance, and our specialized parent training modules.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to="/positive-parenting"
                  className="group/btn relative overflow-hidden inline-flex items-center justify-center space-x-2 bg-white/15 backdrop-blur-lg border border-white/30 text-white px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(241,88,51,0.4)] transition-all duration-500 hover:scale-105 will-change-transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-[#FF8A66] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Explore Modules</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headers */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <span className="inline-flex items-center justify-center space-x-2 bg-primary/10 px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-primary shadow-sm hover:shadow-md hover:bg-primary/15 transition-all duration-300">
              <Heart className="w-3.5 h-3.5 text-accent animate-pulse-soft" />
              <span>Real Stories</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-emerald-400 leading-tight tracking-tight pb-2">
              What Parents Say About Us
            </h2>
            <p className="text-lg text-text-secondary font-medium tracking-wide leading-relaxed max-w-md mx-auto lg:mx-0">
              Honest feedback from households supported by ChildSpring's specialized care programs.
            </p>
          </div>

          {/* Right Column: Clean Slider */}
          <div className="lg:col-span-7 w-full min-w-0" data-aos="fade-left">
            <style>{`
              .clean-swiper .swiper-pagination-bullet {
                background: #0b6baf;
                opacity: 0.2;
                transition: all 0.3s ease;
              }
              .clean-swiper .swiper-pagination-bullet-active {
                background: #0b6baf;
                opacity: 1;
                width: 20px;
                border-radius: 10px;
              }
            `}</style>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-16 clean-swiper"
            >
              {testimonialsData.map((test) => (
                <SwiperSlide key={test.id} className="pt-4">
                  <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-border-divider/50 relative group hover:shadow-[0_20px_50px_-15px_rgba(11,107,175,0.15)] transition-shadow duration-500 mx-2">

                    {/* Top gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-t-[2rem]" />

                    {/* Minimal Quote Icon */}
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <span className="font-serif text-4xl leading-none font-bold translate-y-1">“</span>
                    </div>

                    <p className="text-secondary/90 text-lg sm:text-xl font-medium italic leading-relaxed mb-8">
                      "{test.feedback}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-accent to-primary shrink-0">
                        <img loading="lazy" decoding="async"
                          src={test.image}
                          alt={test.name}
                          className="w-full h-full rounded-full object-cover border-2 border-white"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-black text-secondary text-base tracking-tight">
                          {test.name}
                        </h4>
                        <p className="text-text-secondary text-[11px] uppercase tracking-widest font-bold mt-0.5">
                          Parent of a {test.childAge} old
                        </p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 10. OUR INITIATIVES & COMMUNITY */}
      <section className="py-24 bg-bg-section border-t border-b border-border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 group/header" data-aos="fade-up">
            <span className="inline-flex items-center justify-center space-x-2 bg-secondary/10 px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-secondary shadow-sm hover:shadow-md hover:bg-secondary/15 transition-all duration-300">
              <Users className="w-3.5 h-3.5 text-primary animate-pulse-soft" />
              <span>Social Actions</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent pb-2">
              Our Initiatives & Community
            </h2>
            <p className="text-lg text-text-secondary font-medium tracking-wide">
              Rallying local groups, organizing awareness webinars, and modifying teacher methods.
            </p>
          </div>

          {/* Horizontal Gallery Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {initiatives.map((init, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-[0_20px_40px_-15px_rgba(11,107,175,0.3)] transition-all duration-500 will-change-transform hover:-translate-y-2 cursor-pointer border border-border-divider/50"
              >
                {/* Accent Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-3xl z-20 transition-colors duration-500 pointer-events-none" />

                <div className="relative h-64 sm:h-72 bg-bg-section overflow-hidden">
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <img loading="lazy" decoding="async"
                    src={init.img}
                    alt={init.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />

                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {init.tag}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 transform translate-y-1 group-hover:-translate-y-1 transition-transform duration-500">
                    <h3 className="font-heading font-black text-white text-lg leading-tight tracking-tight drop-shadow-md">
                      {init.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Section Divider */}
      <div className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-primary/40" />
        <div className="px-4 text-primary/40"><Star className="w-3 h-3 fill-current" /></div>
        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      {/* 11. FINAL CALL-TO-ACTION */}
      <FinalCTA secondaryBtnText="Explore Programs" secondaryBtnLink="/programs" />

      {/* Reusable Item Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        type={modalType}
      />

    </div>
  );
}
