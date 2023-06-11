'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MessageInput } from '@/components/chat/ui';
import { IMessageInputWrapperProps } from '@/types';
import { useSession } from 'next-auth/react';

const MessageInputWrapper: FC<IMessageInputWrapperProps> = ({
  onAddMessage,
}) => {
  const [messageText, setMessageText] = useState<string>('');
  const session = useSession();
  const [file, setFile] = useState<File | null>(null);

  const handleMessageTextChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessageText(e.target.value);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();

    onAddMessage({
      id: Date.now(),
      time: `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`,
      author: session.data?.user?.name as string,
      message: messageText,
    });
    setMessageText('');
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
