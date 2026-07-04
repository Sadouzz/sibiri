import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ScrollToTop from './components/utils/ScrollToTop.tsx';
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import Home from "./pages/Home.tsx";

// Register plugins outside the component
gsap.registerPlugin(ScrollTrigger, useGSAP);

function AppContent() {
  const location = useLocation();

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
    <div className="relative flex flex-col min-h-screen">
      {/* Background Gradients (Tailwind version) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#07143f]/30 to-[#4e47c6]/20" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#07143f]/20 to-[#4e47c6]/10" />

      {/* Main Content */}
      <main className="relative z-20 flex-grow">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </div>
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