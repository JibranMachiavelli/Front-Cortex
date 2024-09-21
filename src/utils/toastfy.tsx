// src/utils/Toastfy.ts
import { toast } from 'react-toastify';

const toastOptions = {
  position: 'top-right' as const,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function success(message: string) {
  toast.success(message, {
    ...toastOptions,
    className: 'bg-green-500 text-white',
    bodyClassName: 'font-semibold',
  });
}

export function warning(message: string) {
  toast.warn(message, {
    ...toastOptions,
    className: 'bg-yellow-500 text-white',
    bodyClassName: 'font-semibold',
  });
}

export function error(message: string) {
  toast.error(message, {
    ...toastOptions,
    className: 'bg-red-500 text-white',
    bodyClassName: 'font-semibold',
  });
}
