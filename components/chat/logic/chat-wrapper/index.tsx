'use client';

import { Dialogs, Messages } from '@/components/chat/ui';
import { IChatWrapper, IFetchDialogs } from '@/types';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';

const ChatWrapper: FC<IChatWrapper> = ({ dialogs }) => {
  const [selectedChat, setSelectedChat] = useState<IFetchDialogs>();
  console.log('render');

  const handleSelectChat = (dialog: IFetchDialogs) => {
    setSelectedChat(dialog);
    dialog.count = 0;
  };

  const handleCloseSelectedChat = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedChat(undefined);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseSelectedChat);

    return () => {
      window.removeEventListener('keydown', handleCloseSelectedChat);
    };
  }, [handleCloseSelectedChat]);
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

export default memo(ChatWrapper);
