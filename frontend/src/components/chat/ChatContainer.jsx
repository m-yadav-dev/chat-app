import React from "react";
import EmptyChatState from "./EmptyChatState";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import dayjs from "dayjs";
import {
  ArrowLeft,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  ImageIcon,
  Video,
} from "lucide-react";
import ChatHeader from "./ChatHeader";

const ChatContainer = ({ activeChat, setActiveChat }) => {
  const { messages, selectedUser, isMessageLoading } = useChatStore();
  const { authUser, onlineUsers } = useAuthStore();
  const activeChatId = activeChat ?? selectedUser?._id;

  const isOnline = activeChatId ? onlineUsers.includes(activeChatId) : false;
  console.log(isOnline);

  if (!activeChatId) return null;

  if (!activeChatId) {
    return <EmptyChatState />;
  }

  if (isMessageLoading) {
    return (
      <ChatHeader isOnline={isOnline} activeChat={activeChat} setActiveChat={setActiveChat} />
    );
  }

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
      <ChatHeader isOnline={isOnline} activeChat={activeChat} setActiveChat={setActiveChat} />
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
