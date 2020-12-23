import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/Auth/auth.actions';

import Button from '../../domain/Button/Button';

function Dashboard() {
  const dispatch = useDispatch();

  const clickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      Welcome to the jungle!
      <br />
      <Button btnType="light" text="Çıkış" onClick={clickLogout} />
    </div>
  );
}

export default Dashboard;
