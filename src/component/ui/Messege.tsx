import React, { FC } from 'react';
import '../../styles/Messege.scss';

interface MessegeProps {
  avatar: string;
  text: string;
}

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
