import ChatContainer from "@/components/chat/ChatContainer";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MessageSkeleton from "@/components/skeletons/MessageSkeleton";
import { useChatStore } from "@/store/useChatStore";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const HomePage = () => {
  const isMobileView = typeof window !== "undefined" && window.innerWidth < 768;
  const { isMessageLoading } = useChatStore();
  const [activeChat, setActiveChat] = useState(null);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans flex flex-col h-screen overflow-hidden">
        {/* Fake Navbar for context (From Phase 1) */}
        <header className="h-16 flex-shrink-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center px-6 z-20">
          <div className="flex items-center gap-2 text-emerald-500 font-bold">
            <MessageSquare className="w-5 h-5" /> CHATT-APP
          </div>
        </header>

        {/* Main Layout Area */}
        <main className="flex-1 flex overflow-hidden relative">
          <Sidebar />

          {isMessageLoading ? (
            <MessageSkeleton />
          ) : (
            <ChatContainer
              isMobileView={isMobileView}
              activeChat={activeChat}
              setActiveChat={setActiveChat}
            />
          )}
        </main>
      </div>
    </>
  );
};

export default HomePage;
