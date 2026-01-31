const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config'); 
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
connectDB();
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});
const User = mongoose.models.User || mongoose.model('User', userSchema);
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);
app.get('/', (req, res) => {
  res.send("Server is ready!");
});
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", email);

    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ 
        message: "Login Successful!", 
        user: { email: user.email, role: user.role } 
      });
    } else {
      res.status(401).json({ error: "Email ya Password galat hai!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error!" });
  }
});
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password, role: 'user' });
    await newUser.save();
    res.status(200).json({ message: "Success! User saved." });
  } catch (err) {
    res.status(500).json({ error: "Signup failed!" });
  }
});
app.get('/api/admin/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Users fetch fail!" });
  }
});
app.get('/api/admin/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: "Messages fetch fail!" });
  }
});
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save(); 
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Message send fail!" });
  }
});

app.post('/api/admin/reply', async (req, res) => {
  const { email, originalMessage, replyText } = req.body;

 let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com', 
  port: 465,
  secure: true, 
  auth: {
    user: 'ahmad.hassan35543@gmail.com', 
    pass: 'sfrn tcvr dwdk exne '        
  }
});

  let mailOptions = {
    from: 'TaskFlow Admin',
    to: email,
    subject: 'Reply to your message',
    text: `You sent: ${originalMessage}\n\nOur Reply: ${replyText}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reply sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Email bhejane mein masla hua!" });
  }
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

