import React from "react";
import { Link } from "react-router-dom";

import { MessageSquare,} from "lucide-react";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {

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

          <div className="flex items-center gap-2 sm:gap-4">
            <DropDownMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
