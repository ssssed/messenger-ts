import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectRoute from './hoc/ProtectRoute';
import CreateChat from './pages/CreateChat';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectRoute>
            <Main />
          </ProtectRoute>
        }
      />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/create-chat'
        element={
          <ProtectRoute>
            <CreateChat />
          </ProtectRoute>
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectRoute>
            <Profile />
          </ProtectRoute>
        }
      />
      <Route
        path='/settings'
        element={
          <ProtectRoute>
            <Settings />
          </ProtectRoute>
        }
      />
    </Routes>
  );
};

export default App;
