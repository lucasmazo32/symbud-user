import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Lock } from '../assets/images/lock.svg';
import users from '../api/users';
import '../assets/styles/SignIn.scss';

const { login } = users;

export default function SignIn() {

  const history = useHistory();
  const [open, setOpen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const base64 = btoa(`${email}:${password}`);
    const request = login(base64);
    request.then((response) => {
      if (response) {
        history.push('/');
      } else {
        setOpen(' open');
      }
    });
  };

  return (
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <Lock />
          <h3>Sign in</h3>
        </div>
        <TextField name="email" id="outlined-basic" label="Email Adress *" variant="outlined" />
        <TextField name="password" type="password" id="outlined-basic" label="Password *" variant="outlined" />
        <div className={`alert-cont${open}`}><Alert severity="error">Wrong email/password combination!</Alert></div>
        <Button type="submit" color="primary" variant="contained">Sign in</Button>
      </form>
      <div className="form-extra">
        <button type="button" className="btn">Forgot password?</button>
        <button onClick={() => history.push('/signup')} type="button" className="btn">Don&apos;t have an account? Sign up.</button>
      </div>
    </div>
  );
}
