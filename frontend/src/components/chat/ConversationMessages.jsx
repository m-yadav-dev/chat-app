import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import ChatBubble from "./ChatBubble";
import dayjs from "dayjs";
const ConversationMessages = (props) => {
  const { conversationData } = props;
  const { authUser } = useAuthStore();

  const { senderId, createdAt } = conversationData;

  const isMe = senderId === authUser?._id;
  const time = dayjs(createdAt).format("h:mm A");

  return (
    <>
      <div
        className={`flex flex-col ${isMe ? "items-end" : "items-start"} max-w-[85%] sm:max-w-[70%]`}
      >
        <ChatBubble isMe={isMe} conversationData={conversationData} />
        <span className="text-[10px] text-slate-500 mt-1.5 px-1 font-medium">
          {time} {isMe && "• Read"}
        </span>
      </div>
    </>
  );
};

export default ConversationMessages;
