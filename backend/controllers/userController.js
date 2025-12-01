import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    console.log("➡️ Signup request body:", req.body);

    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields (username, email, password) are required",
      });
    }

    // Check if user already exists
    const existing = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existing) {
      return res.status(409).json({
        status: false,
        message: "User with this email or username already exists",
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashed });

    return res.status(201).json({
      status: true,
      message: "User created successfully.",
      user_id: user._id,
    });
  } catch (err) {
    console.error("❌ Signup error:", err);
    return res.status(500).json({
      status: false,
      message: "Internal signup error",
    });
  }
};

export const login = async (req, res) => {
  try {
    console.log("➡️ Login request body:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Email/username and password are required",
      });
    }

    // frontend sends "emailOrUsername" into this "email" field
    const user =
      (await User.findOne({ email })) || (await User.findOne({ username: email }));

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Invalid Username and password",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({
        status: false,
        message: "Invalid Username and password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({
      status: true,
      message: "Login successful.",
      jwt_token: token,
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({
      status: false,
      message: "Internal login error",
    });
  }
};
