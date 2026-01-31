import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom'; 

const PricingSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); 
  }, [pathname]);

  const plans = [
    { 
      name: "Basic", 
      price: isYearly ? "$159" : "$19",
      period: isYearly ? "/year" : "/month",
      description: "Perfect for individuals",
      features: ["Up to 5 projects", "Basic analytics", "Email support", "1GB storage"],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Pro", 
      price: isYearly ? "$399" : "$49",
      period: isYearly ? "/year" : "/month",
      description: "Best for growing teams",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "50GB storage", "Custom integrations"],
      popular: true,
      gradient: "from-[#bef264] to-lime-400"
    },
    { 
      name: "Enterprise", 
      price: isYearly ? "$450" : "$60",
      period: isYearly ? "/year" : "/month",
      description: "For large organizations",
      features: ["Everything in Pro", "Dedicated support", "Unlimited storage", "Advanced security", "SSO & SAML"],
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white selection:bg-[#bef264]/30 overflow-x-hidden">
      <section className="relative pt-44 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#bef264]/5 blur-[200px] rounded-full -z-10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-tight">
              Simple <span className="text-[#bef264]">Investment</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-12 bg-white/5 w-fit mx-auto p-2 rounded-full border border-white/10">
              <span className={`text-xs font-bold uppercase ${!isYearly ? 'text-[#bef264]' : 'text-slate-500'}`}>Monthly</span>
              <button onClick={() => setIsYearly(!isYearly)} className="w-14 h-7 bg-white/10 rounded-full p-1 transition-all relative cursor-pointer">
                <motion.div animate={{ x: isYearly ? 28 : 0 }} className="w-5 h-5 bg-[#bef264] rounded-full shadow-[0_0_10px_#bef264]" />
              </button>
              <span className={`text-xs font-bold uppercase ${isYearly ? 'text-[#bef264]' : 'text-slate-500'}`}>Yearly <span className="bg-[#bef264]/20 text-[#bef264] px-2 py-0.5 rounded text-[10px] ml-1">Save 20%</span></span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`group relative bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-4 ${plan.popular ? 'border-[#bef264]/60 shadow-[0_0_60px_rgba(190,242,100,0.1)]' : 'border-white/10 hover:border-[#bef264]/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#bef264] text-black px-6 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">Most Popular</div>
                )}
                
                <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-8 font-medium italic">{plan.description}</p>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className={`text-5xl font-black bg-gradient-to-br ${plan.gradient} bg-clip-text text-transparent italic`}>{plan.price}</span>
                  <span className="text-slate-500 text-sm font-bold uppercase">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10 text-left">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-medium text-slate-300">
                      <div className="w-1.5 h-1.5 bg-[#bef264] rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
                                <button 
                  onClick={() => navigate('/signup')} 
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer ${plan.popular ? 'bg-[#bef264] text-black shadow-lg shadow-[#bef264]/30 hover:scale-105' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#bef264]/50'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;