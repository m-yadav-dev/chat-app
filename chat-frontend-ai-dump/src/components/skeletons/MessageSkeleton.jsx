import React from "react";

const MessageSkeleton = () => {
  const skeletonMessages = Array.from({ length: 6 });

  return (
    <div className="flex-1 overflow-hidden p-4 sm:p-6 space-y-6 bg-slate-950 w-full h-full">
      {skeletonMessages.map((_, idx) => {
        const isMe = idx % 2 !== 0;

        return (
          <div key={idx} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-3 max-w-[85%] sm:max-w-[70%] ${isMe ? "flex-row-reverse" : "flex-row"}`}>
              
              {!isMe && (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 flex-shrink-0 animate-pulse border border-slate-700/50"></div>
              )}

              <div className={`flex flex-col gap-2 ${isMe ? "items-end" : "items-start"}`}>
                
                <div 
                  className={`h-12 sm:h-16 rounded-2xl animate-pulse ${
                    isMe 
                      ? "bg-emerald-900/20 border border-emerald-500/10 rounded-tr-sm" 
                      : "bg-slate-800 rounded-tl-sm border border-slate-700/50"
                  }`}
                  style={{ width: `${Math.floor(Math.random() * (250 - 120 + 1)) + 120}px` }}
                ></div>

                {/* Timestamp Skeleton */}
                <div className="h-3 w-12 bg-slate-800/80 rounded-full animate-pulse mt-1"></div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageSkeleton;
