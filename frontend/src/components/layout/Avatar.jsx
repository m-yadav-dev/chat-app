import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const AvatarLogo = ({ user }) => {
  const fullName = user?.fullName?.trim() || "";
  const profilePic = user?.profilePic || "";
  const fallbackCharacter = fullName ? fullName.charAt(0) : "?";
  return (
    <>
      <Avatar size="lg" className="bg-slate-700 text-slate-200">
        <AvatarImage src={profilePic || undefined} alt={fullName || "User"} />
        <AvatarFallback className="bg-slate-700 text-slate-200">
          {fallbackCharacter.toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarLogo;
