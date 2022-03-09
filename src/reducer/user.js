export const initialState = {
  signupLoading: false,
  signupDone: false,
  signupError: null,
  loginLoading: false,
  loginDone: false,
  loginInfo: null,
  isLoggedIn: false,
  myInfo: null,
};

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        signupError: null,
        signupDone: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        signupDone: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupLoading: false,
        signupError: action.error,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginError: null,
        loginDone: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        myInfo: action.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
