import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      desc: "Create your account in seconds and get started instantly.",
      path: "/signup" 
    },
    {
      id: 2,
      title: "Manage Tasks",
      desc: "Organize your projects and collaborate with your team.",
      path: "/login" 
    },
    {
      id: 3,
      title: "Track Progress",
      desc: "Monitor performance with real-time analytics.",
      path: "/login" 
    }
  ];

  return (
    <section className="bg-[#0a0e1a] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-16 italic uppercase tracking-tighter">
          How It <span className="text-[#bef264]">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              onClick={() => navigate(step.path)} 
              className="group relative bg-[#161b2c] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#bef264]/30 transition-all duration-500 cursor-pointer shadow-2xl hover:-translate-y-4"
            >
              <div className="w-20 h-20 bg-[#bef264] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#bef264]/20 group-hover:scale-110 transition-transform">
                <span className="text-black text-3xl font-black">{step.id}</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-[#bef264] transition-colors">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#bef264] group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;