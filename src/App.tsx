import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ScrollToTop from './components/utils/ScrollToTop.tsx';
import SplashScreen from './components/utils/SplashScreen.tsx';
import CookiePopup from './components/utils/CookiePopup.tsx';
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Activities from "./pages/Activities.tsx";
import Contact from "./pages/Contact.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiesPolicy from "./pages/CookiesPolicy.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";

// Register plugins outside the component
gsap.registerPlugin(ScrollTrigger, useGSAP);

function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('hasSeenSplash');
  });

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      sessionStorage.setItem('hasSeenSplash', 'true');
    } else {
      document.body.style.overflow = '';
    }
  }, [showSplash]);

  // useGSAP handles cleanup and re-renders more reliably than useEffect
  useGSAP(() => {
    // Refresh ScrollTrigger whenever the route changes
    ScrollTrigger.refresh();

    // Optional: If you have global animations, define them here
    return () => {
      // Manual cleanup of all triggers if needed on route leave
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [location.pathname] });

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="relative flex flex-col min-h-screen">
        {/* Background Gradients (Tailwind version) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#07143f]/30 to-[#4e47c6]/20" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#07143f]/20 to-[#4e47c6]/10" />

      <main className="relative z-20 flex-grow flex flex-col">
        <Header />
        <div className="flex-grow min-h-[100vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activites" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </div>
        <Footer />
      </main>
      <CookiePopup />
    </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}