import React, { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

const DUMMY_MESSAGES = [
  {
    _id: "msg_1",
    senderId: "user_anaya", // Imagine this is the person you are chatting with
    senderName: "Anaya Roy",
    senderImage: "", // Leave empty to test the "AR" initials fallback!
    messageType: "text",
    text: "Hey! Can we finalize the UI cards today? The client is asking for an update.",
    createdAt: "2026-04-01T10:20:00Z",
  },
  {
    _id: "msg_2",
    senderId: "my_logged_in_id", // This represents YOU
    senderName: "Ravi Maheshwari",
    messageType: "image",
    text: "Here is the latest prototype. Have a look at the shadow details.",
    fileUrl:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=400&h=300",
    createdAt: "2026-04-01T10:24:00Z",
  },
  {
    _id: "msg_3",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    messageType: "document",
    text: "Project_Requirements_v2.pdf",
    fileUrl: "#",
    createdAt: "2026-04-01T10:25:00Z",
  },
  {
    _id: "msg_4",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    messageType: "audio",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    createdAt: "2026-04-01T10:28:00Z",
  },
  {
    _id: "msg_5",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    messageType: "text",
    text: "Let me know what you think about the audio feedback.",
    createdAt: "2026-04-01T10:29:00Z",
  },
  {
    _id: "msg_6",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "text",
    text: "The prototype looks great! I especially like the new shadow effects. The audio feedback is helpful too. Let's discuss the document in our next meeting.",
    createdAt: "2026-04-01T10:35:00Z",
  },
  {
    _id: "msg_7",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "text",
    text: "By the way, I noticed a small typo in the prototype. On the login screen, 'Username' is misspelled as 'Usernme'. Can you fix that?",
    createdAt: "2026-04-01T10:40:00Z",
  },
  {
    _id: "msg_8",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    senderImage: "", // No image for the logged-in user, will show "RM" initials
    messageType: "text",
    text: "Good catch! I'll correct the typo right away and send you an updated version.",
    createdAt: "2026-04-01T10:42:00Z",
  },
  {
    _id: "msg_9",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "text",
    text: "Thanks, Ravi! I appreciate your quick response. Looking forward to the updated prototype.",
    createdAt: "2026-04-01T10:45:00Z",
  },
  {
    _id: "msg_10",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    senderImage: "", // No image for the logged-in user, will show "RM" initials
    messageType: "text",
    text: "You're welcome, Anaya! I'll have the updated prototype ready in the next hour.",
    createdAt: "2026-04-01T10:47:00Z",
  },
  {
    _id: "msg_11",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "text",
    text: "Great! I'll review it as soon as I receive it. Thanks again for your hard work on this.",
    createdAt: "2026-04-01T10:50:00Z",
  },
  {
    _id: "msg_12",

    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    senderImage: "", // No image for the logged-in user, will show "RM" initials
    messageType: "text",
    text: "No problem at all! I'm glad I could help. Talk to you soon, Anaya!",
    createdAt: "2026-04-01T10:52:00Z",
  },
  {
    _id: "msg_13",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "image",
    fileUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=400&h=300",
    text: "Here's the screenshot of the typo I mentioned.",
    createdAt: "2026-04-01T10:55:00Z",
  },
    {
    _id: "msg_14",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    senderImage: "", // No image for the logged-in user, will show "RM" initials
    messageType: "image",
    fileUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=400&h=300",
    text: "Here's the updated prototype with the typo fixed.",
    createdAt: "2026-04-01T10:58:00Z",
  },
  {
    _id: "msg_15",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "document",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    text: "Here's the updated project requirements document.",
    createdAt: "2026-04-01T11:00:00Z",
  },
  {
    _id: "msg_16",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    senderImage: "", // No image for the logged-in user, will show "RM" initials
    messageType: "document",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    text: "Thanks for sharing the updated document. I'll review it and get back to you with any feedback.",
    createdAt: "2026-04-01T11:05:00Z",
  },
  {
    _id: "msg_17",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "audio",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    text: "Here's an audio note with some additional feedback.",
    createdAt: "2026-04-01T11:10:00Z",
  },
  {
    _id: "msg_18",
    senderId: "my_logged_in_id",
    senderName: "Ravi Maheshwari",
    senderImage: "", // No image for the logged-in user, will show "RM" initials
    messageType: "audio",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    text: "Thanks for the audio feedback! I'll listen to it and incorporate your suggestions.",
    createdAt: "2026-04-01T11:15:00Z",
  }, 
  {
    _id: "msg_19",
    senderId: "user_anaya",
    senderName: "Anaya Roy",
    senderImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    messageType: "image",
    fileUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=400&h=300",
    text: "Here's another screenshot showing the area where the shadow effect can be improved.",
    createdAt: "2026-04-01T11:20:00Z",

  }

];

const ConversationMessages = () => {
  const currentUserId = "my_logged_in_id"; // This should ideally come from your auth context or state
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []); // Scroll once when the static conversation mounts

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth sm:px-6">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-1">
        <div className="sticky top-3 z-1 my-4 flex justify-center">
          <span className="rounded-full border border-zinc-200/80 bg-zinc-100/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 backdrop-blur-sm">
            Today
          </span>
        </div>

        {DUMMY_MESSAGES.map((msg) => {
          const isOwn = msg.senderId === currentUserId;
          return (
            <ChatBubble key={msg._id} message={msg} isOwnMessage={isOwn} />
          );
        })}

        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default ConversationMessages;
