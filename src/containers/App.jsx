import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
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
      </Switch>
    </Router>
  );
}

export default App;
