import React, { FC } from 'react';
import '../../styles/ChatList.scss';
import CompactChat from './CompactChat';
import { Chat } from '../../types/Chat';

const ChatList: FC = () => {
  const chats: Array<Chat> = [
    {
      id: 1,
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-WmUio3Frbvs_wy4eOH-DgHaFj%26pid%3DApi&f=1',
      name: 'Богдан Богом дараванный',
      lastMessage: 'Богдана здесь не любят',
      time: '12:00',
    },
    {
      id: 2,
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftelegra.ph%2Ffile%2Fa23d68b6ee75f6fe6fa67.jpg&f=1&nofb=1',
      name: 'Амбал',
      lastMessage: 'Абоба',
      time: '12:10',
    },
    {
      id: 3,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      name: 'Арманчик',
      lastMessage: 'Ща перцовкой в тебя брызну! Понял?',
      time: '12:23',
    },
    {
      id: 4,
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgagz.ru%2Fwp-content%2Fuploads%2F2017%2F05%2Fvampire3.jpg&f=1&nofb=1',
      name: 'Оператор Олег',
      lastMessage: 'Здравствуйте! Мы вам одобрили кредит',
      time: '12:50',
    },
  ];
  return (
    <div className='chat-list'>
      {chats.map(chat => (
        <CompactChat key={chat.id} {...chat} />
      ))}
    </div>
  );
};

export default ChatList;
