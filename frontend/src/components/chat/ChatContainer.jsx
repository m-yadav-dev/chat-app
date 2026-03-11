import React from "react";
import EmptyChatState from "./EmptyChatState";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import dayjs from "dayjs";
import { ArrowLeft, MoreVertical, Paperclip, Phone, Send, Video } from "lucide-react";

const ChatContainer = ({ activeChat, setActiveChat, isMobileView }) => {
  const { messages, users, selectedUser } =
    useChatStore();
  const { authUser } = useAuthStore();

  const activeChatId = activeChat ?? selectedUser?._id;

  if (isMobileView && !activeChatId) return null;

  if (!activeChatId) {
    return <EmptyChatState />;
  }

  const activeUser =
    selectedUser ?? users.find((user) => user._id === activeChatId);

  return (
    <div className="flex-1 flex flex-col bg-transparent relative w-full h-full">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* 1. Chat Header */}
      <div className="h-16 flex-shrink-0 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-3">
          {isMobileView && (
            <button
              onClick={() => setActiveChat(null)}
              className="mr-2 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold border border-slate-700">
            {activeUser?.fullName.charAt(0)}
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">
              {activeUser?.fullName}
            </h3>
            <p className="text-xs text-emerald-400">Offline</p>
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

      {/* 2. Message History Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 relative z-10 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        {messages.map((msg) => {
          const isMe = msg.senderId === authUser._id;
          const time = dayjs(msg.createdAt).format("h:mm A");
          return (
            <div
              key={msg._id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex flex-col ${isMe ? "items-end" : "items-start"} max-w-[85%] sm:max-w-[70%]`}
              >
                {/* Chat Bubble */}
                <div
                  className={`px-4 py-2.5 shadow-sm text-[15px] leading-relaxed ${
                    isMe
                      ? "bg-emerald-600 text-white rounded-2xl rounded-tr-sm"
                      : "bg-slate-800 border border-slate-700/50 text-slate-100 rounded-2xl rounded-tl-sm"
                  }`}
                >
                  {msg.text}

                  {/* Future Proof: Space for Polymorphic Image rendering */}
                  {msg.type === "image" && (
                    <div className="mt-2 rounded-lg bg-slate-700/50 w-full h-32 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-slate-400" />
                    </div>
                  )}
                </div>

                {/* Timestamp */}
                <span className="text-[10px] text-slate-500 mt-1.5 px-1 font-medium">
                  {time} {isMe && "• Read"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Message Input Area */}
      <div className="p-4 bg-slate-950 border-t border-slate-800/50 relative z-10">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          {/* Attachment Menu Trigger (Future) */}
          <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors flex-shrink-0">
            <Paperclip className="w-5 h-5" />
          </button>

          {/* Input Box */}
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all flex items-center min-h-[44px]">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-transparent text-white text-sm px-4 py-3 focus:outline-none placeholder:text-slate-500"
            />
          </div>

          {/* Send Button */}
          <button className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors flex-shrink-0 shadow-lg shadow-emerald-500/20">
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
