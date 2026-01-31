import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      q: "Is there a free trial?",
      a: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. You can cancel your subscription anytime with just one click. No questions asked, no hidden fees."
    },
    {
      q: "Is my data secure?",
      a: "We use enterprise-grade encryption (AES-256) and are SOC 2 Type II certified. Your data is stored in secure data centers with 24/7 monitoring."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and can arrange invoicing for enterprise customers."
    },
    {
      q: "Do you offer customer support?",
      a: "Yes! We provide 24/7 email support for all plans, with priority support and live chat available for Pro and Enterprise customers."
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0a0f1e] via-[#0f172a] to-[#1e1b4b] py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#bef264]/5 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[#bef264]/10 border border-[#bef264]/30 rounded-full">
            <span className="text-[#bef264] font-semibold text-sm tracking-wider uppercase">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about TaskFlow. Can't find the answer you're looking for? 
            <a href="#" className="text-[#bef264] hover:underline ml-1">Contact our support team</a>.
          </p>
        </div>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 
              hover:border-[#bef264]/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#bef264]/0 to-[#bef264]/0 
              group-hover:from-[#bef264]/5 group-hover:to-purple-500/5 transition-all duration-700"></div>
              <button
                onClick={() => toggleFAQ(i)}
                className="relative w-full p-6 text-left flex items-center justify-between gap-4 
                hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 flex-1">
                  <h3 className="text-white font-bold text-lg group-hover:text-[#bef264] transition-colors duration-300">
                    {item.q}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center 
                transition-all duration-500 ${openIndex === i ? 'rotate-180 bg-[#bef264]/20' : ''}`}>
                  <svg 
                    className={`w-5 h-5 transition-colors duration-300 ${openIndex === i ? 'text-[#bef264]' : 'text-slate-400'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`relative overflow-hidden transition-all duration-500 ${
                  openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#bef264] to-lime-400 
              transition-all duration-500 ${openIndex === i ? 'w-full' : 'w-0'}`}></div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-400 mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-[#bef264] to-lime-400 text-black font-bold rounded-full 
            hover:shadow-[0_0_40px_rgba(190,242,100,0.6)] hover:scale-105 transition-all duration-300
            inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </button>
            <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-full border border-white/20
            hover:bg-white/20 hover:border-[#bef264]/40 transition-all duration-300
            inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;