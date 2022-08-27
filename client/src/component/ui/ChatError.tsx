import React, { FC } from 'react';
import '../../styles/Messenger.scss';

const ChatError: FC = () => {
  return (
    <div className='messenger'>
      <h2 className='messenger__error'>Выберите чат или создайте новый</h2>
    </div>
  );
};

export default ChatError;
