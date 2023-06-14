'use client';

import { Dialogs, Messages } from '@/components/chat/ui';
import { getDialogs } from '@/services/getDialogs';
import { IFetchDialogs } from '@/types';
import React, { useCallback, useEffect, useState } from 'react';

const ChatWrapper = () => {
  const [selectedChat, setSelectedChat] = useState<IFetchDialogs>();
  const [dialogs, setDialogs] = useState<IFetchDialogs[]>([]);

  const handleSelectChat = (dialog: IFetchDialogs) => {
    setSelectedChat(dialog);
    dialog.count = 0;
  };

  const handleCloseSelectedChat = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedChat(undefined);
    }
  }, []);

  const handleGetDialogs = useCallback(async () => {
    const { dialogs } = await getDialogs();
    setDialogs(dialogs);
  }, []);

  useEffect(() => {
    handleGetDialogs();
    window.addEventListener('keydown', handleCloseSelectedChat);

    return () => {
      window.removeEventListener('keydown', handleCloseSelectedChat);
    };
  }, [handleCloseSelectedChat, handleGetDialogs]);
  return (
    <React.Fragment>
      <Dialogs
        dialogs={dialogs}
        onSelect={handleSelectChat}
      />
      <Messages selectedChat={selectedChat!} />
    </React.Fragment>
  );
};

export default ChatWrapper;
