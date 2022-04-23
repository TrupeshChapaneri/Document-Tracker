import { LOGIN_USER, LOGOUT_USER, SIGN_UP_USER } from "redux/types";

export function loginUser(data) {
  return {
    type: LOGIN_USER,
    data,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function signUpUser(data) {
  return {
    type: SIGN_UP_USER,
    data,
  };
}
