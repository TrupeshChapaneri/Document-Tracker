import { IS_LOADING_FALSE, IS_LOADING_TRUE } from "redux/types";

export function isLoadingTrue() {
  return {
    type: IS_LOADING_TRUE,
  };
}

export function isLoadingFalse() {
  return {
    type: IS_LOADING_FALSE,
  };
}
