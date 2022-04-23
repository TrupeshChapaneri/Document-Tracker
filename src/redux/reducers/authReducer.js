/* eslint-disable import/no-anonymous-default-export */

import { LOGIN_USER, LOGOUT_USER, SIGN_UP_USER } from "redux/types";

const initialState = {
  userList: [
    {
      userId: 1,
      fullName: "Trupesh Chapaneri",
      email: "trupesh@gmail.com",
      password: "123456",
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      const { data } = action;
      const userData = state.userList.find((user) => user.email === data.email);
      if (userData) {
        if (userData.password === data.password) {
          return {
            ...state,
            isUserAuthenticated: true,
            isError: false,
            userDetail: userData,
          };
        }
        return {
          ...state,
          isUserAuthenticated: false,
          isError: true,
          errorMsg: "Password is Wrong",
        };
      }
      return {
        ...state,
        isUserAuthenticated: false,
        isError: true,
        errorMsg: "User is Not Found",
      };
    }

    case LOGOUT_USER: {
      return { ...state, isUserAuthenticated: false };
    }

    case SIGN_UP_USER: {
      return {
        ...state,
        isUserAuthenticated: true,
        userDetail: action.data,
        userList: [...state.userList, action.data],
      };
    }
    default:
      return state;
  }
}
