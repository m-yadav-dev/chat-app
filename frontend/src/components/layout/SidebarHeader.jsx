import { EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import UsersAvatar from "../common/userAvatar";
// import { useChatStore } from "@/store/useChatStore";

const SidebarHeader = () => {
  // const {fullName, } = useChatStore();
  return (
    <header className="border-b border-zinc-200/70 px-4 py-3.5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <UsersAvatar />
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-zinc-900">
              Ravi Maheshwari
            </h2>
            <p className="truncate text-xs text-zinc-500">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full text-zinc-600 hover:bg-zinc-200/70 cursor-pointer"
          >
            <EllipsisVerticalIcon className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SidebarHeader;
