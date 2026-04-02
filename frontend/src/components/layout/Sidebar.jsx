import React from "react";
import { SearchIcon } from "lucide-react";
import SidebarHeader from "./SidebarHeader";
import UsersList from "./UsersList";

const Sidebar = () => {
  return (
    <aside
      className="flex h-full flex-col overflow-hidden rounded-none border-r border-zinc-200/70 bg-linear-to-b from-zinc-50 via-zinc-50
     to-zinc-100/60 md:shadow-[0_12px_38px_-22px_rgba(15,23,42,0.45)] w-full"
    >
      {/* Sidebar Header*/}
      <SidebarHeader />

      <div className="space-y-4 border-b border-zinc-200/60 px-4 py-4">
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
          <input
            placeholder="Search or start a new chat"
            className="h-11 border-2 border-gray-300 w-full rounded-2xl border-zinc-200 bg-white pl-10 shadow-none placeholder:text-zinc-400 focus-visible:ring-zinc-300"
          />
        </div>

        <div className="inline-flex rounded-xl border border-zinc-200 bg-white p-1 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          <span className="rounded-lg bg-zinc-900 px-3 py-1.5 font-medium text-zinc-50">
            All
          </span>
          <span className="rounded-lg px-3 py-1.5 font-medium text-zinc-600">
            Unread
          </span>
          <span className="rounded-lg px-3 py-1.5 font-medium text-zinc-600">
            Groups
          </span>
        </div>
      </div>

      <UsersList />
    </aside>
  );
};

export default Sidebar;
