import React from "react";
import { PinIcon } from "lucide-react";
import UsersAvatar from "./Avatar";

const UserListItem = ({ chat }) => {
  const { name, message, time, unread, online, image, pinned } = chat;
  return (
    <li
      className="group rounded-2xl border border-transparent 
    px-2.5 py-2.5 transition-colors hover:border-zinc-200 hover:bg-white "
    >
      <div className="flex items-start gap-3">
        <UsersAvatar image={image} name={name} online={online} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-semibold text-zinc-900">
              {name}
            </p>
            <span className="shrink-0 text-[11px] text-zinc-400">{time}</span>
          </div>

          <div className="mt-0.5 flex items-center gap-1.5">
            {pinned && <PinIcon className="size-3 text-zinc-400" />}
            <p className="truncate text-xs text-zinc-500">{message}</p>
          </div>
        </div>

        {unread > 0 && (
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1 text-[11px] font-semibold text-zinc-100">
            {unread}
          </span>
        )}
      </div>
    </li>
  );
};

export default UserListItem;
