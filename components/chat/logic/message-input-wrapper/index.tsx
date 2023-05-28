"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { MessageInput } from "@/components/chat/ui";

const MessageInputWrapper = () => {
  const [messageText, setMessageText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleMessageTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessageText(e.target.value);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(messageText, file?.name);
    setMessageText("");
    setFile(null);
  };

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const formFile = files.item(0);
      setFile(formFile);
    }
  };

  return (
    <MessageInput
      messageText={messageText}
      onSelectFile={handleSelectFile}
      onMessageChange={handleMessageTextChange}
      onSubmit={handleSubmitForm}
    />
  );
};

export default MessageInputWrapper;
