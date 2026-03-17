import dayjs from "dayjs";
import { ImageIcon } from "lucide-react";
import React from "react";

const ChatBubble = (props) => {
  const { isMe, conversationData } = props;
  const { text, messageType, createdAt } = conversationData;
  const time = createdAt ? dayjs(createdAt).format("h:mm A") : "";
  return (
    <div
      className={`px-4 py-2.5 shadow-sm text-[15px] leading-relaxed ${
        isMe
          ? "bg-emerald-600 text-white rounded-2xl rounded-tr-sm"
          : "bg-slate-800 border border-slate-700/50 text-slate-100 rounded-2xl rounded-tl-sm"
      }`}
    >
      {text}
      {messageType === "image" && (
        <div className="mt-2 rounded-lg bg-slate-700/50 w-full h-32 flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-slate-400" />
        </div>
      )}
      {time && (
        <span className="text-[10px] text-slate-500 mt-1.5 px-1 font-medium">
          {time} {isMe && "• Read"}
        </span>
      )}
    </div>
  );
};

export default ChatBubble;
