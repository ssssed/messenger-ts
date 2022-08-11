import React, { FC } from 'react';
import '../../styles/MyMessage.scss';
import { MessegeProps } from '../../types/Message';

const MyMessage: FC<MessegeProps> = ({ avatar, text }) => {
  return (
    <div className='my-messege'>
      <img src={avatar} alt='avatar' className='my-messege__avatar' />
      <div className='my-messege__container'>
        <p className='my-messege__text'>{text}</p>
      </div>
    </div>
  );
};

export default MyMessage;
