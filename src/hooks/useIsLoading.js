import { useSelector } from "react-redux";

function useIsLoading() {
  const { isAppLoading } = useSelector((state) => state.appLoaderReducer);

  return isAppLoading;
}

export { useIsLoading };
