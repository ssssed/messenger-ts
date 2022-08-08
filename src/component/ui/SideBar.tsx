import React from 'react';
import chat from '../../assets/chat.svg';
import setting from '../../assets/settings.svg';
import profile from '../../assets/profile.svg';
import highliter from '../../assets/highlighter.svg';
import logo from '../../assets/logo.svg';
import '../../styles/SideBar.scss';

const SideBar: React.FC = () => {
	return (
		<div className='sidebar'>
			<img src={logo} alt='' className='sidebar__logo' />
			<div className='sidebar__container'>
				<img src={highliter} alt='' className='sidebar__icon' />
				<img src={chat} alt='' className='sidebar__icon' />
				<img src={profile} alt='' className='sidebar__icon' />
			</div>
			<div className='sidebar__setting'>
				<img src={setting} alt='' className='sidebar__icon' />
			</div>
		</div>
	);
};

export default SideBar;
