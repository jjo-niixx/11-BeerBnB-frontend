const LOGIN_TOGGLE = "googleLogin/LOGIN_TOGGLE";

export const loginToggle = (isLoginActive) => ({
  type: LOGIN_TOGGLE,
  isLoginActive,
});

const INITIAL_STATE = {
  isLoginActive: false,
};

export default function googleLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_TOGGLE:
      return {
        ...state,
        isLoginActive: action.isLoginActive,
      };
    default:
      return state;
  }
}
