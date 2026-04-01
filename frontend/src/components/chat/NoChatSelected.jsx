import React from "react";
import { MessageSquareTextIcon } from "lucide-react";

const NoChatSelected = () => {
  return (
    <section className="mx-6 w-full max-w-4xl rounded-3xl border border-zinc-200/70 bg-white/65 px-8 py-10 shadow-[0_18px_44px_-30px_rgba(15,23,42,0.55)] backdrop-blur-sm lg:px-12">
      <div className="mx-auto grid w-full max-w-3xl items-center gap-8 md:grid-cols-[minmax(0,340px)_1fr]">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-3 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.75)]">
          <img
            src="https://res.cloudinary.com/dyjo8b263/image/upload/v1774951331/start-chat-preview-_image_wwturk.jpg"
            alt="Chat placeholder illustration"
            loading="lazy"
            className="h-auto w-full rounded-xl mix-blend-multiply"
          />
        </div>

        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
            <MessageSquareTextIcon className="size-3.5" />
            Chat Area Preview
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-900">
            Select a conversation to start messaging
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Pick any user from the sidebar to open your chat thread. Your
            messages, attachments, and updates will appear here.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-500">
            <span className="size-2 rounded-full bg-emerald-500" />
            Ready to start a new conversation
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoChatSelected;
