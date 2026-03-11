import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,

  isUserLoading: false,
  isMessageLoading: false,
  isSendingMessage: false,

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const response = await axiosInstance.get("/messages/users");
      set({ users: response.data });
    } catch (error) {
      console.error(`Error in getUsers: ${error}`);
      const errorMessage =
        error.response?.data?.messages || "Failed to fetch users";
      toast.error(errorMessage);
    } finally {
      set({ isUserLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessageLoading: true });
    try {
      const response = await axiosInstance.get(`/messages/${userId}`);
      console.log(response);
      set({ messages: response.data });
    } catch (error) {
      console.error(`Error in getMessages: ${error}`);
      const errorMessage =
        error.response?.data?.messages || "Failed to fetch messages";
      toast.error(errorMessage);
    } finally {
      set({ isMessageLoading: false });
    }
  },

  sendMessage: async (userId) => {
    const { selectedUser, messages } = get();
    if (!selectedUser) return;
    set({ isSendingMessage: true });
    try {
      const response = await axiosInstance.post(`/messages/send/${userId}`);
      set({ messages: [...messages, response.data] });
    } catch (error) {
      console.error(`Error in sendMessage: ${error}`);
      const errorMessage =
        error.response?.data?.messages || "Failed to send message";
      toast.error(errorMessage);
    } finally {
      set({ isSendingMessage: false });
    }
  },

  setSelectedUser: (user) => set({ selectedUser: user }),
}));
