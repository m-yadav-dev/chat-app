import { axiosInstance } from "../lib/axios.js";
import { toast } from "sonner";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isLoggingOut: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axiosInstance.get("auth/check");
      const user = response.data;

      if (!user || typeof user !== "object" || !user._id) {
        throw new Error("Invalid auth response");
      }

      set({ authUser: user });
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(`Error in checkAuth: ${errorMessage}`);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const response = await axiosInstance.post("auth/sign-up", data);
      set({ authUser: response.data });
      toast.success("User created successfully");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Signup failed";
      toast.error(errorMessage);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post("auth/login", data);
      set({ authUser: response.data });
      toast.success("User logged in successfully");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axiosInstance.post("auth/logout");
      set({ authUser: null });
      toast.success("User logged out successfully");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Logout failed";
      toast.error(errorMessage);
    } finally {
      set({ isLoggingOut: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await axiosInstance.put("auth/update-profile", data);
      set({ authUser: response.data.updatedUser });
      toast.success("Profile updated successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Profile update failed";
      toast.error(errorMessage);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
