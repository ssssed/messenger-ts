import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppSelector } from '../../hook/rtkhook';
import '../../styles/Messenger.scss';
import Messege from './Messege';
import sendButton from '../../assets/chat.svg';
import MyMessage from './MyMessage';

interface Messege {
  id: number;
  me: boolean;
  avatar: string;
  userName: string;
  text: string;
}

const Messenger: FC = () => {
  const { userName, userAvatar } = useAppSelector(state => state.chat);
  const myName = useAppSelector(state => state.user.userName);
  const myAvatar = useAppSelector(state => state.user.avatar);
  const [allMessage, setMessages] = useState<Messege[]>([
    {
      id: 1,
      me: false,
      avatar: userAvatar,
      text: 'Привет',
      userName: 'Арманчик',
    },
    {
      id: 2,
      me: false,
      avatar: userAvatar,
      text: 'Я в Ереван приехал',
      userName: 'Арманчик',
    },
    {
      id: 3,
      me: false,
      avatar: userAvatar,
      text: 'Я теперь всех хочу залить перцем',
      userName: 'Арманчик',
    },
    {
      id: 4,
      me: false,
      avatar: userAvatar,
      text: 'Абоба',
      userName: 'Арманчик',
    },
    {
      id: 5,
      me: false,
      avatar: userAvatar,
      text: 'Ща перцовкой в тебя брызну! Понял?',
      userName: 'Арманчик',
    },
  ]);
  const [message, setMessage] = useState<string>('');
  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);
  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // отправка на сервер сообщения
    setMessages([
      ...allMessage,
      {
        id: allMessage.length + 1,
        avatar: myAvatar,
        me: true,
        text: message,
        userName: myName,
      },
    ]);
    setMessage('');
  };
  return (
    <div className='messenger'>
      <div className='messenger__info'>
        <img src={userAvatar} alt='' className='messenger__avatar' />
        <h2 className='messenger__title'>{userName}</h2>
        <span className='messenger__toolbar'>...</span>
      </div>
      <div className='messenger__container'>
        {allMessage.map(ms =>
          !ms.me ? (
            <Messege key={ms.id} {...ms} />
          ) : (
            <MyMessage key={ms.id} {...ms} />
          )
        )}
      </div>
      <div className='messenger__write'>
        <form className='messenger__form' onSubmit={handleSendMessage}>
          <input
            type='text'
            className='messenger__input'
            value={message}
            onChange={handleMessageChange}
          />
          <button className='messenger__submit'>
            <img
              src={sendButton}
              className='messenger__button'
              alt='send button'
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messenger;
