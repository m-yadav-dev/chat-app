import React, { useEffect } from "react";
import UserListItem from "./UserListItem";
import { useChatStore } from "@/store/useChatStore";
import { SidebarSkeleton } from "../skeletons/SidebarSkeleton";


const UsersList = () => {
  const { getUsers, users, isUsersLoading } = useChatStore();
  const skeletonCount = users.length > 0 ? users.length : 5;

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <section className="chat-scrollbar min-h-0 flex-1 overflow-y-auto px-2.5 py-3">
      <div className="mb-2 flex items-center justify-between px-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
          Recent Chats
        </p>
        <span className="text-xs text-zinc-400">
          {users.length} conversations
        </span>
      </div>

      <ul className="space-y-1 list-style-none">
        {isUsersLoading ? (
          <SidebarSkeleton count={skeletonCount} />
        ) : (
          users.map((chat) => <UserListItem key={chat._id} chat={chat} />)
        )}
      </ul>
    </section>
  );
};

export default UsersList;
