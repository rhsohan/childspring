import React from "react";
import {
  Phone, Mail, MapPin, Share2, MessageCircle,
  ArrowRight, Clock, Map, PhoneCall, CheckCircle2,
  AlertTriangle, Send, Lightbulb, Globe
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import FinalCTA from "../../components/CTA/FinalCTA";
import {
  contactInfo, socialLinks, officeHours
} from "../../data/contact.jsx";

const Contact = () => {


  return (
    <div className="bg-bg-main min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-[#0a1930] to-primary">
        <div className="absolute inset-0 bg-[url('/core/image/contact/hero_bg.png')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930]/90 via-primary/60 to-transparent" />

        {/* Soft Glowing Orbs & Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-accent/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center pt-10">
          <div data-aos="fade-down" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest text-sky-200 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8">
            <MessageCircle className="w-4 h-4 text-accent animate-pulse-soft" />
            <span>We Are Here to Help</span>
            <MessageCircle className="w-4 h-4 text-accent animate-pulse-soft" />
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight max-w-4xl drop-shadow-lg mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-accent to-[#FF8A66] animate-gradient-text">Us</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="text-blue-50/90 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 text-shadow-sm font-light">
            Whether you are seeking support for your child, looking for parenting guidance, or interested in collaborating with us, we would love to hear from you.
          </p>

          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${contactInfo.phonePrimary}`} className="relative overflow-hidden group/btn bg-gradient-accent text-white px-8 py-3.5 rounded-full font-heading font-semibold shadow-[0_0_20px_rgba(241,88,51,0.4)] hover:shadow-[0_0_40px_rgba(241,88,51,0.8)] hover:scale-105 transition-all duration-500 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Call Us</span>
            </a>
            <a href={`mailto:${contactInfo.emailOfficial}`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 px-8 py-3.5 rounded-full font-heading font-semibold hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" style={{ fill: "white" }} />
          </svg>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <img loading="lazy" decoding="async"
                src="/core/image/contact/welcome.png"
                alt="Parents speaking with specialists"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-6">
                Let's Connect and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Grow Together</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                At ChildSpring, every child and every family matters. We welcome parents, educators, schools, organizations, and community members who want to connect, learn, collaborate, or seek guidance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Friendly Support', 'Expert Guidance', 'Open Communication', 'Community Focus'].map((item, i) => (
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

      {/* 3. GET IN TOUCH (Large Cards) */}
      <section className="pt-20 sm:pt-28 pb-10 sm:pb-16 bg-blue-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1: Visit Us (Emerald Theme) */}
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-border-divider/50 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] flex flex-col items-center text-center overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-blue-50 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all duration-500 group-hover:scale-110 mb-5 z-10">
                  <MapPin className="w-7 h-7 transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">Visit Us</h3>
                <p className="text-text-secondary text-sm mb-6 relative z-10 leading-relaxed">{contactInfo.address}</p>

                <div className="mt-auto relative z-10">
                  <a href="#map" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-emerald-500 transition-colors gap-2">
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Call Us (Violet Theme) */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-border-divider/50 hover:border-violet-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] flex flex-col items-center text-center overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-blue-50 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-violet-400 group-hover:to-purple-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:scale-110 mb-5 z-10">
                  <Phone className="w-7 h-7 transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-300">Call Us</h3>
                <p className={`text-text-secondary font-bold text-[15px] relative z-10 ${contactInfo.phoneSecondary ? 'mb-1' : 'mb-6'}`}>{contactInfo.phonePrimary}</p>
                {contactInfo.phoneSecondary && <p className="text-text-secondary text-sm mb-6 relative z-10">{contactInfo.phoneSecondary}</p>}

                <div className="mt-auto relative z-10">
                  <a href={`tel:${contactInfo.phonePrimary}`} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-violet-500 transition-colors gap-2">
                    Call Now <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Email Us (Rose Theme) */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-border-divider/50 hover:border-rose-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(244,63,94,0.12)] flex flex-col items-center text-center overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-blue-50 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-rose-400 group-hover:to-pink-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(244,63,94,0.3)] transition-all duration-500 group-hover:scale-110 mb-5 z-10">
                  <Mail className="w-7 h-7 transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-pink-500 transition-all duration-300">Email Us</h3>
                <p className={`text-text-secondary font-bold text-sm relative z-10 break-all ${contactInfo.emailSupport ? 'mb-1' : 'mb-6'}`}>{contactInfo.emailOfficial}</p>
                {contactInfo.emailSupport && <p className="text-text-secondary text-sm mb-6 relative z-10 break-all">{contactInfo.emailSupport}</p>}

                <div className="mt-auto relative z-10">
                  <a href={`mailto:${contactInfo.emailOfficial}`} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-rose-500 transition-colors gap-2">
                    Send Email <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: Follow Us (Amber Theme) */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-border-divider/50 hover:border-amber-400 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] flex flex-col items-center text-center overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-blue-50 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all duration-500 group-hover:scale-110 mb-5 z-10">
                  <Share2 className="w-7 h-7 transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-300">Follow Us</h3>

                <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                  {socialLinks.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`px-2 py-1 bg-gray-50 rounded border border-gray-200 text-xs font-bold text-text-secondary ${link.hoverColor} hover:border-transparent hover:text-white transition-all duration-300`}>
                      {link.platform}
                    </a>
                  ))}
                </div>

                <div className="mt-auto relative z-10">
                  <span className="inline-flex items-center text-sm font-bold text-text-secondary gap-2">
                    Connect With Us <ArrowRight className="w-4 h-4 text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. VISIT US (Map) & 6. OFFICE HOURS */}
      <section id="map" className="pt-10 sm:pt-16 pb-20 sm:pb-28 bg-blue-50/30 border-y border-border-divider/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Map Container */}
            <div data-aos="fade-right" className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-border-divider/50 h-[450px] relative overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Map className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-black text-secondary">Visit ChildSpring</h3>
              </div>
              <div className="flex-grow rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                {/* Embedded Google Map (KHAN HOUSE, Barishal) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.984310425232!2d90.3511487743756!3d22.691627979407087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553590f8925db7%3A0x9ee89c4f8c2db88b!2sKHAN%20HOUSE!5e0!3m2!1sen!2sbd!4v1783242348153!5m2!1sen!2sbd"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ChildSpring Location"
                ></iframe>
              </div>
            </div>

            {/* Office Hours */}
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-black text-secondary mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8 text-accent" /> Office Hours
              </h3>

              <div className="space-y-4 mb-8">
                {officeHours.map((hour, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-5 rounded-2xl border border-border-divider/50 shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-heading font-bold text-secondary text-lg">{hour.day}</span>
                    <span className={`font-medium ${hour.time === 'Closed' ? 'text-red-500' : 'text-primary'}`}>
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-emerald-900 mb-1">Appointment Recommended</h4>
                  <p className="text-emerald-800 text-sm">We encourage scheduling appointments ahead of time to ensure the best, most attentive support experience for every family.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. STAY CONNECTED (Social Media) */}
      <section id="social" className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-secondary leading-tight mb-4">
            Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connected</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            Join our online community to stay updated on stories, events, and inspiring educational content.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {socialLinks.map((link, idx) => {
              const Icon = link.platform === "Facebook" ? FaFacebook :
                link.platform === "Instagram" ? FaInstagram :
                  link.platform === "LinkedIn" ? FaLinkedin :
                    link.platform === "YouTube" ? FaYoutube : Globe;

              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border border-border-divider/50 shadow-sm hover:-translate-y-2 transition-all duration-500"
                >
                  <div className={`absolute inset-0 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${link.platform === 'Facebook' ? 'from-blue-400 to-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.3)]' :
                    link.platform === 'Instagram' ? 'from-pink-400 via-rose-500 to-purple-600 shadow-[0_10px_30px_rgba(225,29,72,0.3)]' :
                      link.platform === 'LinkedIn' ? 'from-sky-400 to-blue-700 shadow-[0_10px_30px_rgba(3,105,161,0.3)]' :
                        link.platform === 'YouTube' ? 'from-red-400 to-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.3)]' :
                          'from-gray-400 to-gray-600'
                    }`} />
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary relative z-10 group-hover:text-white group-hover:scale-110 transition-all duration-500" />

                  {/* Tooltip / Label */}
                  <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-sm font-bold text-secondary">
                    {link.platform}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>


      {/* 10. EMERGENCY SUPPORT NOTICE */}
      <section className="py-2 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="zoom-in" className="bg-gradient-to-r from-accent to-red-500 rounded-3xl p-8 sm:p-10 text-white text-center shadow-xl relative overflow-hidden">

            <AlertTriangle className="w-12 h-12 text-white/90 mx-auto mb-4" />
            <h2 className="text-3xl font-heading font-black mb-4 relative z-10">Need Immediate Guidance?</h2>
            <p className="text-white/90 text-lg mb-8 relative z-10 max-w-2xl mx-auto">
              For urgent questions or support, please contact our team directly by phone or email. We are here to help you when you need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a href={`tel:${contactInfo.phonePrimary}`} className="bg-white text-red-500 px-8 py-3 rounded-full font-heading font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                <PhoneCall className="w-5 h-5" /> {contactInfo.phonePrimary}
              </a>
              <a href={`mailto:${contactInfo.emailOfficial}`} className="bg-red-600 border border-red-400 text-white px-8 py-3 rounded-full font-heading font-bold hover:bg-red-700 hover:border-transparent transition-all flex items-center gap-2 shadow-lg">
                <Mail className="w-5 h-5" /> {contactInfo.emailOfficial}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INSPIRATIONAL QUOTE & FINAL CTA */}
      {/* Inspirational Quote Banner */}
      <section className="bg-primary/5 py-16 border-b border-primary/10 mt-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary italic">
            "Every conversation is a step toward helping a child <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">bloom.</span>"
          </p>
        </div>
      </section>

      {/* We reuse FinalCTA but hide the secondary button as per instructions to keep CTAs focused */}
      <FinalCTA hideSecondaryBtn={false} />

    </div>
  );
};

export default Contact;
