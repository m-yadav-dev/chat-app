import React from "react";
import ChatHeader from "./ChatHeader";
import ConversationMessages from "./ConversationMessages";


const ChatContainer = () => {
  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden border-l border-zinc-200/70 bg-[linear-gradient(180deg,#fafafa_0%,#f5f5f5_100%)]">
      <ChatHeader />
      <ConversationMessages />
    </section>
  );
};

export default ChatContainer;
