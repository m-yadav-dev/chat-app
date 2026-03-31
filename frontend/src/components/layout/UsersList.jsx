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
  {
    id: 5,
    name: "Sarah Johnson", 
    message: "Can you share the user flow diagrams?",
    time: "Sun",
    unread: 1,
    online: true,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 6,
    name: "Marketing Team",
    message: "Campaign launch scheduled for next week.",
    time: "Sat",
    unread: 0,
    online: false,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 7,
    name: "Emily Davis",
    message: "Great work on the latest release!",
    time: "Fri",
    unread: 0,
    online: true,
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  },
  {
    id: 8,
    name: "Dev Team",
    message: "Code freeze starts tomorrow.",
    time: "Thu",
    unread: 3,
    online: false,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 9,
    name: "Michael Lee",
    message: "Can we sync up on the API integration?",
    time: "Wed",
    unread: 0,
    online: true,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 10,
    name: "Michelle Brown",
    message: "Reminder: Submit your timesheets by EOD.",
    time: "Tue",
    unread: 0,
    online: false,
    image: "https://images.unsplash.com/photo-1534528741773-19033b8a4d7d?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 11,
    name: "Lucas Wilson",
    message: "Can you review the latest PR?",
    time: "Mon",
    unread: 0,
    online: true,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 12,
    name: "Maya Patel",
    message: "Thanks for the feedback!",
    time: "Mon",
    unread: 0,
    online: false,
    image: "https://images.unsplash.com/photo-1534528741773-19033b8a4d7d?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 13,
    name: "Ethan Martinez",
    message: "Can we have a quick call to discuss the roadmap?",
    time: "Mon",  
    unread: 0,
    online: true,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 14,
    name: "Olivia Garcia",
    message: "Please review the latest design mockups.",
    time: "Mon",
    unread: 0,
    online: false,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 15,
    name: "Noah Anderson",
    message: "Can you share the project timeline?",
    time: "Mon",
    unread: 0,
    online: true,
    image: "https://images.unsplash.com/photo-1534528741773-19033b8a4d7d?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 16,
    name: "Sophia Lee",
    message: "Great job on the presentation!",
    time: "Mon",
    unread: 0,
    online: false,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 17,
    name: "Liam Smith",
    message: "Can we discuss the budget for the next quarter?",
    time: "Mon",
    unread: 0,
    online: true,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  },
  {
    id: 18,
    name: "Ava Johnson",
    message: "Please review the latest user feedback.",
    time: "Mon",
    unread: 0,
    online: false,
    image: "https://images.unsplash.com/photo-1534528741773-19033b8a4d7d?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  },
  {
    id : 19,
    name: "Rakesh Gupta",
    message: "Can you share the latest sales figures?",
    time: "Mon",
    unread: 0,
    online: true,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }, 
  {
    id: 20,
    name: "Priya Singh",
    message: "Thanks for the update!",
    time: "Mon",
    unread: 0,
    online: false,
    image: "https://images.unsplash.com/photo-1534528741773-19033b8a4d7d?auto=format&fit=crop&w=120&q=80",
    pinned: false,
  }
];


const UsersList = () => {
  return (
    <section className="chat-scrollbar min-h-0 flex-1 overflow-y-auto px-2.5 py-3">
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
