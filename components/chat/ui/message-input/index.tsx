"use client";

import type { IMessageInputProps } from "@/types";
import Image from "next/image";
import { FC, useRef } from "react";

const MessageInput: FC<IMessageInputProps> = ({
  messageText,
  onMessageChange,
  onSelectFile,
  onSubmit,
}) => {
  const input = useRef<HTMLInputElement>(null);

  const handleSelectFile = () => input.current?.click();

  return (
    <form
      className="mt-auto mx-auto border min-h-[97px] border-solid border-[#CDD5DE] rounded-2xl overflow-hidden w-[520px]"
      onSubmit={onSubmit}
    >
      <input
        className="py-3 px-2 w-full focus:outline-none"
        value={messageText}
        onChange={onMessageChange}
        placeholder="Write message"
      />
      <div className="flex flex-row py-2 px-2 min-h-[48px] bg-[#F8F9FA] border-t border-solid border-[#CDD5DE]">
        <Image
          className="cursor-pointer"
          onClick={handleSelectFile}
          src="/paperclip.svg"
          alt="setting"
          width={20}
          height={20}
        />
        <input
          className="hidden"
          ref={input}
          type="file"
          onChange={onSelectFile}
        />
        <button
          className="ml-auto px-3 py-2 h-8 text-[#9E9E9E] rounded-lg border border-solid border-[#D4D4D4] text-xs font-semibold"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
