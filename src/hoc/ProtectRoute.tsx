import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAppSelector } from '../hook/rtkhook';

const ProtectRoute = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector(state => state.user.isLogin);
  return isAuth ? children : <Navigate to='/login' />;
};

export default ProtectRoute;
