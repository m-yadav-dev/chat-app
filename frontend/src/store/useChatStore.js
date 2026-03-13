import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { create } from "zustand";
import { useAuthStore } from "./useAuthStore";

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

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    if (!selectedUser) return;
    const {authUser} = useAuthStore.getState();

    const tempId = `temp-${Date.now()}`

    const optimisticUpdate = {
      _id: tempId,
      senderId: authUser._id,
      receiverId: selectedUser._id,
      createdAt: new Date().toISOString(),
      text: messageData.text || "", 
      media: messageData.media ? {url: messageData.media.url} : null,
      messageType: messageData.messageType?  "image" :"text" ,
      status: "sent", 
    }


    set({messages: [...messages, optimisticUpdate], isSendingMessage: true });


    try {
      const response = await axiosInstance.post(`/messages/send/${userId}`);
      set({ messages: get().messages.filter((msg) => msg._id === tempId ? response.data : msg));
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
