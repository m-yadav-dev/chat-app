import React, { useState, useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ConversationMessages from "./ConversationMessages";
import MessageInput from "./MessageInput";
import ChatInputMessageDropdown from "./ChatInputMessageDropdown";
import { useChatStore } from "@/store/useChatStore";
import { toast } from "sonner";

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
  // const [selectedMedia, setSelectedMedia] = useState(null);
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const audioInputRef = useRef(null);

  const attachmentInputs = {
    image: imageInputRef,
    file: fileInputRef,
    audio: audioInputRef,
  };

  const handleAttachmentSelect = (event, attachmentType) => {
    attachmentInputs[attachmentType]?.current?.click();
    const file = event.target.files[0];
    if (!file) {
      toast.error("Please select a file to attach.");
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(`File Selected: ${event.target.result}`);
      };
    }
  };

  useEffect(() => {
    connectToSocketMessages();
    return () => disconnectFromSocketMessages();
  }, [connectToSocketMessages, disconnectFromSocketMessages, selectedUser]);

  useEffect(() => {
    setIsTyping(message.trim().length > 0);
  }, [message]);

  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden border-l border-zinc-200/70 bg-[linear-gradient(180deg,#fafafa_0%,#f5f5f5_100%)]">
      <input
        onChange={handleAttachmentSelect}
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
      />
      <input
        onChange={handleAttachmentSelect}
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf"
        className="hidden"
      />
      <input
        ref={audioInputRef}
        onChange={handleAttachmentSelect}
        type="file"
        accept="audio/*"
        className="hidden"
      />

      <ChatHeader />
      <ConversationMessages />
      <div className="mt-auto flex items-center flex-col relative justify-center px-4 py-4">
        {isDropdownOpen && (
          <ul className="absolute bottom-20.5 left-4 z-20 w-48 space-y-1 rounded-xl border border-zinc-200/80 bg-white p-2 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)]">
            {chatDropdownOptions.map((option) => (
              <ChatInputMessageDropdown
                key={option.id}
                label={option.label}
                onSelect={() =>
                  handleAttachmentSelect(
                    option.id === 1
                      ? "image"
                      : option.id === 2
                        ? "file"
                        : "audio",
                  )
                }
              />
            ))}
          </ul>
        )}
        <MessageInput
          message={message}
          setMessage={setMessage}
          isTyping={isTyping}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>
    </section>
  );
};

export default ChatContainer;
