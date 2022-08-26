import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isLogin: boolean;
  userName: string;
  avatar: string;
  isMobile: boolean | null;
}

const initialState: UserState = {
  isLogin: false,
  userName: '',
  isMobile: null,
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
    setMobileVersion(state, action: PayloadAction<void>) {
      state.isMobile = true;
    },
    setDesktopVersion(state, action: PayloadAction<void>) {
      state.isMobile = false;
    },
  },
});

export const { toggleLogin, setMobileVersion, setDesktopVersion } =
  todoSlice.actions;

export default todoSlice.reducer;
