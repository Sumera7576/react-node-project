import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const UserDashboard = () => {
  const navigate = useNavigate(); 
    const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('userEmail'); 
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8 text-white pt-24 font-sans">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto">
        
        <header className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">
              Welcome, <span className="text-[#bef264]">{userEmail || 'User'}!</span>
            </h1>
            <p className="text-slate-500 text-[10px] mt-1 uppercase tracking-widest font-bold italic">
              Your personal workspace is ready.
            </p>
          </div>
          
          <button 
            onClick={handleLogout} 
            className="bg-white/5 border border-white/10 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 hover:text-red-400 transition-all cursor-pointer"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0d121f] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
            <h3 className="text-[#bef264] font-black text-[10px] uppercase italic mb-4 tracking-widest">Current Projects</h3>
            <p className="text-5xl font-bold tracking-tighter">04</p>
          </div>
          
          <div className="bg-[#0d121f] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
            <h3 className="text-[#bef264] font-black text-[10px] uppercase italic mb-4 tracking-widest">Tasks Completed</h3>
            <p className="text-5xl font-bold tracking-tighter">12</p>
          </div>
          
          <div className="bg-[#0d121f] p-8 rounded-[2rem] border border-white/5 shadow-2xl">
            <h3 className="text-[#bef264] font-black text-[10px] uppercase italic mb-4 tracking-widest">Next Deadline</h3>
            <p className="text-xl font-bold italic tracking-tighter">Jan 30, 2026</p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default UserDashboard;