import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';
import LayoutComponent from './components/layout';
import AssetsPage from './pages/assets';
import AuthRootComponent from './pages/auth';
import HomePage from './pages/home/home';
import NewsPage from './pages/news';
import SettingsPage from './pages/settings';
import WatchListPage from './pages/watchlist';
import { ColorModeContext, useMode } from './theme';
import PrivateRoute from './utils/router/privateRoute';

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<>
					<Routes>
						<Route element={<LayoutComponent />}>
							<Route element={<PrivateRoute />}>
								<Route path='/' element={<HomePage />} />
								<Route path='/watchlist' element={<WatchListPage />} />
								<Route path='/news' element={<NewsPage />} />
								<Route path='/settings' element={<SettingsPage />} />
								<Route path='/assets/:id' element={<AssetsPage />} />
							</Route>
							<Route path='/login' element={<AuthRootComponent />} />
							<Route path='/register' element={<AuthRootComponent />} />
						</Route>
					</Routes>
				</>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
