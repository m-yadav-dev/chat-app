import LoginForm from "@/components/auth/LoginForm";
import { MessageSquare, ShieldCheck, Zap } from "lucide-react";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans">
        {/* Outer Card Container */}
        <div className="w-full max-w-5xl h-auto md:h-[650px] grid grid-cols-1 md:grid-cols-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative">
          {/* Ambient Glows for the whole card */}
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* LEFT SIDE: Form Layout */}
          <div className="flex flex-col justify-center p-8 md:p-12 relative z-10">
            {/* Logo / Brand Name */}
            <div className="absolute top-8 left-8 md:top-10 md:left-12 flex items-center gap-2">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="text-white font-semibold tracking-wide text-sm">
                CHATT-APP
              </span>
            </div>

            {/* Mount the reusable form */}
            <div className="mt-16 md:mt-0">
              <LoginForm />
            </div>
          </div>

          {/* RIGHT SIDE: Minimalist Secure Connection Visual */}
          <div className="hidden md:flex flex-col items-center justify-center bg-slate-950 border-l border-slate-800 relative overflow-hidden z-10">
            {/* Subtle background pattern (Grid) */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            {/* Abstract Security/Speed Visual */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Holographic Icon Composition */}
              <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
                {/* Outer spinning dashed ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-700 animate-[spin_20s_linear_infinite]"></div>

                {/* Middle glowing ring */}
                <div className="absolute inset-4 rounded-full border border-emerald-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Core shape */}
                <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-emerald-500/20 flex items-center justify-center relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20"></div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 relative z-10" />
                </div>

                {/* Little floating badges */}
                <div
                  className="absolute -right-4 top-4 bg-slate-800 border border-slate-700 p-2 rounded-lg shadow-lg animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <Zap className="w-4 h-4 text-sky-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Fast, Secure & Sync
              </h3>
              <p className="text-slate-400 text-sm max-w-[260px] leading-relaxed">
                Log in to seamlessly pick up your conversations right where you
                left off.
              </p>

              {/* Simulated Server Ping Indicator */}
              <div className="mt-12 flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wide">
                  SYSTEM ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
