import { create } from "zustand";

export const useChatStore = create((set) => ({

    selectedUser: null,

    setSelectedUser: (user) => set({ selectedUser: user }),
    



}));
