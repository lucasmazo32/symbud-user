const action = {
  LOGIN_USER: 'LOGIN USER',
  LOGOUT_USER: 'LOGOUT USER',
};

const loginUser = (user) => ({
  type: action.LOGIN_USER,
  payload: user,
});

const logoutUser = () => ({
  type: action.LOGIN_USER,
});

export default { action, loginUser, logoutUser };
