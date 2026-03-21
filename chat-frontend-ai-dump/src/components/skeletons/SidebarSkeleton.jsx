import React from "react";
import { Skeleton } from "../ui/skeleton";
const SidebarSkeleton = () => {
  return (
    <div className="space-y-2 ">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[70px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarSkeleton;
