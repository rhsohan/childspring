import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTopAndAOS = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Explicitly force AOS to re-evaluate elements after route change and instant scroll
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  }, [pathname]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic", offset: 50 });

    let timeoutId;
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        AOS.refreshHard();
      }, 150);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndAOS />
      <AppRoutes />
    </BrowserRouter>
  );
}
