export interface CompactChatProps {
	id?: number;
	avatar: string;
	name: string;
	time: string;
	lastMessage: string;
}

export interface Chat {
	id: number;
	avatar: string;
	name: string;
	time: string;
	lastMessage: string;
}
