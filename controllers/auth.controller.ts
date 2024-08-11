import { profile } from "console";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import genAndSetCookie from "../utils/genAndSetCookie";

interface Body {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  isSeller: boolean;
  profile: string;
}

export const signup = async (req: { body: Body }, res: any) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      gender,
      isSeller,
      profile,
    } = req.body;

    if (!profile) {
      return res.status(400).json({ message: "Profile is required" });
    }
    if (
      !email ||
      !fullName ||
      !isSeller ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      gender,
      isSeller,
      profile: profile,
    });
    if (newUser) {
      genAndSetCookie(newUser._id, res);
      await newUser.save();
    } else {
      return res.status(400).json({ message: "Invalid User Data" });
    }

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profile: newUser.profile,
      isSeller: newUser.isSeller,
    });
  } catch (error) {
    console.log("[+] Error occured in Signup controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    const isPasswordCorrect = bcrypt.compare(password, user?.password || "");
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    genAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profile: user.profile,
    });
  } catch (error) {
    console.log("[+] Error occured in Login controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req: any, res: any) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("[+] Error occured in Logout controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
