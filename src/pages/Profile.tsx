import React, { FC } from 'react';
import SideBar from '../component/ui/SideBar';
import { useAppSelector } from '../hook/rtkhook';
import '../styles/Profile.scss';

const Profile: FC = () => {
  const { userName, avatar } = useAppSelector((state) => state.user);
  /*
    Подумать на счет реакций под профилем и возможностями комментарий
  */
  return (
    <div className='profile'>
      <SideBar />
      <div className='profile__content'>
        <img src={avatar} alt='аватарка' className='profile__img' />
        <h2 className='profile__title'>{userName || 'User'}</h2>
        <div className='profile__text profile__info'>
          <p className='profile__text profile__mail'>Почта: igorkoneshov@mail.ru</p>
          <p className='profile__text profile__sex'>Пол: Мужчина</p>
          <p className='profile__text profile__age'>Возраст: 19</p>
          <p className='profile__text profile__status'>Статус: В поиске себя</p>
          <p className='profile__text profile__job'>Должность: Frontend разработчик</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
