/* eslint-disable no-shadow */
import actions from '../actions/index';

const { action } = actions;
const { LOGIN_USER, LOGOUT_USER } = action;

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUserReducer;
