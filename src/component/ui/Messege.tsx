import React, { FC } from 'react';
import { useAppSelector } from '../../hook/rtkhook';
import '../../styles/Messege.scss';
import { MessegeProps } from '../../types/Message';

const Messege: FC<MessegeProps> = ({ text }) => {
  const avatar = useAppSelector(state => state.chat.userAvatar);
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
