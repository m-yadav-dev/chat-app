import React from "react";
import { Link } from "react-router-dom";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const { logout } = useAuthStore();

  const logoutUser = () => {
    logout();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
              </div>
              <h1 className="text-lg font-bold text-white tracking-wide">
                CHATT-APP
              </h1>
            </Link>
          </div>

          {/* Daayin taraf: Navigation Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Settings Button (Hamesha dikhega) */}
            <Link
              to="/settings"
              className="p-2 sm:px-3 sm:py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2"
            >
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Settings
              </span>
            </Link>
            <>
              <Link
                to="/profile"
                className="p-2 sm:px-3 sm:py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">
                  Profile
                </span>
              </Link>

              <button
                onClick={logoutUser}
                className="p-2 sm:px-3 sm:py-2 rounded-lg text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">
                  Logout
                </span>
              </button>
            </>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
