import { FileText, Image, Music, Video } from "lucide-react";
import React from "react";

const attachmentOptions = ["image", "document", "audio", "video"];

const iconMap = {
  image: Image,
  document: FileText,
  audio: Music,
  video: Video,
};

const labelMap = {
  image: "Image",
  document: "Document",
  audio: "Audio",
  video: "Video",
};

const AddAttachment = ({ onSelect }) => {
  return (
    <div className="absolute bottom-14 left-0 bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-2 w-44">
      {attachmentOptions.map((options) => {
        const Icon = iconMap[options];
        return (
          <button
            key={options}
            onClick={() => onSelect(options)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-200"
          >
            <Icon className="w-5 h-5" />
            <span>{labelMap[options]}</span>
          </button>
  
        );
      })}
    </div>
  );
};

export default AddAttachment;
