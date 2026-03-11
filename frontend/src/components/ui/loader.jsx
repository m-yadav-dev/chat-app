import { Loader2 } from "lucide-react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center gap-2">
      <Loader2 className="h-5 w-5 animate-spin" />
      <span>{text}</span>
    </div>
  );
};

export default Loader;