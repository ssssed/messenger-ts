import React, { FC, useCallback, useEffect, useState } from 'react';
import '../../styles/ChatList.scss';
import CompactChat from './CompactChat';
import { useAppSelector } from '../../hook/rtkhook';
import { getTimes } from '../../hook/date';

const ChatList: FC = () => {
  const { chats } = useAppSelector(state => state.chat);
  const [allChats, setChats] = useState(
    [...chats].sort((a, b) => b.totaltime - a.totaltime)
  );
  const handleSortedChatList = useCallback(() => {
    setChats([...chats].sort((a, b) => b.totaltime - a.totaltime));
  }, [chats]);
  useEffect(() => {
    handleSortedChatList();
  }, [chats]);
  return (
    <div className='chat-list'>
      {chats && allChats.map(chat => <CompactChat key={chat.id} {...chat} />)}
    </div>
  );
};

export default ChatList;
