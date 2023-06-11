'use client';

import { Dialogs, Messages } from '@/components/chat/ui';
import { IChatWrapper, IFetchDialogs } from '@/types';
import { FC, memo, useCallback, useEffect, useState } from 'react';

const ChatWrapper: FC<IChatWrapper> = memo(({ dialogs }) => {
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
    <>
      <Dialogs
        dialogs={dialogs}
        onSelect={handleSelectChat}
      />
      <Messages selectedChat={selectedChat!} />
    </>
  );
});

export default ChatWrapper;
