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
    const { selectedUser } = get();
    const { authUser } = useAuthStore.getState();
    if (!selectedUser || !authUser) return;

    const tempId = `temp-${Date.now()}`;

    const optimisticMessage = {
      _id: tempId,
      senderId: authUser._id,
      receiverId: selectedUser._id,
      createdAt: new Date().toISOString(),
      text: messageData.text || "",
      media: messageData.media ? { url: messageData.media.url } : null,
      messageType: messageData.messageType ? "image" : "text",
      status: "sending",
    };

    set((state) => ({
      messages: [...state.messages, optimisticMessage],
      isSendingMessage: true,
    }));

    try {
      const response = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData,
      );
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg._id === tempId ? response.data : msg,
        ),
      }));
    } catch (error) {
      console.error(`Error in sendMessage: ${error}`);
      const errorMessage =
        error.response?.data?.messages || "Failed to send message";
      toast.error(errorMessage);
      set((state) => ({
        messages: state.messages.map((msg) =>
          msg._id === tempId ? { ...msg, status: "failed" } : msg,
        ),
      }));
    } finally {
      set({ isSendingMessage: false });
    }
  },

  setSelectedUser: (user) => set({ selectedUser: user }),



  subscribeToSocket: () => {
    const {selectedUser} = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;

    socket.on(`newMessage`, (message) => {
        const isMessageSentFromSelectedUser = message.senderId === selectedUser._id;
        if (!isMessageSentFromSelectedUser) {
            return;
        }
        set((state) => ({
          messages: [...state.messages, message],
        })
        )
    })
  },


  unSubscribeToSocket: () => {
    const socket = useAuthStore.getState().socket;
    if (!socket) return;
    socket.off(`newMessage`);
  }


}));
