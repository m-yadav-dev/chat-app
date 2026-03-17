import React from "react";

const MessageInput = (props) => {
  const { onChangeMessageInput, text } = props;
  return (
    <>
      <input
        onChange={onChangeMessageInput}
        value={text}
        type="text"
        name="message"
        placeholder="Type a message..."
        className="w-full bg-transparent text-white text-sm px-4 py-3 focus:outline-none placeholder:text-slate-500"
      />
    </>
  );
};

export default MessageInput;
