import { configureStore } from '@reduxjs/toolkit';
import assetSlice from './slice/assets';
import authSlice from './slice/auth';
import newsSlice from './slice/news';
import watchListSlice from './slice/watchlist';

const store = configureStore({
	reducer: {
		auth: authSlice,
		assets: assetSlice,
		watchList: watchListSlice,
		news: newsSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
