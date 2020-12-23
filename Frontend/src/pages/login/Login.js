import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  login,
  clearErrors,
} from '../../store/Auth/auth.actions';

import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import Alert from '../../components/Alert/Alert';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const submit = () => {
    dispatch(login({ email, password }));
    setSubmitted(true);
  };

  const setErrors = () => {
    dispatch(clearErrors());
  };

  const isInputValid = value => {
    if (submitted) {
      if (value) return 'is-valid';

      return 'is-invalid';
    }

    return '';
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">{' '}</div>
        <div className="col-md-8">
          <div className="card">
            <Spinner active={auth.loading} />
            <div className="card-header">
              Giriş
            </div>
            <div className="card-body">
              <Alert active={auth.hasError} errors={auth.error} />
              <form className="text-left">
                <div className="form-group">
                  <Label text="Email" />
                  <Input type="email" className={isInputValid(email)} placeholder="Email giriniz" value={email} onChange={setEmail} />
                </div>
                <div className="form-group">
                  <Label text="Şifre" />
                  <Input type="password" className={isInputValid(password)} placeholder="Şifre giriniz" value={password} onChange={setPassword} />
                </div>
                <Button btnType="success" text="Giriş yap" float="right" onClick={submit} disabled={!(email && password)} />
                <Link to="/register">
                  <Button btnType="light" text="Kayıt ol" float="left" onClick={setErrors} />
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2 ">{' '}</div>
      </div>
    </div>
  );
}

export default Login;
