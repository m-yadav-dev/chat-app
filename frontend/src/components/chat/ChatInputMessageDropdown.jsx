import React from "react";
import { motion } from "framer-motion";
import { FileAudio2, FileIcon, ImageIcon } from "lucide-react";

const ChatInputMessageDropdown = ({ label }) => {
  const getIcon = () => {
    if (label === "Attach Image") {
      return <ImageIcon className="size-4" />;
    }

    if (label === "Attach File") {
      return <FileIcon className="size-4" />;
    }

    return <FileAudio2 className="size-4" />;
  };

  return (
    <li>
      <motion.button
        whileHover={{
          scale: 0.98,
          transition: { duration: 0.15, ease: "easeInOut" },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1, ease: "easeInOut" },
        }}
        type="button"
        className="flex w-full items-center cursor-pointer border gap-2.5 rounded-lg px-3 py-2 
        text-left text-sm text-zinc-700 hover:bg-zinc-100 transition-colors duration-150 "
      >
        <span className="text-zinc-500">{getIcon()}</span>
        {label}
      </motion.button>
    </li>
  );
};

export default ChatInputMessageDropdown;
