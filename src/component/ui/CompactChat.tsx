import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/rtkhook';
import { toogleSelectChat } from '../../store/chatSlice';
import { CompactChatProps } from '../../types/Chat';

const CompactChat: FC<CompactChatProps> = ({
  avatar,
  id,
  name,
  time,
  lastMessage,
}) => {
  const dispatch = useAppDispatch();
  const { isSelect, userId } = useAppSelector(state => state.chat);
  const selectChat = () => {
    dispatch(
      toogleSelectChat({ userName: name, userId: id, userAvatar: avatar })
    );
  };
  return (
    <div
      className={`compact-chat ${
        isSelect && userId === id && 'compact-chat_active'
      }`}
      onClick={selectChat}
    >
      <img src={avatar} alt={name} className='compact-chat__img' />
      <div className='compact-chat__container'>
        <div className='compact-chat__info'>
          <h3 className='compact-chat__name'>{name}</h3>
          <p className='compact-chat__time'>{time}</p>
        </div>
        <p className='compact-chat__last-message'>{lastMessage}</p>
      </div>
    </div>
  );
};

export default CompactChat;
