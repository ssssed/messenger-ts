'use client';

import { MessageInputWrapper, MessageWrapper } from '@/components/chat/logic';
import { EmptyChat } from '@/components/chat/ui';
import { IMessageWrapperProps, IMessagesProps } from '@/types';
import { messages as messageList } from '@/utils/static-data';
import { FC, useState } from 'react';

const Messages: FC<IMessagesProps> = ({ selectedChat }) => {
  const [messages, setMessages] = useState(messageList);

  const handleAddMessage = (message: IMessageWrapperProps) => {
    setMessages(state => [...state, message]);
  }

  return (
    <div className='flex flex-col px-10 pt-2 pb-10 w-full'>
      {selectedChat ? (
        <>
          <div className='flex flex-col px-4 gap-6 h-5/6 mb-5 overflow-auto'>
            {messages.map(ms => (
              <MessageWrapper
                key={ms.id}
                author={ms.author}
                time={ms.time}
                message={ms.message}
              />
            ))}
          </div>
          <MessageInputWrapper onAddMessage={handleAddMessage} />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default Messages;
