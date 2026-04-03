import { EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import UsersAvatar from "../common/userAvatar";
import { useAuthStore } from "@/store/useAuthStore";

const SidebarHeader = () => {
  const { authUser } = useAuthStore();
  const { fullName, profilePic } = authUser || {};
  const { onlineUsers } = useAuthStore();

  const isUserOnline = onlineUsers.includes(authUser._id);

  return (
    <header className="border-b border-zinc-200/70 px-4 py-3.5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <UsersAvatar
            image={profilePic}
            fullName={fullName}
            online={isUserOnline}
            size="lg"
          />
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-zinc-900">
              {fullName}
            </h2>
            <p
              className={`truncate text-xs ${isUserOnline ? "text-green-500" : "text-zinc-500"}`}
            >
              {isUserOnline ? "Active now" : ""}
            </p>
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
