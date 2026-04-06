import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ConversationMessages from "./ConversationMessages";
import MessageInput from "./MessageInput";
import ChatInputMessageDropdown from "./ChatInputMessageDropdown";
import { motion } from "framer-motion";
import { useChatStore } from "@/store/useChatStore";

const chatDropdownOptions = [
  { id: 1, label: "Attach Image" },
  { id: 2, label: "Attach File" },
  { id: 3, label: "Share Audio" },
];

const ChatContainer = () => {
  const {
    disconnectFromSocketMessages,
    connectToSocketMessages,
    selectedUser,
  } = useChatStore();

  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    connectToSocketMessages();
    return () => disconnectFromSocketMessages();
  }, [selectedUser]);

  
  useEffect(() => {
    setIsTyping(message.trim().length > 0);
  }, [message]);

  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden border-l border-zinc-200/70 bg-[linear-gradient(180deg,#fafafa_0%,#f5f5f5_100%)]">
      <ChatHeader />
      <ConversationMessages />
      <div className="mt-auto flex items-center flex-col relative justify-center px-4 py-4">
        {isDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-20.5 left-4 z-20 w-48 space-y-1 rounded-xl border border-zinc-200/80 bg-white p-2 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)]"
          >
            {chatDropdownOptions.map((option) => (
              <ChatInputMessageDropdown key={option.id} label={option.label} />
            ))}
          </motion.ul>
        )}
        <MessageInput
          message={message}
          setMessage={setMessage}
          isTyping={isTyping}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>
    </section>
  );
};

export default ChatContainer;
