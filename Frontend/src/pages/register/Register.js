import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  createUser,
  clearErrors,
} from '../../store/User/user.actions';

import Input from '../../domain/Input/Input';
import Label from '../../domain/Label/Label';
import Button from '../../domain/Button/Button';
import Spinner from '../../domain/Spinner/Spinner';
import Alert from '../../domain/Alert/Alert';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const submit = async () => {
    dispatch(createUser({ email, password }));
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
            <Spinner active={user.loading} />
            <div className="card-header">
              Kayıt
            </div>
            <div className="card-body">
              <Alert active={user.hasError} errors={user.error} />
              <form className="text-left">
                <div className="form-group">
                  <Label text="Email" />
                  <Input type="email" className={isInputValid(email)} placeholder="Email giriniz" value={email} onChange={setEmail} />
                </div>
                <div className="form-group">
                  <Label text="Şifre" />
                  <Input type="password" className={isInputValid(password)} placeholder="Şifre giriniz" value={password} onChange={setPassword} />
                </div>
                <Button btnType="success" text="Kayıt ol" float="right" onClick={submit} disabled={!(email && password)} />
                <Link to="/login">
                  <Button btnType="light" text="Geri" float="left" onClick={setErrors} />
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

export default Register;
