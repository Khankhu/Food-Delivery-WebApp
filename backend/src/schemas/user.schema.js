import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
