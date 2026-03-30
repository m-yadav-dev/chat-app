import { useAuthStore } from "@/store/useAuthStore";
import { LogOutIcon } from "lucide-react";
import React from "react";
import Loader from "../loader/Loader";

const Header = () => {
  const { logout, isUserLoggedOut } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  {
    isUserLoggedOut && <Loader />;
  }

  return (
    <header className="p-4 shadow-md shadow-lg sticky top-0 z-50 bg-[#f7f7f7]">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-[650] text-[1.4rem] text-gray-800">Chat App</h3>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center cursor-pointer font-[650] hover:scale-110 duration-110 transition-all gap-2 p-[10px] bg-gray-800 text-white rounded-[8px]"
        >
          <LogOutIcon />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
