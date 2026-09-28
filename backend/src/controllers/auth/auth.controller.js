import bcrypt from "bcrypt";
import { User } from "../../schemas/user.schema.js";

export const signUp = async (req, res) => {
  try {
    const { email, password, address, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      address,
      phoneNumber,
    });
    const { password: _, ...userWithoutPassword } = user.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("signUp error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    const matchingPassword = await bcrypt;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something Went Wrong", error: error.message });
  }
};
