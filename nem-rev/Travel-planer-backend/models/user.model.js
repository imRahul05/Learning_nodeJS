import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["male", "female","others"] },
  role: { type: String, enum: ["admin", "owner","driver","customer"],required:true },
  password: { type: String, required: true },
});

export const userModel = mongoose.model("user", userSchema);
