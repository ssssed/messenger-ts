import React, { FC } from 'react';
import { useAppSelector } from '../../hook/rtkhook';
import '../../styles/Messenger.scss';
import Messege from './Messege';
import sendButton from '../../assets/chat.svg';

interface Messege {
  id: number;
  avatar: string;
  userName: string;
  text: string;
}

const Messenger: FC = () => {
  const userName = useAppSelector(state => state.chat.userName);
  const allMessege: Array<Messege> = [
    {
      id: 1,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Привет',
      userName: 'Арманчик',
    },
    {
      id: 2,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Я в Ереван приехал',
      userName: 'Арманчик',
    },
    {
      id: 3,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Я теперь всех хочу залить перцем',
      userName: 'Арманчик',
    },
    {
      id: 4,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Абоба',
      userName: 'Арманчик',
    },
    {
      id: 5,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      text: 'Ща перцовкой в тебя брызну! Понял?',
      userName: 'Арманчик',
    },
  ];
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
      {allMessege.map(ms => (
        <Messege key={ms.id} {...ms} />
      ))}
      <div className='messenger__write'>
        <form className='messenger__form'>
          <input type='text' className='messenger__input' />
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
