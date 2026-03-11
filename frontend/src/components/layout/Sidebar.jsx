import React, { useEffect, useState } from "react";
import { useChatStore } from "@/store/useChatStore";
// import { useAuthStore } from "@/store/useAuthStore";
import {
  Search,
  Plus,
  Filter,
  MoreVertical,
  MessageSquare,
  Users,
} from "lucide-react";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import UsersList from "./UsersList";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { getUsers, users, isUserLoading } = useChatStore();
  // const { authUser } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filterUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <aside className="h-full w-full md:w-80 lg:w-96 flex flex-col bg-slate-900 border-r border-slate-800 transition-all duration-300">
      {/* 1. SIDEBAR HEADER (Future-Proofed with Action Icons) */}
      <div className="p-4 border-b border-slate-800/50 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Messages
            <span className="bg-emerald-500/10 text-emerald-400 text-xs py-0.5 px-2 rounded-full border border-emerald-500/20">
              {/* {MOCK_USERS.length} */}
              {users.length > 0 ? users.length : 0}
            </span>
          </h2>

          {/* Action Buttons for Future Features (New Chat, Settings) */}
          <div className="flex items-center gap-1">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors tooltip relative group">
              <Plus className="w-5 h-5" />
              <span className="absolute hidden group-hover:block -bottom-8 bg-slate-800 text-xs px-2 py-1 rounded text-white whitespace-nowrap z-50">
                New Chat
              </span>
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. SEARCH BAR (Sticky on top) */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-slate-950/50 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      {/* 3. SCROLLABLE CONTACT LIST */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        <ul className="p-2 space-y-1 list-unstyled">
          {isUserLoading ? (
            <SidebarSkeleton 
            />
          ) : filterUsers.length === 0 ? (
            <div className="text-center py-10 px-4">
              <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-slate-500" />
              </div>
              <p className="text-slate-400 text-sm">No users found.</p>
            </div>
          ) : (
            filterUsers.map((user) => <UsersList key={user._id} user={user} />)
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
