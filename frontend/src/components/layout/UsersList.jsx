import React from "react";
import { useChatStore } from "@/store/useChatStore";

const UsersList = ({ user }) => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { _id, fullName, profilePic } = user;

  const isActive = selectedUser?._id === _id;

  const isProfilePic = !profilePic ? fullName.slice(0, 1) : profilePic;

  return (
    <li
      onClick={() => setSelectedUser(user)}
      className={` w-full flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group relative ${isActive ? "bg-slate-800 shadow-sm" : "hover:bg-slate-800/50"}`}
    >
      {isActive && (
        <div className="absolute  te left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full" />
      )}

      <div className="relative flex-shrink-0">
        <img
          src={isProfilePic}
          className="w-12 h-12 rounded-full object-cover border border-slate-700/50 bg-slate-800"
        />
        {/* {isOnline && (
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    )} */}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1">
          <h3
            className={`text-sm font-semibold truncate pr-2 transition-colors ${isActive ? "text-white" : "text-slate-200"}`}
          >
            {fullName}
          </h3>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p
            className={`text-xs truncate ${isActive ? "text-slate-400" : "text-slate-500"}`}
          >
            Offline
          </p>
        </div>
      </div>
    </li>
  );
};

export default UsersList;
