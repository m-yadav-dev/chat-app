import React from "react";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
const UsersAvatar = ({ image, name, online }) => {
  const fallbackText = name ? name.slice(0, 2).toUpperCase() : "NA";
  return (
    <>
      <Avatar size="lg" className="mt-0.5">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{fallbackText}</AvatarFallback>
        {online && <AvatarBadge className="bg-emerald-500 ring-zinc-100" />}
      </Avatar>
    </>
  );
};

export default UsersAvatar;
