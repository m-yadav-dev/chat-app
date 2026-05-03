import { useChatStore } from "@/store/useChatStore";
import { Mic, Paperclip, Send } from "lucide-react";

const MessageInput = ({
  message,
  setMessage,
  isTyping,
  setIsDropdownOpen,
  selectedMediaFile,
  messageType,
  clearAttachmentSelection,
}) => {
  const { sendMessage, isMessageSending } = useChatStore();

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if (!message.trim() && !selectedMediaFile) {
      return;
    }

    await sendMessage({
      text: message,
      media: selectedMediaFile,
      messageType: messageType,
    });

    setMessage("");
    clearAttachmentSelection();
  };
  return (
    <div className="w-full rounded-full border border-zinc-200/70 bg-white shadow-sm transition-all duration-200 focus-within:border-zinc-300 focus-within:ring-1 focus-within:ring-zinc-400/40 flex items-center px-3 py-2 gap-2 sm:px-4 sm:py-2.5 sm:gap-3 md:px-5 md:py-3 md:gap-4 lg:px-6">
      {/* Attach Icon - Left */}
      <form
        action=""
        className="flex items-center w-full"
        onSubmit={handleSendMessage}
      >
        <button
          type="button"
          className="shrink-0 cursor-pointer flex items-center justify-center rounded-full p-1.5 text-zinc-500 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-700 active:scale-90 sm:p-2 md:p-2.5 lg:p-3"
          title="Attach file"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <Paperclip size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" />
        </button>

        {/* Textarea */}
        <textarea
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 resize-none bg-transparent text-xs leading-relaxed text-zinc-900 placeholder:text-zinc-400 outline-none max-h-24 sm:text-sm md:text-base md:leading-relaxed"
        />

        {/* Mic or Send Icon - Right */}
        <button
          type="submit"
          className={`shrink-0 cursor-pointer flex items-center justify-center rounded-full p-1.5 transition-all duration-200 active:scale-90 sm:p-2 md:p-2.5 lg:p-3 ${
            isTyping
              ? "text-blue-500 hover:bg-blue-50 hover:text-blue-600"
              : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
          }`}
          title={isTyping ? "Send message" : "Record audio"}
          disabled={isMessageSending}
        >

          {isTyping ? (
            <Send size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" />
          ) : (
            <Mic size={18} strokeWidth={2} className="sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6" />
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
