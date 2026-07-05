import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#08152c] text-white pt-10 sm:pt-16 pb-6 overflow-hidden border-t border-white/5">
      
      {/* Premium Ambient Background Effects */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Elegant Top Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-5 pr-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500 p-1">
                <img
                  src="/core/image/logo/logo-round.png"
                  alt="ChildSpring Logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-full bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200 leading-none group-hover:from-accent group-hover:to-white transition-colors duration-500">
                  ChildSpring
                </span>
                <span className="text-[11px] text-accent font-bold tracking-widest uppercase mt-1 leading-none">
                  Love . Care . Support
                </span>
              </div>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm">
              A complete, compassionate ecosystem dedicated to supporting neurodiverse children and empowering families through expert clinical support, inclusive schooling, and parenting guidance.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-gradient-accent hover:border-transparent flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)]" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-gradient-accent hover:border-transparent flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)]" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-gradient-accent hover:border-transparent flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)]" aria-label="Youtube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-gradient-accent hover:border-transparent flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_5px_15px_-5px_rgba(0,0,0,0.5)]" aria-label="Linkedin">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-heading font-black mb-4 flex flex-col">
              <span className="text-white drop-shadow-sm">Quick Links</span>
              <span className="w-8 h-1 bg-gradient-to-r from-accent to-transparent mt-2 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "Our Programs", path: "/programs" },
                { name: "Services & Products", path: "/services" },
                { name: "Parenting", path: "/parenting" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-blue-100/70 hover:text-white text-sm transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 text-accent transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-heading font-black mb-4 flex flex-col">
              <span className="text-white drop-shadow-sm">Our Services & Products</span>
              <span className="w-8 h-1 bg-gradient-to-r from-accent to-transparent mt-2 rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Autism & NDD Support", path: "/services#autism" },
                { name: "Child Development", path: "/services#development" },
                { name: "Parent Counselling", path: "/services#counselling" },
                { name: "Education & Training", path: "/services#education" }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to="/services"
                    className="text-blue-100/70 hover:text-white text-sm transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 text-accent transition-all duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-heading font-black mb-4 flex flex-col">
              <span className="text-white drop-shadow-sm">Contact Info</span>
              <span className="w-8 h-1 bg-gradient-to-r from-accent to-transparent mt-2 rounded-full" />
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3 text-sm text-blue-100/70 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors shadow-inner">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="mt-1">Khan House, Kalu Khan Road, 2nd Lane, Ward No-13, Dakshin Alekanda, Barishal-8200</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-blue-100/70 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors shadow-inner">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+8801724723668" className="hover:text-white transition-colors mt-0.5">01724-723668</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-blue-100/70 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors shadow-inner">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:childspringbd@gmail.com" className="hover:text-white transition-colors mt-0.5">childspringbd@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom divider and copy information */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-blue-100/50">
          <p>
            &copy; {new Date().getFullYear()} ChildSpring. All rights reserved.
          </p>
          <p className="flex items-center text-xs tracking-wider uppercase font-bold text-blue-100/70">
            Made with <Heart className="w-3.5 h-3.5 text-accent fill-accent mx-2 animate-pulse" /> for every family
          </p>
        </div>
      </div>
    </footer>
  );
}
