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

export interface Message {
  id: number;
  me: boolean;
  avatar: string;
  userName: string;
  text: string;
}

export type ChatList = {
	id: number;
	avatar: string;
	name: string;
	time: string;
	lastMessage: string;
	message: Message[];
	totaltime: number;
}