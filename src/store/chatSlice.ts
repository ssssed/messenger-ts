import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  isSelect: boolean;
  userName: string;
  userAvatar: string;
  userId: number;
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
  },
});

export const { toogleSelectChat } = chatSlice.actions;

export default chatSlice.reducer;
