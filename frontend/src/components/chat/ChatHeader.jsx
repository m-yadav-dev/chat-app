import React from "react";
import UsersAvatar from "../common/userAvatar";
import { useChatStore } from "@/store/useChatStore";
import { EllipsisVerticalIcon, Phone, Search } from "lucide-react";
const ChatHeader = () => {
  const { selectedUser } = useChatStore();
  const { name, image, online } = selectedUser || {};
  return (
    <header
      className="sticky top-0 z-10 flex items-center gap-3 
    border-b border-zinc-200/70 bg-zinc-50/95 
    px-4 py-3.5 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <UsersAvatar 
        size="sm" name={name} 
        image={image} online={online} className="mt-0.5" />
        <div>
          <h2 className="text-[16px] font-[500] text-zinc-900">{name}</h2>
          <p className={`text-xs ${online ? "text-emerald-500" : "text-zinc-500"}`}>
            {online ? "Online" : "Offline"}
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
