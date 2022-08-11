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
  const userName = useAppSelector(state => state.chat.userName);
  const [allMessage, setMessages] = useState<Messege[]>([
    {
      id: 1,
      me: false,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Привет',
      userName: 'Арманчик',
    },
    {
      id: 2,
      me: false,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Я в Ереван приехал',
      userName: 'Арманчик',
    },
    {
      id: 3,
      me: false,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Я теперь всех хочу залить перцем',
      userName: 'Арманчик',
    },
    {
      id: 4,
      me: false,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Абоба',
      userName: 'Арманчик',
    },
    {
      id: 5,
      me: false,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Ща перцовкой в тебя брызну! Понял?',
      userName: 'Арманчик',
    },
  ]);
  let index = allMessage.length;
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
        avatar:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Ffe%2F1d%2F31%2Ffe1d3182a4138c770cb764496531f02a.jpg&f=1&nofb=1',
        me: true,
        text: message,
        userName: 'Игорь',
      },
    ]);
    setMessage('');
  };
  return (
    <div className='messenger'>
      <div className='messenger__info'>
        <img
          src='https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album'
          alt=''
          className='messenger__avatar'
        />
        <h2 className='messenger__title'>{userName}</h2>
        <span className='messenger__toolbar'>...</span>
      </div>
      {allMessage.map(ms =>
        !ms.me ? (
          <Messege key={ms.id} {...ms} />
        ) : (
          <MyMessage key={ms.id} {...ms} />
        )
      )}
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
