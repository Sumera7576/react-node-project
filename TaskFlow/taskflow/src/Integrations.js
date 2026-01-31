import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const IntegrationsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans selection:bg-[#a4ff6e]/30 overflow-x-hidden">
           
      <section className="relative min-h-[70vh] flex items-center pt-32 md:pt-20 overflow-hidden font-sans">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
            className="w-full h-full object-cover grayscale opacity-20" 
            alt="Office Hub" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-transparent to-[#0a0e1a]"></div>
        </div>
        <div className="container mx-auto px-12 relative z-10 text-center font-sans">
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 font-sans">
            Connect Your <span className="text-[#a4ff6e]">Full Stack</span>
          </motion.h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium font-sans">
            TaskFlow seamlessly bridges the gap between your favorite development tools, creating a unified high-performance workspace.
          </p>
        </div>
      </section>
      <section className="py-24 bg-[#0d121f] px-12 font-sans border-y border-white/5 text-center">
          <h2 className="text-2xl font-bold mb-16 uppercase tracking-[0.2em] text-slate-500 font-sans">Core Cloud Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { n: 'Slack', i: '💬', d: 'Chat & Alerts' },
              { n: 'GitHub', i: '🐙', d: 'Code & Repo' },
              { n: 'Zoom', i: '📹', d: 'Video Meet' },
              { n: 'Google', i: '📁', d: 'Cloud Drive' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#a4ff6e]/50 transition-all group font-sans">
                <div className="text-3xl mb-4 group-hover:scale-110 transition font-sans">{item.i}</div>
                <h3 className="font-bold text-white mb-1 font-sans">{item.n}</h3>
                <p className="text-slate-500 text-xs font-sans">{item.d}</p>
              </div>
            ))}
          </div>
      </section>
      <section className="py-24 px-12 relative overflow-hidden font-sans border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-black uppercase italic mb-6">Global <span className="text-[#a4ff6e]">Data Distribution</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
"Your data is not stored in just one location; it syncs across distributed servers worldwide, effectively eliminating latency."            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[#a4ff6e] text-xl font-bold mb-1 italic tracking-tighter">50+ Nodes</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[#a4ff6e] text-xl font-bold mb-1 italic tracking-tighter">0.5ms</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-full h-64 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" className="w-full h-full object-cover opacity-30" alt="Global Network" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0d121f] px-12 font-sans">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: 'End-to-End Encryption', d: "Every integration token you generate is secured with AES-256 encryption.", i: '🛡️' },
            { t: 'OAuth 2.0 Ready', d: 'Safe authentication protocol for cloud apps.', i: '🔑' },
            { t: 'Activity Monitoring', d: "A complete audit log is available for every API call.", i: '📝' }
          ].map((card, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-[#0a0e1a] border border-white/5 hover:border-[#a4ff6e]/30 transition-all">
              <div className="text-3xl mb-6">{card.i}</div>
              <h4 className="text-lg font-bold text-white mb-3 italic tracking-tight uppercase">{card.t}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{card.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-12 font-sans border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="bg-[#1a1f2e] p-6 rounded-2xl border border-white/10 shadow-2xl font-mono text-[10px] text-slate-400">
             <p className="text-[#a4ff6e]">const taskflow = require('taskflow-sdk');</p>
             <p className="mt-2 text-white italic">// Initializing your stack</p>
             <p className="mt-1">taskflow.connect('github', status ={'>'} status.sync);</p>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase italic mb-6">Built by <span className="text-[#a4ff6e]">Developers</span></h2>
            <p className="text-slate-400 text-sm italic mb-8">
"Our integration API is developer-friendly and fully customizable to meet your needs."
            </p>
            <button className="px-6 py-2 border border-[#a4ff6e]/50 text-[#a4ff6e] rounded-full text-[10px] font-black uppercase tracking-widest cursor-default">
              Read API Docs
            </button>
          </div>
        </div>
      </section>
      <section className="py-32 px-12 text-center relative overflow-hidden font-sans border-t border-white/5">
        <h2 className="text-4xl font-black uppercase italic mb-8 font-sans">Ready to <span className="text-[#a4ff6e]">Connect?</span></h2>
        <button className="bg-[#a4ff6e] text-[#0a0e1a] px-12 py-4 rounded-full font-black text-sm uppercase shadow-2xl">
          Build Your Ecosystem Now
        </button>
      </section>
    </div>
  );
};

export default IntegrationsPage;