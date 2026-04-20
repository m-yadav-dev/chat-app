import React from "react";
import UsersAvatar from "../common/userAvatar";
import { useChatStore } from "@/store/useChatStore";
import { ArrowLeft, EllipsisVerticalIcon, Phone, Search } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { fullName, profilePic } = selectedUser || {};

  const { onlineUsers } = useAuthStore();
  const isUserOnline = onlineUsers.includes(selectedUser?._id);


  return (
    <header
      className="sticky top-0 z-20 flex items-center gap-2 border-b border-zinc-200/70 bg-zinc-50/95 px-3 py-3 backdrop-blur-sm md:gap-3 md:px-4 md:py-3.5"
    >
      <button
        type="button"
        onClick={() => setSelectedUser(null)}
        className="flex size-10 shrink-0 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900 md:hidden"
        aria-label="Back to chats"
      >
        <ArrowLeft className="size-5" />
      </button>

      <div className="min-w-0 flex items-center gap-2">
        <UsersAvatar 
        size="sm" fullName={fullName} 
        image={profilePic} online={isUserOnline} className="mt-0.5" />
        <div className="min-w-0">
          <h2 className="truncate text-[16px] font-medium text-zinc-900">{fullName}</h2>
          <p className={`text-xs ${isUserOnline ? "text-emerald-500" : "text-zinc-500"}`}>
            {isUserOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1 md:gap-2">
        <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900">
          <Phone className="size-5 text-zinc-600 hover:text-zinc-900" />
        </button>
        <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900">
          <Search className="size-5 text-zinc-600 hover:text-zinc-900" />
        </button>
        <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-200/70 hover:text-zinc-900">
          <EllipsisVerticalIcon className="size-5 text-zinc-600 hover:text-zinc-900" />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
