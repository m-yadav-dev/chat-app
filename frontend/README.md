

Welcome chat conversation message component-------------------------------------
 

    <div className="hidden md:flex flex-1 bg-slate-950 items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="text-center relative z-10 p-8">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-800 shadow-xl">
                <MessageSquare className="w-10 h-10 text-emerald-500/50" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Welcome to Chatt-App
              </h2>
              <p className="text-slate-400 max-w-sm mx-auto">
                Select a conversation from the sidebar to start messaging in
                real-time.
              </p>
            </div>
          </div>