import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Lock } from '../assets/images/lock.svg';
import '../assets/styles/SignIn.scss';

export default function SignIn() {
  const history = useHistory();

  return (
    <div className="SignIn">
      <form>
        <div className="form-title">
          <Lock />
          <h3>Sign in</h3>
        </div>
        <TextField id="outlined-basic" label="Email Adress *" variant="outlined" />
        <TextField type="password" id="outlined-basic" label="Password *" variant="outlined" />
        <Button color="primary" variant="contained">Sign in</Button>
      </form>
      <div className="form-extra">
        <button type="button" className="btn">Forgot password?</button>
        <button onClick={() => history.push('/signup')} type="button" className="btn">Don&apos;t have an account? Sign up.</button>
      </div>
    </div>
  );
}
