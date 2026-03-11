import { MessageSquare } from "lucide-react";
import React from "react";


const EmptyChatState = () => {
  return (
    <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-transparent relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-xl relative z-10">
        <MessageSquare className="w-10 h-10 text-emerald-500/50" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2 relative z-10">
        Welcome to Chatt-App
      </h2>
      <p className="text-slate-400 max-w-sm text-center relative z-10">
        Select a conversation from the sidebar to start messaging in real-time.
      </p>
    </div>
  );
};

export default EmptyChatState;
