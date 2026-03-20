import { axiosInstance } from "../lib/axios.js";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { io } from "socket.io-client";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development" ? "http://localhost:3000" : "/api");

export const useAuthStore = create(
  persist(
    (set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isLoggingOut: false,

  socket: null,
  onlineUsers: [],

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axiosInstance.get("auth/check");
      const user = response.data;

      if (!user || typeof user !== "object" || !user._id) {
        throw new Error("Invalid auth response");
      }

      set({ authUser: user });
      get().connectSocket();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(`Error in checkAuth: ${errorMessage}`);

      if (error.response?.status === 401) {
        set({ authUser: null });
      }
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
      get().connectSocket();
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
      get().connectSocket();
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
      get().disconnectSocket();
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

  connectSocket: async () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      withCredentials: true,
      query: { userId: authUser._id },
    });

    socket.connect();

    set({ socket });

    socket.on("getOnlineUsers", (userId) => {
      set({ onlineUsers: userId });
      console.log(`👥 Online Users Array from Backend: ${userId}`);
    });

    // connection check

    socket.on("connect", () => {
      console.log("✅ Socket Connected! My Socket ID is:", socket.id);
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) {
      get().socket.disconnect();
    }
  },
    }),
    {
      name: "auth-store",
      partialize: (state) => ({ authUser: state.authUser }),
    },
  ),
);

