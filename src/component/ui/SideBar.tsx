import React from 'react';
import {Link} from 'react-router-dom'
import chat from '../../assets/chat.svg';
import setting from '../../assets/settings.svg';
import profile from '../../assets/profile.svg';
import highliter from '../../assets/highlighter.svg';
import logo from '../../assets/logo.svg';
import '../../styles/SideBar.scss';

const SideBar: React.FC = () => {
	return (
		<div className='sidebar'>
			<Link to="/"><img src={logo} alt='' className='sidebar__logo' /></Link>
			<div className='sidebar__container'>
				<Link to='/create-chat'><img src={highliter} alt='' className='sidebar__icon' /></Link>
				<Link to='/chats'><img src={chat} alt='' className='sidebar__icon' /></Link>
				<Link to='/profile'><img src={profile} alt='' className='sidebar__icon' /></Link>
			</div>
			<div className='sidebar__setting'>
				<Link to='/setting' ><img src={setting} alt='' className='sidebar__icon' /></Link>
			</div>
		</div>
	);
};

export default SideBar;
