import React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';
import PricingSection from './PricingSection'; 
import StatsSection from './StatsSection';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';
import Integrations from './Integrations';
import SolutionsPages from './SolutionsPages';
import ContactPage from './ContactPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import { motion, AnimatePresence } from 'framer-motion';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const navigationType = window.performance.getEntriesByType("navigation")[0]?.type;
    
    if (navigationType !== 'back_forward') {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    }
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 md:px-12 py-6 bg-[#0a0e1a]/95 backdrop-blur-md sticky top-0 z-[1000] border-b border-white/5">
      <Link to="/" className="flex items-center gap-2 cursor-pointer z-[1010]">
        <div className="bg-[#bef264] p-2 rounded-lg shadow-[0_0_20px_rgba(190,242,100,0.4)]">
          <svg className="w-5 h-5 text-[#1a1f2b]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-black text-white tracking-tighter uppercase">TASKFLOW.IO</span>
      </Link>

      <div className="hidden lg:flex space-x-8 text-[11px] font-bold text-slate-300 uppercase tracking-[0.3em]">
        <Link to="/" className="hover:text-[#bef264] transition-colors">Platform</Link>
        <Link to="/integrations" className="hover:text-[#bef264] transition-colors">Integrations</Link>
        <Link to="/solutions" className="hover:text-[#bef264] transition-colors">Solutions</Link>
        <Link to="/contact" className="hover:text-[#bef264] transition-colors">Contact</Link>
      </div>

      <div className="lg:hidden z-[1010]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#bef264] p-2 focus:outline-none cursor-pointer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <Link to="/signup" className="hidden lg:block">
        <button className="bg-[#bef264] text-[#1a1f2b] px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-lg hover:bg-[#a3d94e] transition-all cursor-pointer">
          Start Free
        </button>
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#0d121f] border-b border-white/10 lg:hidden overflow-hidden z-[999]"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {['Platform', 'Integrations', 'Solutions', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Platform' ? '/' : `/${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 text-xs font-bold uppercase tracking-[0.3em] hover:text-[#bef264] transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-[#bef264] text-black font-black py-4 rounded-xl uppercase text-[10px] tracking-widest cursor-pointer">
                  Start Free →
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-[#0a0e1a] text-slate-200 font-sans selection:bg-[#bef264]/30 overflow-x-clip">
        
        <Navbar /> 

        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
              <HowItWorks />
              <StatsSection />
              <PricingSection /> 
              <Testimonials />
              <ContactPage />
              <FAQ />
            </>
          } />
          
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/solutions" element={<SolutionsPages />} /> 
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;