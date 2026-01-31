import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we send your message.',
      background: '#0d121f',
      color: '#fff',
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
            Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: response.data.message || "We've received your message.",
        background: '#0d121f',
        color: '#fff',
        confirmButtonColor: '#bef264',
        iconColor: '#bef264',
        customClass: {
          popup: 'rounded-[2rem] border border-white/10'
        }
      });

      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Oops... Something went wrong. Please check your backend connection.",
        background: '#0d121f',
        color: '#fff',
        confirmButtonColor: '#ef4444'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans selection:bg-[#bef264]/30 overflow-x-hidden pb-20">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#bef264]/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10"></div>

      <section className="pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
                Let's <span className="text-[#bef264]">Connect.</span>
              </h1>
              <p className="text-slate-400 text-lg italic font-medium leading-relaxed max-w-md">
                Have a project in mind? Let's build something extraordinary together with our expert development team.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { label: "Email Us", val: "support@taskflow.io", icon: "📧" },
                { label: "Our Office", val: "Software Park, Multan, Pakistan", icon: "📍" }
              ].map((item, i) => (
                <motion.div key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#bef264]/30 transition-all">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest">{item.label}</div>
                    <div className="text-white font-bold italic">{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0d121f]/90 backdrop-blur-2xl p-10 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#bef264] focus:outline-none transition-all text-sm font-medium text-white" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#bef264] focus:outline-none transition-all text-sm font-medium text-white" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-slate-500 ml-2">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 focus:border-[#bef264] focus:outline-none transition-all text-sm font-medium resize-none text-white" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-[#bef264] text-[#0a0e1a] py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all cursor-pointer">
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;