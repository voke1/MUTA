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

  const clearLoginMsg = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_LOGIN_MSG,
      });
    }, 1000);
  };

  // Action to log in
  const login = async (values) => {
    console.log({ values });
    setSubmitting();
    try {
      const res = await axios.post(`${baseUrl}login`, values);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user: {
            name,
            vehicleNumber: vehicleNumber ? vehicleNumber : "",
            siteId,
            site,
            imageUrl,
            id,
            country: country && country.toLowerCase(),
          },
        },
      });
    } catch (error) {
      const { data, status } = error.response;
      Alert.alert(`${data.message}`);
    }
  };

  // Action to log in
  const signup = async (values) => {
    dispatch({
      type: SIGNUP_LOADING,
    });
    try {
      const res = await axios.post(`${baseUrl}create-user`, values);
      const {
        roles,
        name,
        token,
        vehicleNumber,
        siteId,
        imageUrl,
        deviceId,
        country,
        id,
        site,
      } = res.data;
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: {
          token,
          user: {
            name,
            vehicleNumber: vehicleNumber ? vehicleNumber : "",
            siteId,
            site,
            imageUrl,
            id,
            country: country && country.toLowerCase(),
          },
        },
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: SIGNUP_FAILED,
          payload: "couldn't login",
        });
      if (data)
        dispatch({
          type: SIGNUP_FAILED,
          payload: status === 503 ? "server error" : data.message,
        });
      clearLoginMsg();
    }
  };

  const getLanguages = async () => {
    dispatch({
      type: GET_LANG_LOADING,
    });
    try {
      const res = await axios.post(`${baseUrl}get-all-languages`);
      dispatch({
        type: GET_LANG_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const { data, status } = error.response;
      if (error.message === "Network Error")
        dispatch({
          type: GET_LANG_FAILED,
          payload: "couldn't login",
        });
      if (data)
        dispatch({
          type: GET_LANG_FAILED,
          payload: status === 503 ? "server error" : data.message,
        });
      clearLoginMsg();
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
