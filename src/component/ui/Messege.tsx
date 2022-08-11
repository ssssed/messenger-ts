import React, { FC } from 'react';
import '../../styles/Messege.scss';
import { MessegeProps } from '../../types/Message';

const Messege: FC<MessegeProps> = ({ avatar, text }) => {
  return (
    <div className='messege'>
      <img src={avatar} alt='avatar' className='messege__avatar' />
      <div className='messege__container'>
        <p className='messege__text'>{text}</p>
      </div>
    </div>
  );
};

export default Messege;
