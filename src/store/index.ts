import { configureStore } from '@reduxjs/toolkit';
import chatSlice from './chatSlice';
import userSlice from './userSlice';

const store = configureStore({
	reducer: {
		user: userSlice,
		chat: chatSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
