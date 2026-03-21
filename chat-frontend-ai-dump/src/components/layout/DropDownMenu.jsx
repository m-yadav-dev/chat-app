import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { useAuthStore } from "@/store/useAuthStore";

import { NavLink } from "react-router-dom";
import { LogOutIcon, Settings, UserIcon } from "lucide-react";

import React from "react";

const DropDownMenu = () => {
  const { logout } = useAuthStore();

  const logoutUser = async () => {
    logout();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-9 gap-2 rounded-xl border border-slate-800/80 bg-slate-900/40 px-3 text-slate-200 transition-colors hover:bg-slate-800/70 hover:text-white"
        >
          <Settings className="h-4 w-4 text-emerald-400" />
          <span className="hidden text-sm font-medium sm:inline">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 rounded-xl border border-slate-800/80 bg-slate-900/95 p-1 text-slate-200 shadow-xl shadow-black/20 backdrop-blur"
      >
        <DropdownMenuItem
          asChild
          className="cursor-pointer gap-2 rounded-lg px-3 py-2 text-sm transition-colors focus:bg-slate-800/10 focus:text-white data-[variant=destructive]:text-rose-400"
        >
          <NavLink to="/profile">
            <UserIcon className="h-4 w-4 text-slate-400" />
            Profile
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 bg-slate-800/80" />
        <DropdownMenuItem
          onClick={logoutUser}
          variant="destructive"
          className="cursor-pointer gap-2 rounded-lg px-3 py-2 text-sm transition-colors focus:bg-rose-500/10 focus:text-rose-300 data-[variant=destructive]:text-rose-400"
        >
          <LogOutIcon className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
