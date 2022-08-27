import React, { useCallback, useEffect } from 'react';
import ChatError from '../component/ui/ChatError';
import ChatList from '../component/ui/ChatList';
import Messenger from '../component/ui/Messenger';
import SideBar from '../component/ui/SideBar';
import { useAppDispatch, useAppSelector } from '../hook/rtkhook';
import { unSelectChat } from '../store/chatSlice';
import '../styles/Main.scss';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSelect = useAppSelector(state => state.chat.isSelect);
  const handleEscapeCloseChat = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') dispatch(unSelectChat(false));
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleEscapeCloseChat);
    return () => {
      document.removeEventListener('keydown', handleEscapeCloseChat);
    };
  }, []);
  return (
    <div className='main'>
      <SideBar />
      <ChatList />
      {isSelect ? <Messenger /> : <ChatError />}
    </div>
  );
};

export default Main;
