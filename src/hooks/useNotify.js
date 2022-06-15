import { useSnackbar } from "notistack";

const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const success = (message, option = {}) =>
    enqueueSnackbar(message, { ...option, variant: "success" });
  const error = (message, option = {}) =>
    enqueueSnackbar(message, { ...option, variant: "error" });

  const close = (key = undefined) => closeSnackbar(key);

  return {
    success,
    error,
    close,
  };
};

export default useNotify;
