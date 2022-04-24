import { toast } from "react-toastify";

export const delayedAction = ({
  startLoader = () => {},
  onSucces = () => {},
  setToast = "Toast",
  showToast = true,
}) => {
  startLoader();
  setTimeout(() => {
    onSucces();
    if (showToast) toast(setToast);
  }, 1000);
};

export const removeDoubleQuotes = (string) => {
  return string.replace(/"/g, "");
};
