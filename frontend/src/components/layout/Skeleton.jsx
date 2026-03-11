import React from "react";

const Skeleton = () => {
  return (
    <div className="space-y-2 ">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="w-full flex items-center gap-3 p-3 rounded-xl animate-pulse"
        >
          <div className="w-12 h-12 bg-slate-800 rounded-full flex-shrink-0"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-slate-800 rounded w-1/2"></div>
            <div className="h-3 bg-slate-800/50 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
