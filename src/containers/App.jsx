import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Login from './Login';
import Welcome from './Welcome';
import actions from '../actions/index';
import sessions from '../api/session';

const { loginUser } = actions;
const { getCookie } = sessions;

function App({ user, setUser }) {
  const history = useHistory();
  const location = useLocation();

  const handlePush = () => {
    if (location.pathname === '/welcome' || (location.pathname === '/login' || location.pathname === '/signup')) {
      //
    } else {
      history.push('/welcome');
    }
  };

  useEffect(() => {
    if (user === null) {
      const cook = getCookie('symbud-1');
      if (cook) {
        setUser(cook);
      } else {
        handlePush();
      }
    }
    // eslint-disable-next-line
  }, [user, setUser, history]);

  return (
    <>
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
    </>
  );
}

App.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  setUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
};

const mapStateToProps = ({ currentUserReducer: user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (userInfo) => dispatch(loginUser(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
