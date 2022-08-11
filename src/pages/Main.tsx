import React from 'react';
import ChatError from '../component/ui/ChatError';
import ChatList from '../component/ui/ChatList';
import Messenger from '../component/ui/Messenger';
import SideBar from '../component/ui/SideBar';
import { useAppSelector } from '../hook/rtkhook';
import '../styles/Main.scss';

const Main: React.FC = () => {
  const isSelect = useAppSelector(state => state.chat.isSelect);
  return (
    <div className='main'>
      <SideBar />
      <ChatList />
      {isSelect ? <Messenger /> : <ChatError />}
    </div>
  );
};

export default Main;
