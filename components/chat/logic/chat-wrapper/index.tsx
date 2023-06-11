'use client';

import { Dialogs, Messages } from '@/components/chat/ui';
import { IChatWrapper, IFetchDialogs } from '@/types';
import { FC, useEffect, useState } from 'react';

const ChatWrapper: FC<IChatWrapper> = ({ dialogs }) => {
  const [selectedChat, setSelectedChat] = useState<IFetchDialogs>();

  const handleSelectChat = (dialog: IFetchDialogs) => {
    setSelectedChat(dialog);
    dialog.count = 0;
  };

  useEffect(() => {
    console.log(selectedChat);
  }, [selectedChat]);
  return (
    <>
      <Dialogs
        dialogs={dialogs}
        onSelect={handleSelectChat}
      />
      <Messages selectedChat={selectedChat!} />
    </>
  );
};

export default ChatWrapper;
