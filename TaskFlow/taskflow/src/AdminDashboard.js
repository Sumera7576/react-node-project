import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]); 
  const [activeTab, setActiveTab] = useState('users'); 
  const [replyText, setReplyText] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get('http://localhost:5000/api/admin/users');
        const msgRes = await axios.get('http://localhost:5000/api/admin/messages');
        setUsers(usersRes.data);
        setMessages(msgRes.data);
      } catch (error) {
        console.error("Data fetch karne mein masla:", error);
      }
    };
    fetchData();
  }, []);
  const handleReply = async (email, originalMessage) => {
    const text = replyText[email];
    if (!text) return Swal.fire('Error', 'Please write a reply first!', 'error');
    Swal.fire({ title: 'Sending Reply...', allowOutsideClick: false, didOpen: () => { Swal.showLoading(); } });

    try {
      await axios.post('http://localhost:5000/api/admin/reply', { 
        email, originalMessage, replyText: text 
      });
      Swal.fire({
        icon: 'success',
        title: 'Reply Sent!',
        text: `Email successfully sent to ${email}`,
        background: '#0d121f',
        color: '#fff',
        confirmButtonColor: '#bef264'
      });
      setReplyText({ ...replyText, [email]: "" }); 
    } catch (error) {
      Swal.fire('Error', 'Failed to send email. Check backend!', 'error');
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/users/${id}`);
        setUsers(users.filter(user => user._id !== id));
        alert("User deleted!");
      } catch (error) {
        alert("Delete failed!");
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] p-8 text-white pt-24 font-sans">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black italic uppercase text-[#bef264]">Admin <span className="text-white">Panel</span></h1>
          <button onClick={handleLogout} className="bg-white/5 border border-white/10 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 transition-all cursor-pointer">Logout</button>
        </div>
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === 'users' ? 'bg-[#bef264] text-black' : 'bg-white/5 text-slate-400 border border-white/10'}`}
          >
            Users List
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${activeTab === 'messages' ? 'bg-[#bef264] text-black' : 'bg-white/5 text-slate-400 border border-white/10'}`}
          >
            Client Messages
          </button>
        </div>
        <div className="bg-[#0d121f] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
          
          {activeTab === 'users' ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest italic">
                  <th className="p-6">User Email</th>
                  <th className="p-6">Role</th>
                  <th className="p-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {users.map((user) => (
                  <tr key={user._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                    <td className="p-6 font-medium">{user.email}</td>
                    <td className="p-6 text-[#bef264] uppercase font-bold text-[10px] tracking-widest">{user.role}</td>
                    <td className="p-6 text-right">
                      <button onClick={() => deleteUser(user._id)} className="text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest cursor-pointer">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 grid gap-6">
              {messages.length > 0 ? messages.map((msg) => (
                <div key={msg._id} className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-[#bef264]/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-[#bef264] font-black italic uppercase text-xs">{msg.name}</h4>
                      <p className="text-slate-500 text-[10px] font-bold">{msg.email}</p>
                    </div>
                    <span className="text-slate-600 text-[9px] uppercase font-black">{new Date(msg.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{msg.message}"</p>
                  <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-4">
                    <textarea 
                      placeholder="Write your professional reply here..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-[11px] outline-none focus:border-[#bef264]/50 transition-all resize-none italic text-slate-200"
                      value={replyText[msg.email] || ""}
                      onChange={(e) => setReplyText({ ...replyText, [msg.email]: e.target.value })}
                    />
                    <button 
                      onClick={() => handleReply(msg.email, msg.message)}
                      className="self-end bg-[#bef264] text-black px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-[#bef264]/10"
                    >
                      Send Reply →
                    </button>
                  </div>
                </div>
              )) : (
                <p className="p-10 text-center text-slate-500 uppercase font-black text-[10px] tracking-[0.2em]">No messages yet.</p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;