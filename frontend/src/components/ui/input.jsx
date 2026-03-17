import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      placeholder="Enter your text here...."
      className={cn(
        // "w-full h-11 pl-10 pr-4 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors",
        "w-full bg-transparent text-white text-sm px-4 py-3 focus:outline-none placeholder:text-slate-500", 
        className
      )}
      {...props} />
  );
}

export { Input }
