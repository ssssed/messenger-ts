import React from 'react';
import ChatList from '../component/ui/ChatList';
import Messenger from '../component/ui/Messenger';
import SideBar from '../component/ui/SideBar';
import '../styles/Main.scss';

const Main: React.FC = () => {
  return (
    <div className='main'>
      <SideBar />
      <ChatList />
      <Messenger />
    </div>
  );
};

export default Main;
