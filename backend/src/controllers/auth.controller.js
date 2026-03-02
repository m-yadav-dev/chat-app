import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { generateToken } from "../library/utils.js";
import { ENV_VARS } from "../library/env.js";
import cloudinary from "../services/cloudinary.service.js";

const signUp = async (request, response) => {
  try {
    const { fullName, email, password } = request.body;
    if (!fullName || !email || !password) {
      return response
        .status(400)
        .json({ message: "Please fill all the fields" });
    }

    if (password.length < 8) {
      return response
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({ message: "Invalid email address" });
    }

    const user = await User.findOne({ email: { $eq: email } });
    if (user) {
      return response.status(400).json({ message: "User already exists" });
    }

    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, genSalt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, response);
      await newUser.save();

      response.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });

      // send welcome email to user if user sign up successfully

      response.status(201).json({ message: "User created successfully" });
    } else {
      response.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .json({ message: "Please fill all the fields" });
    }

    const user = await User.findOne({ email: { $eq: email } });
    if (!user) {
      return response.status(400).json({ message: "User not found" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return response.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, response);

    response.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
    console.error(error);
  }
};

const logout = async (_, response) => {
  try {
    response.cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
      sameSite: "strict",
      secure: ENV_VARS.NODE_ENV !== "development",
    });
    response.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const updateProfile = async (request, response) => {
  try {
    const { profilePic, about, phone } = request.body;
    const userId = request.user._id;
    console.log(userId);

    let updatedFields = {};

    if (about) updatedFields.about = about;
    if (phone) updatedFields.phone = phone;

    if (profilePic) {
      const uploadImage = await cloudinary.uploader.upload(profilePic, {
        folder: "chat-app/profile-pics", // folder name in cloudinary
      });

      updateProfile.profilePic = uploadImage.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
    }).select("-password");

    response.status(200).json({
      updatedUser,
    });
  } catch (error) {
    console.error(`Error in update profile: ${error.message}`);
    response.status(500).json({ message: error.message });
  }
};

const checkAuth = async (request, response) => {
  try {
    response.status(200).json(request.user);
  } catch (error) {
    console.log(`Error in checkAuth controller: ${error.message}`);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export { signUp, login, logout, updateProfile, checkAuth };
