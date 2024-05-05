import {
  LOGIN_SUCCESS,
  SUBMITTING,
  LOGOUT,
  LOGIN_FAILED,
  CLEAR_LOGIN_MSG,
  SPOKEN_LANG,
  LANG_TO_LEARN,
  PROFICIENCY,
  LANG_SUCCESS,
  LANG_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
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
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        isSubmitting: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.userData,
        isSubmitting: false,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        isSubmitting: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SPOKEN_LANG:
      return {
        ...state,
        spokenLanguage: action.payload,
      };
    case LANG_SUCCESS:
      return {
        ...state,
        languages: action.payload,
        isSubmitting: false,
      };
    case LANG_FAILED:
      return {
        ...state,
        languages: action.payload,
        isSubmitting: false,
      };
    case LANG_TO_LEARN:
      return {
        ...state,
        langToLearn: action.payload,
      };
    case PROFICIENCY:
      return {
        ...state,
        proficiency: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
