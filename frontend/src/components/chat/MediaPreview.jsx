import { Send, X } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import ImageMediaType from "./MessageTypes/ImageMediaType";
import AudioMediaType from "./MessageTypes/AudioMediaType";
import DocumentMediaType from "./MessageTypes/DocumentMediaType";
import { useChatStore } from "@/store/useChatStore";
import Loader from "../loader/Loader";

const MediaPreview = ({
  previewUrl,
  messageType,
  clearAttachmentSelection,
  message,
  setMessage,
  selectedMediaFile,
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

  const mediaPreviewDecisionRoute = () => {
    switch (messageType) {
      case "image":
        return (
          <div className="w-full max-w-xl rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)]">
            <ImageMediaType file={previewUrl} text={message} />
          </div>
        );
      case "audio":
        return (
          <div className="w-full max-w-md rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)]">
            <AudioMediaType file={previewUrl} />
          </div>
        );
      case "document":
        return (
          <div className="w-full max-w-md rounded-2xl border border-zinc-200/70 bg-white p-4 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)]">
            <DocumentMediaType file={previewUrl} text={message} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header className="w-full border-b border-zinc-200/70 bg-white/95 px-5 py-3.5 flex items-center justify-between backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-zinc-900">Media Preview</h3>
        <button
          onClick={clearAttachmentSelection}
          className="text-zinc-400 hover:text-zinc-600 
            cursor-pointer
          transition-colors duration-150 active:scale-90"
          aria-label="Close preview"
        >
          <X size={20} strokeWidth={2} />
        </button>
      </header>

      <div className="relative flex-1 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(244,244,245,0.9))] px-4 py-10">
        {mediaPreviewDecisionRoute()}
      </div>

      <form
        className="w-full border-t border-zinc-200/70 bg-white px-4 py-4 flex items-center gap-3"
        onSubmit={handleSendMessage}
      >
        <Input
          placeholder="Add a caption..."
          className="flex-1 border border-zinc-300/80 
          rounded-lg px-4 py-2.5 text-sm focus:outline-none 
          focus:border-blue-500 
          focus:ring-1 focus:ring-blue-500/30 transition-all duration-200 bg-zinc-50/50 placeholder:text-zinc-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {isMessageSending && (
          <Loader mode="inline" label="Sending..." size={16} />
        )}

        <button
          className="shrink-0 cursor-pointer flex items-center justify-center rounded-full p-2 transition-all duration-200 active:scale-90"
          type="submit"
          disabled={isMessageSending}
        >
          {!isMessageSending && (
            <Send
              size={20}
              strokeWidth={2}
              className="text-blue-500 hover:text-blue-600 transition-colors duration-150 active:scale-90"
            />
          )}
        </button>
      </form>
    </>
  );
};

export default MediaPreview;
