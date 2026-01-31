import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SolutionsPage = () => {
  const navigate = useNavigate();

  const solutions = [
    { title: "For Engineering Teams", desc: "Automate code reviews and deployment pipelines with AI logic.", icon: "⚙️" },
    { title: "For Project Managers", desc: "Real-time resource tracking and automated reporting dashboards.", icon: "📈" },
    { title: "For Startups", desc: "Scale your workflow without adding overhead. Built for speed.", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans selection:bg-[#a4ff6e]/30 overflow-x-hidden">
            <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center px-6 md:px-16 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000"
            alt="Team Working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-[#0a0e1a]/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
          >
            Tailored{" "}
            <span className="text-[#a4ff6e]">Solutions</span>
            <br />
            For Modern Teams.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-gray-300 max-w-xl mx-auto text-base md:text-lg"
          >
            Unlock maximum efficiency with AI-powered workflows tailored for your
            industry needs.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/signup')} 
            style={{ position: 'relative', zIndex: 9999, cursor: 'pointer' }}
            className="mt-8 bg-[#a4ff6e] text-black px-7 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition pointer-events-auto"
          >
            Start Free →
          </motion.button>
        </div>
      </section>
      <section className="py-24 bg-[#0d121f] px-12 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {solutions.map((item, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-[#a4ff6e]/50 transition-all group">
              <div className="text-5xl mb-8 group-hover:rotate-12 transition duration-500">{item.icon}</div>
              <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
              <div className="h-1 w-12 bg-[#a4ff6e] rounded-full"></div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-32 px-12 text-center relative overflow-hidden bg-[#0a0e1a] z-20">
        <div className="absolute inset-0 bg-[#a4ff6e]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <h2 className="text-4xl font-black uppercase italic mb-8 tracking-tighter leading-tight">
          Ready to Transform Your <span className="text-[#a4ff6e]">Workflow?</span>
        </h2>
        <button 
          onClick={() => navigate('/signup')} 
          style={{ position: 'relative', zIndex: 9999, cursor: 'pointer' }}
          className="bg-[#a4ff6e] text-[#0a0e1a] px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl hover:scale-110 transition-all pointer-events-auto"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default SolutionsPage;