import React from "react";
import UsersAvatar from "../common/userAvatar";
import { useChatStore } from "@/store/useChatStore";
import { EllipsisVerticalIcon, Phone, Search } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
const ChatHeader = () => {
  const { selectedUser } = useChatStore();
  const { fullName, profilePic } = selectedUser || {};

  const { onlineUsers } = useAuthStore();
const isUserOnline = onlineUsers.includes(selectedUser?._id);


  return (
    <header
      className="sticky top-0 z-10 flex items-center gap-3 
    border-b border-zinc-200/70 bg-zinc-50/95 
    px-4 py-3.5 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <UsersAvatar 
        size="sm" fullName={fullName} 
        image={profilePic} online={isUserOnline} className="mt-0.5" />
        <div>
          <h2 className="text-[16px] font-[500] text-zinc-900">{fullName}</h2>
          <p className={`text-xs ${isUserOnline ? "text-emerald-500" : "text-zinc-500"}`}>
            {isUserOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
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
