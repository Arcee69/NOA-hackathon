import React from 'react'
import { Navigate, useLocation, Outlet  } from 'react-router-dom';
import { isObjectEmpty } from '../utils';
import BoardLayout from '../layouts/boardLayout';
import AuthLayout from '../layouts/authLayout';
import { useSelector } from 'react-redux';

export const ProtectRoutes = () => {

  const userData  = useSelector(state => state.userLogin)
  const { data } = userData

    const location = useLocation();
    const isAuthed = isObjectEmpty(JSON.parse(sessionStorage.getItem("userObj")))     //(data?.user);
    return !isAuthed ? (
      <BoardLayout> 
        <Outlet />
      </BoardLayout>
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  };

  export const AuthProtectRoutes = () => {

    const userData  = useSelector(state => state.userLogin)
    const { data } = userData

    const location = useLocation();
    const isAuthed = isObjectEmpty(JSON.parse(sessionStorage.getItem("userObj")))      //(data?.user);
    return isAuthed ? (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ) : (
      <Navigate to="/dashboard" state={{ from: location }} replace />
    );
  };