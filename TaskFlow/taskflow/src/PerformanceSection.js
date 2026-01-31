import React from "react";


const PerformanceSection = () => (
  <section className="bg-[#0b1120] py-24 px-16">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">
          Performance Section
        </h2>
        <p className="text-slate-400 max-w-md">
          The intelligent solution for teams looking to optimize workflow,
          increase productivity and enhance collaboration.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#bef264] text-black px-6 py-3 rounded-full">
            Start Your Free Trial
          </button>
          <button className="bg-white/10 text-white px-6 py-3 rounded-full">
            Book a Demo
          </button>
        </div>
      </div>

      <div className="text-right">
        <h2 className="text-6xl font-extrabold text-white">
          Final <span className="text-[#bef264]">CTA</span>
        </h2>
        <p className="text-slate-500 mt-4">
          Experience next generation automation with powerful tools.
        </p>
      </div>

    </div>
  </section>
)

export default PerformanceSection;