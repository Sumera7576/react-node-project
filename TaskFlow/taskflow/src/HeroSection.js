import { Link, useNavigate } from 'react-router-dom'; 

export default function HeroSection() {
  const navigate = useNavigate(); 

  return (
    <div className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
            filter: 'brightness(1.1) contrast(1.2) saturate(1.3)',
            opacity: 0.25
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#a4ff6e]/15 via-purple-600/10 to-pink-500/15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-[#0a0e1a]/70 to-[#0a0e1a]/85"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a4ff6e]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-pink-500/15 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(to right, #a4ff6e 2px, transparent 2px),
            linear-gradient(to bottom, #a4ff6e 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }}></div>
        <div className="absolute top-24 left-[15%] w-3 h-3 bg-[#a4ff6e] rounded-full animate-ping shadow-lg shadow-[#a4ff6e]/50"></div>
        <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[35%] left-[25%] w-2 h-2 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-[30%] w-3 h-3 bg-[#a4ff6e] rounded-full animate-ping shadow-lg shadow-[#a4ff6e]/50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-20 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-[#a4ff6e]/30 to-transparent blur-sm"></div>
        <div className="absolute bottom-40 right-0 w-80 h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent blur-sm"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 px-6 md:px-12 pt-32 pb-12 md:pb-20 max-w-7xl mx-auto items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#a4ff6e] bg-[#a4ff6e]/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#a4ff6e] rounded-full animate-pulse"></div>
            <span className="text-[#a4ff6e] text-sm font-semibold">Unleash Your Team's Potential</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
            Build Smarter,<br />
            Deliver <span className="text-transparent bg-gradient-to-r from-[#a4ff6e] to-[#7ed945] bg-clip-text">Faster.</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            The intelligent workspace powered by React, Node.js, and MongoDB. Designed for peak performance and seamless collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-gradient-to-r from-[#a4ff6e] to-[#7ed945] text-[#0a0e1a] px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-[#a4ff6e]/50 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Your Free Trial
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/contact')} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-sm cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px]">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              <defs>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 0.4}} />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="245" fill="none" stroke="url(#purpleGrad)" strokeWidth="3"/>
            </svg>
          </div>

          <div className="absolute w-[450px] h-[450px]">
            <svg viewBox="0 0 450 450" className="w-full h-full animate-spin" style={{animationDuration: '25s'}}>
              <defs>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#a4ff6e', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: '#a4ff6e', stopOpacity: 0.2}} />
                  <stop offset="100%" style={{stopColor: '#a4ff6e', stopOpacity: 0.8}} />
                </linearGradient>
              </defs>
              <circle cx="225" cy="225" r="220" fill="none" stroke="url(#greenGrad)" strokeWidth="4" strokeDasharray="1382" strokeDashoffset="345"/>
            </svg>
          </div>
          
          <div className="relative z-10 w-[320px] h-[580px] bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] rounded-[45px] p-4 shadow-2xl border-[6px] border-[#a4ff6e]" style={{
            boxShadow: '0 0 80px rgba(164, 255, 110, 0.5), inset 0 0 20px rgba(0,0,0,0.6)'
          }}>
            <div className="w-full h-full bg-gradient-to-br from-[#151820] to-[#0a0d14] rounded-[35px] p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-[#ff5f57] rounded-full shadow-lg"></div>
                  <div className="w-3 h-3 bg-[#febc2e] rounded-full shadow-lg"></div>
                  <div className="w-3 h-3 bg-[#28c840] rounded-full shadow-lg"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-[#a4ff6e]/10 rounded-full">
                    <span className="text-[#a4ff6e] text-xs font-bold">LIVE</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-white text-lg font-bold mb-1">Analytics Dashboard</h3>
                <p className="text-slate-500 text-xs">Real-time performance metrics</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-[#a4ff6e]/10 to-transparent p-4 rounded-2xl border border-[#a4ff6e]/30 backdrop-blur-sm">
                  <div className="text-slate-400 text-xs mb-2">Active Users</div>
                  <div className="text-3xl font-bold text-[#a4ff6e] mb-1">2,543</div>
                  <div className="text-xs text-green-400">↑ 12.5%</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-4 rounded-2xl border border-purple-400/30 backdrop-blur-sm">
                  <div className="text-slate-400 text-xs mb-2">Revenue</div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">$54K</div>
                  <div className="text-xs text-green-400">↑ 8.2%</div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-4 rounded-2xl border border-[#a4ff6e]/30">
                  <div className="text-slate-400 text-xs mb-3">Performance</div>
                  <div className="flex gap-1.5 items-end h-16">
                    <div className="w-full h-10 bg-gradient-to-t from-[#a4ff6e] to-[#a4ff6e]/50 rounded-t"></div>
                    <div className="w-full h-14 bg-gradient-to-t from-[#a4ff6e] to-[#a4ff6e]/50 rounded-t"></div>
                    <div className="w-full h-16 bg-gradient-to-t from-[#a4ff6e] to-[#a4ff6e]/50 rounded-t"></div>
                    <div className="w-full h-8 bg-gradient-to-t from-[#a4ff6e] to-[#a4ff6e]/50 rounded-t"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1419] p-4 rounded-2xl border border-purple-400/30 flex flex-col items-center justify-center">
                  <div className="relative w-16 h-16 mb-2">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#2a2f3b" strokeWidth="5" fill="none"/>
                      <circle cx="32" cy="32" r="28" stroke="#a4ff6e" strokeWidth="5" fill="none" 
                        strokeDasharray="176" strokeDashoffset="18" strokeLinecap="round"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#a4ff6e] text-sm font-bold">90%</span>
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs">Health</div>
                </div>

                <div className="col-span-2 bg-gradient-to-r from-[#a4ff6e]/10 via-purple-500/10 to-[#a4ff6e]/10 p-4 rounded-2xl border border-[#a4ff6e]/30 flex items-center justify-around">
                  <button className="w-12 h-12 rounded-xl bg-[#a4ff6e] flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-[#0a0e1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-[#a4ff6e]/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}