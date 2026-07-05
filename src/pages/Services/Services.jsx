import React, { useState } from "react";
import {
  Heart, ArrowRight, ShieldCheck, Users,
  Lightbulb, Sparkles, Plus, Minus, Download, FileText, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

import { servicesData } from "../../data/services";
import { productsData } from "../../data/products";

import ServiceCard from "../../components/ServiceCard/ServiceCard";
import FinalCTA from "../../components/CTA/FinalCTA";
import Modal from "../../components/Modal/Modal";

const Services = () => {

  const [modalType, setModalType] = useState("service");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [openFaq, setOpenFaq] = useState(0);

  const openModal = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
    setIsModalOpen(true);
  };

  const faqs = [
    { q: "Who can receive services?", a: "ChildSpring services are available to neurodiverse children (Autism, ADHD, NDDs), their parents, mainstream school teachers, and community organizations seeking support and education." },
    { q: "How do I get support?", a: "You can book a consultation directly through our Contact Us page. We will schedule an initial assessment to understand your unique needs and recommend a personalized plan." },
    { q: "Can schools collaborate?", a: "Absolutely. We partner with mainstream schools to train their educators and help them implement inclusive, child-friendly classroom environments." },
    { q: "Are resources available for parents?", a: "Yes! We offer extensive parent counseling, Positive Parenting certificate courses, and free downloadable resources to empower families at home." },
    { q: "How can I contact ChildSpring?", a: "You can reach us via our hotline at 01724-723668, email us at childspringbd@gmail.com, or visit our center in Barishal." }
  ];

  return (
    <div className="bg-bg-main min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-primary to-teal-900">


        {/* Soft Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-sky-200 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Professional Care & Guidance</span>
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight max-w-5xl drop-shadow-lg">
            Our Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FF8A66] to-[#FFE0D0]">Products</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-6 text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed font-light drop-shadow">
            Supporting children, empowering parents, strengthening schools, and creating inclusive communities through expert services and educational resources.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="mt-10 flex justify-center items-center">
            <Link to="/contact" className="px-8 py-4 bg-white text-primary rounded-xl font-heading font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Curved Divider at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden translate-y-px">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 sm:h-24">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.42,122.9,190.72,110.1,235.88,100.5,280.24,81.1,321.39,56.44Z" className="fill-bg-main"></path>
          </svg>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 sm:py-28 bg-bg-main relative">
        <div className="max-w-7xl mx-auto px-4 sm:6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70" />
              <img
                loading="lazy" decoding="async"
                src="/core/image/services/autism-support.png"
                onError={(e) => { e.target.src = '/core/image/programs/community.png'; }}
                alt="Comprehensive Support"
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full border-4 border-white/50"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] border border-border-divider/50 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-secondary">360°</h4>
                    <p className="text-xs text-text-secondary font-bold uppercase tracking-wider">Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-secondary leading-tight">
                Comprehensive Support for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Children, Parents, and Communities</span>
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed pl-5 border-l-4 border-accent bg-gradient-to-r from-accent/5 to-transparent py-3 rounded-r-2xl">
                At ChildSpring, we recognize that a child's environment is just as crucial as their individual development. That is why our ecosystem extends far beyond standard therapy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Autism and NDD support", "Child development",
                  "Parent counseling", "Positive parenting education",
                  "Teacher development", "Community awareness"
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-border-divider/40 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-500 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-secondary font-heading font-bold text-sm group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROFESSIONAL SERVICES */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-bg-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary mb-4">
              Our Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
            </h2>
            <p className="text-text-secondary text-lg">Providing personalized support and professional guidance for every stage of a child's development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((serv, idx) => (
              <ServiceCard key={serv.id} serv={serv} idx={idx} openModal={openModal} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PRODUCTS & RESOURCES */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
        {/* Soft elegant glows */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-success/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
              Our Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-teal-600">Resources</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">Practical tools and educational resources designed for children, parents, teachers, and professionals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((prod, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white hover:border-success/30 transition-all duration-500 overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.15)] hover:-translate-y-2 h-full">
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img
                      loading="lazy" decoding="async"
                      src={prod.image}
                      alt={prod.title}
                      onError={(e) => { e.target.src = '/core/image/programs/awareness.png'; }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5 flex flex-col flex-grow bg-white/40">
                    <h3 className="text-lg font-heading font-black text-secondary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-success group-hover:to-teal-600 transition-colors line-clamp-2">{prod.title}</h3>
                    <p className="text-sm text-text-secondary mb-5 flex-grow line-clamp-3">{prod.shortDescription}</p>

                    <button
                      onClick={() => openModal(prod, "product")}
                      className="w-full py-2.5 rounded-xl bg-white text-secondary font-heading font-bold text-sm hover:bg-gradient-to-r hover:from-success hover:to-teal-600 hover:text-white transition-all duration-500 border border-border-divider/50 hover:border-transparent flex items-center justify-center gap-2 shadow-sm"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREE RESOURCES */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Soft glowing ambient lights */}
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10" data-aos="fade-up">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight">
                Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Resources</span>
              </h2>
              <p className="text-text-secondary mt-3 text-base sm:text-lg">Download our expert-crafted checklists, guides, and awareness materials completely free of charge.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Parenting Guides", desc: "Step-by-step strategies", icon: <Users /> },
              { title: "Dev Checklists", desc: "Track milestones easily", icon: <CheckCircle2 /> },
              { title: "Worksheets", desc: "Interactive exercises", icon: <FileText /> },
              { title: "Awareness Kits", desc: "Advocacy materials", icon: <Sparkles /> },
              { title: "Brochures", desc: "Informational booklets", icon: <Lightbulb /> }
            ].map((res, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden flex items-center justify-between shadow-sm hover:shadow-[0_15px_35px_rgba(14,165,233,0.2)] hover:-translate-y-1.5 h-full">
                  {/* Full card background color change on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
                      {React.cloneElement(res.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-secondary text-base group-hover:text-white transition-all duration-300">{res.title}</h4>
                      <p className="text-xs text-text-secondary mt-0.5 group-hover:text-sky-50 transition-all duration-300">{res.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-white transition-all duration-500 shadow-sm group-hover:shadow-md overflow-hidden border border-sky-100 group-hover:border-transparent">
                    <Download className="w-5 h-5 text-sky-400 group-hover:text-sky-600 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE CHILDSPRING */}
      <section className="py-24 bg-bg-main relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-secondary">Why Choose <span className="text-primary">ChildSpring</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Expert Care", desc: "Multidisciplinary team of specialists." },
              { icon: <Users />, title: "Family-Centric", desc: "We involve parents in every step." },
              { icon: <Heart />, title: "Compassion", desc: "A loving, patient-first approach." },
              { icon: <Sparkles />, title: "Innovation", desc: "Modern, evidence-based methods." }
            ].map((feature, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="group relative bg-white rounded-3xl p-8 border border-border-divider/50 hover:border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] text-center cursor-pointer hover:-translate-y-2 overflow-hidden h-full">
                  {/* Subtle bluish border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-300/30 rounded-3xl transition-colors duration-500 pointer-events-none" />

                  <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-blue-600 group-hover:text-white transition-all duration-500 mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_rgba(14,165,233,0.3)]">
                    {React.cloneElement(feature.icon, { className: "w-10 h-10 transition-transform duration-500 group-hover:scale-110" })}
                  </div>
                  <h3 className="relative z-10 text-xl font-heading font-bold text-secondary mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-600 transition-all duration-300">{feature.title}</h3>
                  <p className="relative z-10 text-text-secondary group-hover:text-secondary/80 transition-colors duration-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
        {/* Soft elegant glows */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10" data-aos="fade-down">
            <h2 className="text-3xl sm:text-4xl font-heading font-black leading-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">We have answers. Explore our knowledge base.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 50} className="group">
                <div className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-primary/30 shadow-[0_5px_20px_rgba(43,110,235,0.08)]' : 'border-border-divider/50 hover:border-primary/20 hover:shadow-sm'}`}>

                  {/* Neon Left Border Indicator */}
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

      {/* 8. FINAL CTA */}
      <FinalCTA hideSecondaryBtn={true} />

      {/* Modal for both Services and Products */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        type={modalType}
      />
    </div>
  );
};

export default Services;
