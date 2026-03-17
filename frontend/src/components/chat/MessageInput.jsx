import React from "react";
import { Input } from "../ui/input";

const MessageInput = (props) => {
  const { onChangeMessageInput, text } = props;
  return (
    <>
    <Input onChange={onChangeMessageInput}
        value={text}
        type="text"
        name="message"
        placeholder="Type a message..."
    />
    </>
  );
};

export default MessageInput;
