import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useChatStore = create((set) => ({
  selectedUser: null,

  users: [],
  isUsersLoading: false,

  setSelectedUser: (user) => set({ selectedUser: user }),

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const response = await axiosInstance.get("messages/users");
      set({ users: response.data });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while fetching users.";
      console.error(`Error fetching users: ${errorMessage}`);
    } finally {
      set({ isUsersLoading: false });
    }
  },
}));
