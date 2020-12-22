import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  increaseCounter,
  decreaseCounter,
} from '../../store/Counter/counter.actions';

import Input from '../../domain/Input/Input';
import Label from '../../domain/Label/Label';
import Button from '../../domain/Button/Button';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter);

  const arttir = () => {
    dispatch(increaseCounter());
    setSubmitted(true);
  };

  const azalt = () => {
    dispatch(decreaseCounter());
  };

  const isInputValid = value => {
    if (submitted) {
      if (value) return 'is-valid';

      return 'is-invalid';
    }

    return '';
  };

  console.log(submitted);
  console.log(email);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">{' '}</div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form className="text-left">
                <div className="form-group">
                  <Label text="Email" />
                  <Input type="email" className={isInputValid(email)} placeholder="Email giriniz" value={email} onChange={setEmail} />
                </div>
                <div className="form-group">
                  <Label text="Şifre" />
                  <Input type="password" className={isInputValid(password)} placeholder="Şifre giriniz" value={password} onChange={setPassword} />
                </div>
                <Button btnType="success" text="Login" float="right" onClick={arttir} />
                <Button btnType="light" text="Sign up" float="left" onClick={azalt} />
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
