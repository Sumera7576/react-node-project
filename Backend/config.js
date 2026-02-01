const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://Sumera:sumera123@cluster0.tsygvxq.mongodb.net";
    
    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.log("❌ Connection Error:", error);
    process.exit(1); 
  }
};

module.exports = connectDB;
