import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setEmail('');
      setPassword('');
    }, 150); 
    return () => clearTimeout(timer);
  }, []);
  
  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password });
    const user = response.data.user;

    console.log("Logged in user role:", user.role); 

    localStorage.setItem('userEmail', user.email); 
    alert(response.data.message);
    if (user.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  } catch (error) {
    alert(error.response?.data?.error || "Login Failed!");
  }
};

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center px-4 font-sans text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-[380px] w-full">
        <div className="bg-[#0d121f] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl text-center">
          <h2 className="text-3xl font-black uppercase italic mb-8 tracking-tighter">Welcome <span className="text-[#bef264]">Back.</span></h2>
          
          <form className="space-y-5 text-left" onSubmit={handleLogin} autoComplete="off">
            <input type="text" name="fake_email" style={{ display: 'none' }} tabIndex="-1" />
            <input type="password" name="fake_password" style={{ display: 'none' }} tabIndex="-1" />

            <div className="space-y-1.5">
              <label className="text-[9px] uppercase font-black text-slate-400 ml-1 italic tracking-widest">Work Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" className="w-full bg-[#161b26] border border-white/10 rounded-xl px-5 py-3.5 outline-none text-xs italic autofill:bg-transparent" required />
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] uppercase font-black text-slate-400 ml-1 italic tracking-widest">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" className="w-full bg-[#161b26] border border-white/10 rounded-xl px-5 py-3.5 outline-none text-xs italic autofill:bg-transparent" required />
            </div>

            <button type="submit" className="w-full bg-[#bef264] text-black font-black py-4 rounded-xl uppercase tracking-widest text-[10px] mt-2 shadow-lg shadow-[#bef264]/10 cursor-pointer">Login Now →</button>
          </form>

          <div className="mt-8 pt-5 border-t border-white/5">
            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Don't have an account? <Link to="/signup" className="text-[#bef264] ml-1 hover:underline">Sign up</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;