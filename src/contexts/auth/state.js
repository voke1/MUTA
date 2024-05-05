import { createContext, useReducer } from "react";
import authReducer from "./reducer";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SUBMITTING,
  LOGOUT,
  CLEAR_LOGIN_MSG,
  SIGNUP_FAILED,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  GET_LANG_FAILED,
  GET_LANG_LOADING,
  GET_LANG_SUCCESS,
  SPOKEN_LANG,
  LANG_TO_LEARN,
  PROFICIENCY,
  LANG_SUCCESS,
  LANG_FAILED,
} from "./action";
import axios from "axios";
import { baseUrl } from "../../constants/url";
import { Alert } from "react-native";
export const AuthContext = createContext();

export const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    isSubmitting: false,
    user: {},
    role: "",
    loginErrMsg: {},
    token: "",
    languages: [],
    spokenLanguage: "",
    langToLearn: "",
    proficiency: "",
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setSubmitting = () => {
    dispatch({
      type: SUBMITTING,
    });
  };

  const setSpokenLang = (value) => {
    dispatch({
      type: SPOKEN_LANG,
      payload: value,
    });
  };

  const setProficiency = (value) => {
    dispatch({
      type: PROFICIENCY,
      payload: value,
    });
  };

  const setLangToLearn = (value) => {
    dispatch({
      type: LANG_TO_LEARN,
      payload: value,
    });
  };

  const clearLoginMsg = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_LOGIN_MSG,
      });
    }, 1000);
  };

  // Action to log in
  const login = async (values) => {
    setSubmitting();
    try {
      const res = await axios.post(`${baseUrl}login`, values);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const { data, status, _response } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: SIGNUP_FAILED,
          payload: "couldn't login",
        });
      dispatch({
        type: SIGNUP_FAILED,
        payload: status === 503 ? "server error" : data.message,
      });
      Alert.alert(
        `${data.message || "An error occurred! Please try again later"}`
      );
    }
  };

  // Action to log in
  const signup = async (values) => {
    setSubmitting();
    try {
      const res = await axios.post(`${baseUrl}create-user`, {
        ...values,
        userType: state.proficiency,
        spokenLanguage: state.langToLearn,
      });
      console.log("rESULT", res.data);
      const { token, refreshToken, userData } = res.data;
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          token,
          refreshToken,
          userData,
        },
      });
    } catch (error) {
      const { data, status, _response } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: SIGNUP_FAILED,
          payload: "couldn't login",
        });
      dispatch({
        type: SIGNUP_FAILED,
        payload: status === 503 ? "server error" : data.message,
      });
      Alert.alert(
        `${data.message || "An error occurred! Please try again later"}`
      );
    }
  };

  const getLanguages = async () => {
    setSubmitting();
    try {
      const res = await axios.get(`${baseUrl}get-all-languages`);
      dispatch({
        type: LANG_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      const { data, status, _response } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: LANG_FAILED,
          payload: "couldn't login",
        });
      dispatch({
        type: LANG_FAILED,
        payload: status === 503 ? "server error" : data.message,
      });
      Alert.alert(
        `${data.message || "An error occurred! Please try again later"}`
      );
    }
  };

  const logOut = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logOut,
        getLanguages,
        signup,
        setProficiency,
        setLangToLearn,
        setSpokenLang,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
