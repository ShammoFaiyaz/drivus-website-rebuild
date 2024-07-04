import {toast, Bounce, Flip} from "react-toastify";

export const errorMsg = (message) => {
  toast.error(message, {transition: Bounce})
};

export const successMsg = (message) => {
  toast.success(message, {transition: Flip})
};