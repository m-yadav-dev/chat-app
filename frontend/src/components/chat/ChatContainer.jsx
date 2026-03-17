import React, { useEffect, useRef, useState } from "react";
import EmptyChatState from "./EmptyChatState";
import { useChatStore } from "@/store/useChatStore";
import { useAuthStore } from "@/store/useAuthStore";
import { Paperclip, Send } from "lucide-react";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import ConversationMessages from "./ConversationMessages";
import MessageInput from "./MessageInput";
import { cn } from "@/lib/utils";

const TYPING_IDLE_MS = 1200;
const TYPING_EMIT_INTERVAL_MS = 1000;

const ChatContainer = ({ activeChat, setActiveChat, className }) => {
  const { messages, selectedUser, isMessageLoading, sendMessage, typingUsers } =
    useChatStore();
  const { authUser, onlineUsers, socket } = useAuthStore();

  const resolvedActiveChatId =
    typeof activeChat === "string" ? activeChat : activeChat?._id;
  const activeChatId = resolvedActiveChatId ?? selectedUser?._id;
  const [text, setText] = useState("");
  const lastFetchedChatIdRef = useRef(null);
  const messagesEndRef = useRef(null);
  const typingStopTimeoutRef = useRef(null);
  const lastTypingEmitAtRef = useRef(0);
  const isOnline = activeChatId ? onlineUsers.includes(activeChatId) : false;
  const isTyping = activeChatId ? Boolean(typingUsers[activeChatId]) : false;

  const emitTyping = (chatId, isTypingValue) => {
    if (!socket || !authUser?._id || !chatId) return;
    socket.emit("typing", {
      senderId: authUser._id,
      receiverId: chatId,
      isTyping: isTypingValue,
    });
  };

  const clearTypingTimeout = () => {
    if (!typingStopTimeoutRef.current) return;
    clearTimeout(typingStopTimeoutRef.current);
    typingStopTimeoutRef.current = null;
  };

  const scheduleTypingStop = () => {
    clearTypingTimeout();
    typingStopTimeoutRef.current = setTimeout(() => {
      emitTyping(activeChatId, false);
      lastTypingEmitAtRef.current = 0;
    }, TYPING_IDLE_MS);
  };

  useEffect(() => {
    if (!activeChatId) return;
    const { getMessages, subscribeToSocket, unSubscribeToSocket } =
      useChatStore.getState();
    if (lastFetchedChatIdRef.current !== activeChatId) {
      lastFetchedChatIdRef.current = activeChatId;
      getMessages(activeChatId);
    }
    subscribeToSocket();
    return () => unSubscribeToSocket();
  }, [activeChatId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      clearTypingTimeout();
      lastTypingEmitAtRef.current = 0;
      if (socket && authUser?._id && activeChatId) {
        socket.emit("typing", {
          senderId: authUser._id,
          receiverId: activeChatId,
          isTyping: false,
        });
      }
    };
  }, [activeChatId, socket, authUser?._id]);

  if (!activeChatId) {
    return <EmptyChatState />;
  }

  const conversationMessages = messages.filter(
    (msg) =>
      (msg.senderId === activeChatId && msg.receiverId === authUser?._id) ||
      (msg.senderId === authUser?._id && msg.receiverId === activeChatId),
  );

  const onClickSendMessage = (event) => {
    event.preventDefault();

    if (text.trim() === "") return;

    emitTyping(activeChatId, false);

    sendMessage({ text: text.trim(), messageType: "text" });
    setText("");
    lastTypingEmitAtRef.current = 0;
    clearTypingTimeout();
  };

  const onChangeMessageInput = (event) => {
    const nextValue = event.target.value;
    setText(nextValue);

    if (!socket || !authUser?._id || !activeChatId) return;

    const now = Date.now();
    if (now - lastTypingEmitAtRef.current >= TYPING_EMIT_INTERVAL_MS) {
      emitTyping(activeChatId, true);
      lastTypingEmitAtRef.current = now;
    }

    scheduleTypingStop();
  };

  return (
    <div
      className={cn(
        "flex-1 flex flex-col bg-transparent relative w-full h-full",
        className,
      )}
    >
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
      <ChatHeader
        isOnline={isOnline}
        isTyping={isTyping}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      {/* 2. Message History Area */}
      <div
        className={cn(
          "flex-1 p-4 sm:p-6 space-y-6 relative z-10",
          isMessageLoading
            ? "overflow-hidden"
            : "overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent",
        )}
      >
        {isMessageLoading ? (
          <MessageSkeleton />
        ) : (
          <ul className="space-y-6">
            {conversationMessages.map((msg) => (
              <li
                key={msg._id}
                className={`flex ${msg.senderId === authUser._id ? "justify-end" : "justify-start"}`}
              >
                <ConversationMessages conversationData={msg} />
              </li>
            ))}
          </ul>
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* 3. Message Input Area */}
      <div className="p-4 bg-slate-950 border-t border-slate-800/50 relative z-10">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          {/* Attachment Menu Trigger (Future) */}
          <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors flex-shrink-0">
            <Paperclip className="w-5 h-5" />
          </button>

          {/* Input Box */}
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-colors flex items-center">
            <MessageInput
              onChangeMessageInput={onChangeMessageInput}
              text={text}
            />
          </div>

          {/* Send Button */}
          <button
            onClick={onClickSendMessage}
            className="p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors flex-shrink-0 shadow-lg shadow-emerald-500/20"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
