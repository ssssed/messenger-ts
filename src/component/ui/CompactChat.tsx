import React, { FC } from 'react';
import { CompactChatProps } from '../../types/Chat';

const CompactChat: FC<CompactChatProps> = ({
	avatar,
	name,
	time,
	lastMessage,
}) => {
	return (
		<div className='compact-chat'>
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
