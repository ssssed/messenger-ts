import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dateForm, getTimes } from '../hook/date';
import { ChatList, Message } from '../types/Chat';

interface ChatState {
  isSelect: boolean;
  userName: string;
  userAvatar: string;
  userId: number;
  chats: ChatList[];
}

interface ChatData {
  userId: number;
  userName: string;
  userAvatar: string;
}

const initialState: ChatState = {
  isSelect: false,
  userAvatar:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.X_GOJwn_pJsMl3RYuDzqLAHaFj%26pid%3DApi&f=1',
  userId: -1,
  userName: '',
  chats: [
    {
      id: 1,
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-WmUio3Frbvs_wy4eOH-DgHaFj%26pid%3DApi&f=1',
      name: 'Богдан Богом дараванный',
      lastMessage: 'Богдана здесь не любят',
      time: '12:40',
      message: [
        {
          id: 1,
          me: false,
          avatar:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-WmUio3Frbvs_wy4eOH-DgHaFj%26pid%3DApi&f=1',
          userName: 'Богдан Богом дараванный',
          text: 'Богдана здесь не любят',
        },
      ],
      totaltime: 2736000,
    },
    {
      id: 2,
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftelegra.ph%2Ffile%2Fa23d68b6ee75f6fe6fa67.jpg&f=1&nofb=1',
      name: 'Амбал',
      lastMessage: 'Абоба',
      time: '12:10',
      message: [
        {
          id: 1,
          me: false,
          avatar:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftelegra.ph%2Ffile%2Fa23d68b6ee75f6fe6fa67.jpg&f=1&nofb=1',
          userName: 'Амбал',
          text: 'Абоба',
        },
      ],
      totaltime: 2730000,
    },
    {
      id: 3,
      avatar:
        'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
      name: 'Арманчик',
      lastMessage: 'привет',
      time: '12:23',
      message: [
        {
          id: 1,
          me: false,
          avatar:
            'https://sun7.userapi.com/sun7-14/s/v1/ig2/azBVc-pVggoh13EC9B0Edn16PaVWishjfTQns4SzxBeg6T8MSd4tSMVlwqmQe_uHSw2SzgP6aiH4sEyNviB7BUJz.jpg?size=960x1280&quality=95&type=album',
          userName: 'Арманчик',
          text: 'привет',
        },
      ],
      totaltime: 2732300,
    },
    {
      id: 4,
      avatar:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgagz.ru%2Fwp-content%2Fuploads%2F2017%2F05%2Fvampire3.jpg&f=1&nofb=1',
      name: 'Оператор Олег',
      lastMessage: 'Здравствуйте! Мы вам одобрили кредит',
      time: '12:50',
      message: [
        {
          id: 1,
          me: false,
          avatar:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgagz.ru%2Fwp-content%2Fuploads%2F2017%2F05%2Fvampire3.jpg&f=1&nofb=1',
          userName: 'Оператор Олег',
          text: 'Здравствуйте! Мы вам одобрили кредит',
        },
      ],
      totaltime: 2738000,
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    toogleSelectChat(state, action: PayloadAction<ChatData>) {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userAvatar = action.payload.userAvatar;
      state.isSelect = true;
    },
    createChat(state, action: PayloadAction<ChatList>) {
      state.chats.push(action.payload);
    },
    deleteChat(state, action: PayloadAction<ChatList>) {
      state.chats = state.chats.filter(chat => chat.id !== action.payload.id);
    },
    sendMessage(state, action: PayloadAction<Message>) {
      state.chats[state.userId - 1].message = [
        ...state.chats[state.userId - 1].message,
        action.payload,
      ];
      state.chats[state.userId - 1].lastMessage = action.payload.text;
      state.chats[state.userId - 1].time = dateForm();
      state.chats[state.userId - 1].totaltime = getTimes();
    },
    unSelectChat(state, action: PayloadAction<boolean>) {
      state.isSelect = action.payload;
    },
  },
});

export const {
  toogleSelectChat,
  createChat,
  deleteChat,
  sendMessage,
  unSelectChat,
} = chatSlice.actions;

export default chatSlice.reducer;
