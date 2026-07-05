import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Construction, Loader2 } from "lucide-react";

// Lazy load the Home component
const Home = lazy(() => import("../pages/Home/Home"));
const Programs = lazy(() => import("../pages/Programs/Programs"));
const Services = lazy(() => import("../pages/Services/Services"));
const PositiveParenting = lazy(() => import("../pages/PositiveParenting/PositiveParenting"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const About = lazy(() => import("../pages/About/About"));

// Inline placeholder for other pages
function ComingSoon({ title, subtitle }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-bg-main relative">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
      <div className="relative space-y-4 max-w-md">
        <div className="w-16 h-16 bg-accent/10 text-accent rounded-3xl flex items-center justify-center mx-auto animate-bounce">
          <Construction className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-heading font-black text-secondary">{title} Page</h2>
        <p className="text-text-secondary text-sm leading-relaxed">{subtitle}</p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:scale-105 transition-all shadow-md"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Beautiful Loading Fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-bg-main">
    <Loader2 className="w-10 h-10 text-accent animate-spin mb-4" />
    <p className="text-text-secondary font-heading font-medium animate-pulse">Loading ChildSpring...</p>
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Homepage Route */}
          <Route index element={<Home />} />

          {/* Placeholder Routes */}
          <Route path="programs" element={<Programs />} />
          <Route path="services" element={<Services />} />
          <Route path="positive-parenting" element={<PositiveParenting />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <ComingSoon
                title="404 - Not Found"
                subtitle="The page you are looking for does not exist or has been relocated."
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
