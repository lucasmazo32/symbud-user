import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
