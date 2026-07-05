import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Heart, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Exclude secondary pages to check if we are on the Home page
  const isSecondaryPage =
    location.pathname.startsWith("/programs") ||
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/positive-parenting") ||
    location.pathname.startsWith("/about") ||
    location.pathname.startsWith("/contact");
  const isHomePage = !isSecondaryPage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Services & Products", path: "/services" },
    { name: "Parenting", path: "/positive-parenting" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const activeStyle = ({ isActive }) =>
    `nav-link-premium font-heading text-[13px] uppercase tracking-wider font-extrabold transition-all duration-300 relative py-1 ${isActive
      ? "text-accent active-premium"
      : "text-text-primary"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
            ? "glassmorphism shadow-md py-3.5 border-secondary/10"
            : "bg-white/80 backdrop-blur-md shadow-sm py-4 border-white/40"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Tagline Container */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-secondary/20 bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <img loading="lazy" decoding="async"
                    src="/core/image/logo/logo-round.png"
                    alt="ChildSpring Logo"
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary opacity-0 group-hover:opacity-10 text-white w-full h-full transition-opacity duration-300">
                    <Heart className="w-5 h-5 text-accent fill-accent" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-base font-heading font-black tracking-tight text-gradient leading-none">
                  ChildSpring
                </span>
                <span className="text-[8px] text-text-secondary font-bold tracking-widest uppercase mt-1 leading-none">
                  Love • Care • Support
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={activeStyle}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="flex items-center space-x-2 bg-gradient-accent text-white px-5 py-2.5 rounded-full font-heading font-semibold text-sm hover:scale-105 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Get Support</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary hover:text-accent focus:outline-none p-2 rounded-md"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed top-[72px] right-0 h-[calc(100vh-72px)] w-full bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="px-4 pt-5 pb-6 space-y-3 bg-bg-section h-full flex flex-col justify-between">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3.5 rounded-xl font-heading font-medium text-base transition-all duration-200 ${isActive
                      ? "bg-primary/10 text-primary border-l-4 border-primary font-bold"
                      : "text-text-primary hover:bg-black/5 hover:pl-6"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pb-12 border-t border-border-divider pt-6">
              <div className="text-center mb-4">
                <p className="text-xs text-text-secondary">Love • Care • Support</p>
                <p className="text-sm font-semibold text-secondary mt-1">Caring Children, Supporting Parents</p>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-gradient-accent text-white px-6 py-4 rounded-xl font-heading font-bold shadow-lg hover:shadow-xl w-full transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Get Support / Call Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Premium Colorful Border */}
        <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-secondary transition-opacity duration-500 ${!isScrolled ? 'opacity-0' : 'opacity-100 shadow-[0_0_12px_rgba(241,88,51,0.5)]'}`} />
      </nav>
      {/* Spacer to prevent header from covering content under static styles */}
      {!isHomePage && <div className="h-[72px] sm:h-[88px]"></div>}
    </>
  );
}
