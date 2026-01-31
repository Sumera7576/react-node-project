export default function Footer() {
  return (
    <footer className="relative bg-[#1a1f2e] py-20 px-6 border-t border-[#2a3142] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#a4ff6e]/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a4ff6e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#a4ff6e]/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#a4ff6e] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-white text-2xl font-bold tracking-tight">
                TASKFLOW.IO
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Modern workflow automation built for high performance teams. Streamline your processes with AI-powered intelligence.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="w-9 h-9 rounded-lg bg-[#2a3142] hover:bg-[#a4ff6e]/20 border border-[#2a3142] hover:border-[#a4ff6e]/30 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#a4ff6e] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="w-9 h-9 rounded-lg bg-[#2a3142] hover:bg-[#a4ff6e]/20 border border-[#2a3142] hover:border-[#a4ff6e]/30 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#a4ff6e] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button className="w-9 h-9 rounded-lg bg-[#2a3142] hover:bg-[#a4ff6e]/20 border border-[#2a3142] hover:border-[#a4ff6e]/30 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-4 h-4 text-slate-500 group-hover:text-[#a4ff6e] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {['Platform', 'Integrations', 'Solutions', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 text-sm hover:text-[#a4ff6e] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#a4ff6e] transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:support@taskflow.io" className="group block">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#2a3142] hover:bg-[#2a3142]/80 border border-[#2a3142] hover:border-[#a4ff6e]/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#a4ff6e] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#1a1f2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-slate-400 group-hover:text-white text-sm transition-colors">
                    support@taskflow.io
                  </span>
                </div>
              </a>
              <div className="p-4 rounded-lg bg-gradient-to-r from-[#a4ff6e]/10 to-[#a4ff6e]/5 border border-[#a4ff6e]/20">
                <p className="text-white text-sm font-semibold mb-2">Stay Updated</p>
                <p className="text-slate-400 text-xs">Join 10,000+ teams automating their workflows</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#2a3142]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 TaskFlow. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-slate-500 hover:text-[#a4ff6e] transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}