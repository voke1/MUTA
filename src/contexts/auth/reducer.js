import {
  LOGIN_SUCCESS,
  SUBMITTING,
  LOGOUT,
  LOGIN_FAILED,
  CLEAR_LOGIN_MSG,
} from "./action";

const authReducer = (state, action) => {
  switch (action.type) {
    case SUBMITTING:
      return {
        ...state,
        isSubmitting: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        isSubmitting: false,
        token: action.payload.token,
        role: action.payload.role,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        isSubmitting: false,
        loginErrMsg: { msg: action.payload, type: "bad" },
      };

    case CLEAR_LOGIN_MSG:
      return {
        ...state,
        loginErrMsg: {},
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
