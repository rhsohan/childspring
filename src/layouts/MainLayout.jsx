import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-bg-main">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Viewport */}
      <main className="flex-grow">
        {/* Key forces component remount on navigation, re-triggering all animations */}
        <div key={location.pathname}>
          <Outlet />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
