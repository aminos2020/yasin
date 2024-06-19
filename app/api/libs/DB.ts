"use server";
import mongoose from "mongoose";

interface Connection {
  isConnected?: boolean; // Make isConnected property optional
}

export const ConnectToDB = async () => {
  const connection: Connection = {}; // Initialize connection object

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://amin:amin@ortine.z26cflp.mongodb.net/?retryWrites=true&w=majority&appName=Ortine");
    connection.isConnected = db.connections[0]?.readyState === 1;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow the error for higher-level handling
  }
};
