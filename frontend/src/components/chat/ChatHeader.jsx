import { useChatStore } from "@/store/useChatStore";
import { ArrowLeft, MoreVertical, Phone, Video } from "lucide-react";
import React from "react";
import AvatarLogo from "../layout/Avatar";

const ChatHeader = ({ setActiveChat, activeChat, isOnline, isTyping }) => {
  const { users, selectedUser } = useChatStore();
  const activeChatId = activeChat ?? selectedUser?._id;

  const activeUser =
    selectedUser ?? users.find((user) => user._id === activeChatId);

  return (
    <div className="h-16 flex-shrink-0 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 relative z-10">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveChat(null)}
          className="mr-2 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors md:hidden"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold border border-slate-700">
          <AvatarLogo user={activeUser} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm">
            {activeUser?.fullName}
          </h3>
          {isTyping ? (
            <p className="text-xs text-emerald-300 font-medium animate-pulse">
              Typing...
            </p>
          ) : (
            <p
              className={`text-xs ${isOnline ? "text-emerald-400" : "text-gray-500"}`}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
          <Phone className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
          <Video className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
