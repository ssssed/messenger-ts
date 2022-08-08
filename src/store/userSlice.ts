import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
	isLogin: boolean;
}

const initialState: UserState = {
	isLogin: false,
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
