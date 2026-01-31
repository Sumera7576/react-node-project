import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const handleSignup = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await axios.post('http://localhost:5000/api/signup', { email, password });
        localStorage.setItem('userEmail', email); 
        alert("Account Created Successfully! Redirecting to Dashboard...");
    navigate('/user-dashboard'); 

  } catch (error) {
    alert("Registration failed! Check if email already exists.");
  }
};
  return (
    <div className="min-h-screen bg-[#0a0e1a] relative flex items-center justify-center px-4 overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#bef264]/5 to-transparent -z-10"></div>
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="max-w-[380px] w-full relative z-10">
        <div className="bg-[#0d121f] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl text-center">
          <h2 className="text-3xl font-black uppercase italic text-white mb-8 tracking-tighter">Join <span className="text-[#bef264]">Us.</span></h2>
          
          <form className="space-y-5 text-left" onSubmit={handleSignup}>
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase font-black text-slate-400 ml-1 italic tracking-widest">Work Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="w-full bg-[#161b26] border border-white/10 rounded-xl px-5 py-3.5 outline-none text-white text-xs italic" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] uppercase font-black text-slate-400 ml-1 italic tracking-widest">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" className="w-full bg-[#161b26] border border-white/10 rounded-xl px-5 py-3.5 outline-none text-white text-xs italic" required />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] uppercase font-black text-slate-400 ml-1 italic tracking-widest">Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="re-enter your password" className="w-full bg-[#161b26] border border-white/10 rounded-xl px-5 py-3.5 outline-none text-white text-xs italic" required />
            </div>

            <button type="submit" className="w-full bg-[#bef264] text-[#0a0e1a] font-black py-4 rounded-xl uppercase tracking-widest text-[10px] shadow-lg shadow-[#bef264]/10 hover:scale-[1.02] transition-all active:scale-95 mt-2">Create Account →</button>
          </form>

          <div className="mt-8 pt-5 border-t border-white/5 text-center">
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Already have an account? <Link to="/login" className="text-[#bef264] ml-1 hover:underline">Log in</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;