import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  isUserLoggedIn: false,
  isUserSignUp: false,
  isCheckingAuth: false,
  isUpdatingProfile: false,
  isUserLoggedOut: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });

    try {
      const response = await axiosInstance.get("auth/check");

      const user = response.data;

      if (!user || typeof user !== "object" || !user._id) {
        throw new Error("Invalid user data received.");
      }

      set({ authUser: response.data });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred while checking authentication.";
      console.error(`Error checking authentication: ${errorMessage}`);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (userData) => {
    set({ isUserSignUp: true });
    try {
      await axiosInstance.post("auth/sign-up", userData);
      toast.success("Account created successfully!");
      return true;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during sign-up.";
      toast.error(errorMessage);
      console.error(`Error during sign-up: ${errorMessage}`);
      return false;
    } finally {
      set({ isUserSignUp: false });
    }
  },

  logIn: async (credentials) => {
    set({ isUserLoggedIn: true });
    try {
      const response = await axiosInstance.post("auth/login", credentials);
      set({ authUser: response.data });
      toast.success("Logged in successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during log-in.";
      toast.error(errorMessage);
      console.error(`Error during log-in: ${errorMessage}`);
    } finally {
      set({ isUserLoggedIn: false });
    }
  },

  logout: async () => {
    set({ isUserLoggedOut: true });

    try {
      await axiosInstance.post("auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during log-out.";
      toast.error(errorMessage);
      console.error(`Error during log-out: ${errorMessage}`);
    } finally {
      set({ isUserLoggedOut: false });
    }
  },
}));
