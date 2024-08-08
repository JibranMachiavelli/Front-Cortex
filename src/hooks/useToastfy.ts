// useToast.ts
'use client';

import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useToast = () => {
  const success = (message: string, options?: ToastOptions) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      ...options,
    });
  };

  const error = (message: string, options?: ToastOptions) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      ...options,
    });
  };

  return { success, error };
};
