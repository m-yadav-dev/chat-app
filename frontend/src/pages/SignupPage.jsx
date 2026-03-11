import SignupForm from "@/components/auth/SignupForm";
import { MessageSquare } from "lucide-react";

const SignupPage = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans">
        {/* Outer Card Container */}
        <div className="w-full max-w-5xl h-auto md:h-[650px] grid grid-cols-1 md:grid-cols-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* LEFT SIDE: Form Layout */}
          <div className="flex flex-col justify-center p-8 md:p-12 relative">
            {/* Logo / Brand Name */}
            <div className="absolute top-8 left-8 md:top-10 md:left-12 flex items-center gap-2">
              <div className="p-2 bg-gray-800/40 rounded-lg">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-white font-semibold tracking-wide text-sm">
                CHATT-APP
              </span>
            </div>

            {/* Mount the reusable form */}
            <div className="mt-16 md:mt-0">
              <SignupForm />
            </div>
          </div>

          {/* RIGHT SIDE: Minimalist Chat Vibe Visual */}
          <div className="hidden md:flex flex-col items-center justify-center bg-slate-950 border-l border-slate-800 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-500 via-transparent to-transparent bg-[length:20px_20px]"></div>

            {/* Floating UI Composition representing a chat app */}
            <div className="relative z-10 w-full max-w-sm p-6 space-y-6">
              {/* Header of the fake chat */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Team Chat</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                    Online
                  </p>
                </div>
              </div>

              {/* Chat Bubble 1 (Received) */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-500 text-xs font-bold">JD</span>
                </div>
                <div className="bg-emerald-700 text-slate-200 text-sm p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                  Hey! Just joined Chatt-App 👋 The real-time speed is insane.
                </div>
              </div>

              {/* Chat Bubble 2 (Sent) */}
              <div className="flex gap-3 flex-row-reverse">
                <div className="bg-gray-650 text-white text-sm p-3 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                  I know right? The interface is incredibly clean too.
                </div>
              </div>

              {/* Chat Bubble 3 (Received) - Loading state */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-500 text-xs font-bold">AK</span>
                </div>
                <div className="bg-slate-800 text-slate-200 text-sm p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
              </div>
            </div>

            {/* Inspirational Text */}
            <div className="absolute bottom-10 text-center">
              <h4 className="text-white font-medium mb-1">
                Seamless Communication
              </h4>
              <p className="text-slate-500 text-xs max-w-xs mx-auto">
                Built for speed, security, and a beautiful user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
