import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TaskFlow transformed our workflow completely. Productivity increased by 60% within the first month.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "Tech Startup",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5
    },
    {
      quote: "The best investment we made this year. Our team collaboration has never been smoother.",
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5
    },
    {
      quote: "Incredible platform! The automation features alone saved us 20 hours per week.",
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "E-commerce Brand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#bef264]/5 blur-[200px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[#bef264]/10 border border-[#bef264]/30 rounded-full">
            <span className="text-[#bef264] font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our amazing customers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 
              hover:border-[#bef264]/50 transition-all duration-700 hover:-translate-y-3
              hover:shadow-[0_30px_80px_rgba(190,242,100,0.3)]"
            >
              <div className="absolute top-6 right-6 text-[#bef264]/10 group-hover:text-[#bef264]/20 transition-colors duration-500">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#bef264]/0 via-[#bef264]/0 to-purple-500/0 
              group-hover:from-[#bef264]/10 group-hover:to-purple-500/5 blur-xl rounded-3xl transition-all duration-700"></div>
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-[#bef264]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#bef264]/30 
                      group-hover:border-[#bef264] transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-base group-hover:text-[#bef264] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {testimonial.role}, <span className="text-slate-500">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#bef264] to-lime-400 
              group-hover:w-full transition-all duration-700 rounded-full"></div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-[#bef264] mb-2">4.9/5</div>
            <div className="text-slate-400 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-[#bef264] mb-2">2,500+</div>
            <div className="text-slate-400 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-[#bef264] mb-2">98%</div>
            <div className="text-slate-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">
            Join thousands of satisfied customers
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default Testimonials;