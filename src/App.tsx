import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectRoute from './hoc/ProtectRoute';
import CreateChat from './pages/CreateChat';

const App: React.FC = () => {
  return (
    <div>
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
      </Routes>
    </div>
  );
};

export default App;
