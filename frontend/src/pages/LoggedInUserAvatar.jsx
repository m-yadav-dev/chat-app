import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const LoggedInUserAvatar = ({ selectedImage, user }) => {
  const fullName = user?.fullName?.trim() || "";
//   const profilePic = user?.profilePic || "";
  const fallbackAvatar = fullName ? fullName.charAt(0) : "";
  return (
    <Avatar className=" bg-slate-700 text-slate-200">
      <AvatarImage
        src={selectedImage || undefined}
        alt="profile"
        className="w-full h-full object-cover "
      />
      <AvatarFallback className="w-full h-full flex items-center justify-center">{fallbackAvatar.toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default LoggedInUserAvatar;
