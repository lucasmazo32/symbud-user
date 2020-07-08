import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
