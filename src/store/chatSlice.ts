import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  isSelect: boolean;
  userName: string;
  userId: number;
}

interface ChatData {
  userId: number;
  userName: string;
}

const initialState: ChatState = {
  isSelect: false,
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
      state.isSelect = true;
    },
  },
});

export const { toogleSelectChat } = chatSlice.actions;

export default chatSlice.reducer;
