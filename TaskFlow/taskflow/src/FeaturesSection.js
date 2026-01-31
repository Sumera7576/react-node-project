import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate(); 

  const features = [
    {
      title: "Smart Automation",
      desc: "Automate repetitive workflows and save hours every week.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      path: "/solutions" 
    },
    {
      title: "Team Collaboration",
      desc: "Work together in real-time with shared dashboards.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
      path: "/solutions"
    },
    {
      title: "Advanced Analytics",
      desc: "Track productivity and measure performance easily.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      path: "/contact"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0a0f1e] via-[#0f172a] to-[#1e1b4b] py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#bef264]/10 blur-[200px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[180px] rounded-full"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[#bef264]/10 border border-[#bef264]/30 rounded-full">
            <span className="text-[#bef264] font-semibold text-sm tracking-wider uppercase">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#bef264] to-white bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to supercharge your productivity and scale your team
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)} 
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 
              hover:border-[#bef264]/60 transition-all duration-700 
              hover:-translate-y-6 hover:scale-105
              hover:shadow-[0_20px_80px_rgba(190,242,100,0.4)]
              cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/0 via-[#bef264]/0 to-[#bef264]/0 
              group-hover:from-[#bef264]/10 group-hover:via-transparent group-hover:to-purple-500/10 
              transition-all duration-700 rounded-3xl"></div>
              <div className="relative mb-8 overflow-hidden rounded-2xl h-48">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-[#bef264] text-black px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  NEW
                </div>
              </div>
              <div className="relative">
                <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-[#bef264] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button 
                  onClick={(e) => { e.stopPropagation(); navigate(item.path); }} 
                  className="opacity-0 group-hover:opacity-100 transition-all duration-500 
                  text-[#bef264] font-semibold text-sm flex items-center gap-2 mx-auto
                  hover:gap-4"
                >
                  Learn More 
                  <span className="text-lg">→</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#bef264] via-lime-400 to-[#bef264] 
              group-hover:w-full transition-all duration-700 rounded-full"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#bef264]/0 group-hover:bg-[#bef264]/10 
              rounded-bl-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <button 
            onClick={() => navigate('/solutions')} 
            className="px-10 py-4 bg-gradient-to-r from-[#bef264] to-lime-400 text-black font-bold rounded-full 
            hover:shadow-[0_0_40px_rgba(190,242,100,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;