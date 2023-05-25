import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';
import AuthRootComponent from './components/auth';
import Home from './components/home/home';
import LayoutComponent from './components/layout';
import NewsComponent from './components/news';
import SettingsComponent from './components/settings';
import WatchListComponent from './components/watchlist';
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
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<WatchListComponent />} />
                <Route path="/news" element={<NewsComponent />} />
                <Route path="/settings" element={<SettingsComponent />} />
              </Route>
              <Route path="/login" element={<AuthRootComponent />} />
              <Route path="/register" element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
