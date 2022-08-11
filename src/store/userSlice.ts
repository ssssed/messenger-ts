import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLogin: boolean;
  userName: string;
  avatar: string;
}

const initialState: UserState = {
  isLogin: false,
  userName: '',
  avatar:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F236x%2Ffe%2F1d%2F31%2Ffe1d3182a4138c770cb764496531f02a.jpg&f=1&nofb=1',
};

const todoSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    toggleLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const { toggleLogin } = todoSlice.actions;

export default todoSlice.reducer;
