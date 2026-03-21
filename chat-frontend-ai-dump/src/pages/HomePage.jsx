import ChatContainer from "@/components/chat/ChatContainer";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/store/useChatStore";
import { MessageSquare } from "lucide-react";

const HomePage = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const hasActiveChat = Boolean(selectedUser?._id);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans flex flex-col h-screen overflow-hidden">
        <header className="h-16 flex-shrink-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center px-6 z-20">
          <div className="flex items-center gap-2 text-emerald-500 font-bold">
            <MessageSquare className="w-5 h-5" /> <h3 className="text-[1rem] sm:text-[0.8rem]">CHATT-APP</h3>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden relative">
          <Sidebar
            className={cn(
              hasActiveChat ? "hidden md:flex" : "flex",
            )}
          />
          <ChatContainer
            activeChat={selectedUser}
            setActiveChat={setSelectedUser}
            className={cn(
              hasActiveChat ? "" : "hidden md:flex",
            )}
          />
        </main>
      </div>
    </>
  );
};

export default HomePage;
