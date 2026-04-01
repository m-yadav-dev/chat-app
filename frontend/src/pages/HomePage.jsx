import ChatContainer from "@/components/chat/ChatContainer";
import Header from "@/components/layout/Header";
import NoChatSelected from "@/components/chat/NoChatSelected";
import Sidebar from "@/components/layout/Sidebar";
import { useChatStore } from "@/store/useChatStore";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#f8fafc,#f4f4f5_45%,#e4e4e7)]">
      <Header />
      <main className="mx-auto flex h-[calc(100vh-72px)]
       w-full flex-row overflow-hidden px-0">
        <div className="h-full w-full shrink-0 md:w-96 lg:w-104">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="hidden min-w-0 flex-1 md:flex">
          {/* Chat Container*/}
          {selectedUser ? (
            <ChatContainer />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <NoChatSelected />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
