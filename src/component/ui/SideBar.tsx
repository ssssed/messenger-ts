import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import chat from '../../assets/chat.svg';
import setting from '../../assets/settings.svg';
import profile from '../../assets/profile.svg';
import highliter from '../../assets/highlighter.svg';
import logo from '../../assets/logo.svg';
import '../../styles/SideBar.scss';
import { useAppDispatch } from '../../hook/rtkhook';
import { unSelectChat } from '../../store/chatSlice';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const navigateToMainPage = () => {
    dispatch(unSelectChat(false));
    navigate('/');
  };
  return (
    <div className='sidebar'>
      <img
        src={logo}
        alt='logo'
        className='sidebar__logo'
        onClick={navigateToMainPage}
      />
      <div className='sidebar__container'>
        <Link to='/create-chat'>
          <img src={highliter} alt='' className='sidebar__icon' />
        </Link>
        <Link to='/'>
          <img src={chat} alt='' className='sidebar__icon' />
        </Link>
        <Link to='/profile'>
          <img src={profile} alt='' className='sidebar__icon' />
        </Link>
      </div>
      <div className='sidebar__setting'>
        <Link to='/setting'>
          <img src={setting} alt='' className='sidebar__icon' />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
