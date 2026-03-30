import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f8fafc,#f4f4f5_45%,#e4e4e7)]">
      <Header />
      <main className="mx-auto flex max-w-7xl flex-row px-0 pb-4 md:px-4">
        <div className="h-[calc(100vh-72px)] w-full md:w-96 lg:w-104">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className="hidden flex-1 items-center justify-center md:flex">
          {/* Chat Container*/}
          <div className="mx-6 w-full rounded-3xl border border-zinc-200/70 bg-white/65 p-10 text-center shadow-[0_18px_44px_-30px_rgba(15,23,42,0.55)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
              Chat Area Preview
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
              Select a conversation to start messaging
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500">
              This static layout keeps the focus on the redesigned sidebar while
              preserving space for future chat content.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
