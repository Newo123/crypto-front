import { Route, Routes } from 'react-router';
import AuthRootComponent from './components/auth';
import Home from './components/home/home';
import PrivateRoute from './utils/router/privateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<AuthRootComponent />} />
        <Route path="/register" element={<AuthRootComponent />} />
      </Routes>
    </>
  );
}

export default App;
