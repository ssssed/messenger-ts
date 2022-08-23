import React, { FC } from 'react';
import '../../styles/ChatList.scss';
import CompactChat from './CompactChat';
import { useAppSelector } from '../../hook/rtkhook';

const ChatList: FC = () => {
  const { chats } = useAppSelector(state => state.chat)
  return (
    <div className='chat-list'>
      {chats.map(chat => (
        <CompactChat key={chat.id} {...chat} />
      ))}
    </div>
  );
};

export default ChatList;
