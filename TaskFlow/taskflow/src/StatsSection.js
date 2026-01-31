import React from 'react';

const StatsSection = () => {
  const stats = [
    { 
      number: "10K+", 
      label: "Active Users",
      subtext: "and growing daily",
      gradient: "from-[#bef264] to-lime-400"
    },
    { 
      number: "99.9%", 
      label: "Uptime",
      subtext: "guaranteed reliability",
      gradient: "from-cyan-400 to-blue-500"
    },
    { 
      number: "500+", 
      label: "Companies",
      subtext: "trust our platform",
      gradient: "from-purple-400 to-pink-500"
    },
    { 
      number: "24/7", 
      label: "Support",
      subtext: "always available",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#1e1b4b] via-[#0f172a] to-[#0a0f1e] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNiZWYyNjQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptMC0ydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#bef264]/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-5 py-2 bg-[#bef264]/10 border border-[#bef264]/30 rounded-full">
            <span className="text-[#bef264] font-semibold text-xs tracking-widest uppercase">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join the community that's transforming the way teams work
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 
              hover:border-[#bef264]/50 transition-all duration-500 hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(190,242,100,0.3)]"
            >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-0 
              group-hover:opacity-10 blur-2xl rounded-full transition-all duration-700`}></div>
              <div className="relative text-center">
                <h3 className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-br ${stat.gradient} 
                bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                  {stat.number}
                </h3>
                <p className="text-white text-lg font-semibold mb-2 group-hover:text-[#bef264] transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-slate-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {stat.subtext}
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#bef264] rounded-full 
                opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#bef264] rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#bef264]/0 
              group-hover:border-[#bef264]/30 rounded-br-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Ready to join them?
          </p>
        
        </div>
      </div>
    </section>
  );
};

export default StatsSection;