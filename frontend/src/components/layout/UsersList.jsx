import React from "react";
import UserListItem from "./UserListItem";

const staticChats = [
  {
    id: 1,
    name: "Anaya Roy",
    message: "Can we finalize the UI cards today?",
    time: "10:24",
    unread: 2,
    online: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    pinned: true,
  },
  {
    id: 2,
    name: "Design Team",
    message: "You: Sent the latest prototype screens",
    time: "09:42",
    unread: 0,
    online: false,
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  },
  {
    id: 3,
    name: "Aarav N",
    message: "Looks clean. Let us ship this version.",
    time: "Yesterday",
    unread: 0,
    online: true,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  },
  {
    id: 4,
    name: "Product Updates",
    message: "Sprint review moved to 4 PM.",
    time: "Mon",
    unread: 4,
    online: false,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  },
];
const UsersList = () => {
  return (
    <section className="min-h-0 flex-1 overflow-y-auto px-2.5 py-3">
      <div className="mb-2 flex items-center justify-between px-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
          Recent Chats
        </p>
        <span className="text-xs text-zinc-400">8 conversations</span>
      </div>

      <ul className="space-y-1 list-style-none">
        {staticChats.map((chat) => (
          <UserListItem key={chat.id} chat={chat} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
