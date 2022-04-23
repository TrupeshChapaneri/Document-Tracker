/* eslint-disable import/no-anonymous-default-export */

import { IS_LOADING_FALSE, IS_LOADING_TRUE } from "redux/types";

const initialState = {
  isAppLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING_TRUE: {
      return { ...state, isAppLoading: true };
    }

    case IS_LOADING_FALSE: {
      return { ...state, isAppLoading: false };
    }

    default:
      return state;
  }
}
