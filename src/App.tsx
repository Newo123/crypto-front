import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';
import LayoutComponent from './components/layout';
import AuthRootComponent from './pages/auth';
import Home from './pages/home/home';
import News from './pages/news';
import Settings from './pages/settings';
import WatchList from './pages/watchlist';
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
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
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
