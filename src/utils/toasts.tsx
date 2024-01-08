import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import {
  TOAST_LOG_OUT_PENDING,
  TOAST_LOG_OUT_PENDING_RU,
  TOAST_LOG_OUT_SUCCESS,
  TOAST_LOG_OUT_SUCCESS_RU,
  TOAST_NO_CONNECTION,
  TOAST_NO_CONNECTION_RU,
  TOAST_SIGN_IN_PENDING,
  TOAST_SIGN_IN_PENDING_RU,
  TOAST_SIGN_IN_SUCCESS,
  TOAST_SIGN_IN_SUCCESS_RU,
  TOAST_SIGN_UP_PENDING,
  TOAST_SIGN_UP_PENDING_RU,
  TOAST_SIGN_UP_SUCCESS,
  TOAST_SIGN_UP_SUCCESS_RU,
} from '../constants/toastsConst';

export const toastSignUp = async (
  language: string,
  onRenderError: (error: FirebaseError) => string,
  signUp: () => Promise<unknown> | (() => Promise<unknown>)
) => {
  const response = await toast.promise(signUp(), {
    pending:
      language === 'en' ? TOAST_SIGN_UP_PENDING : TOAST_SIGN_UP_PENDING_RU,
    success:
      language === 'en' ? TOAST_SIGN_UP_SUCCESS : TOAST_SIGN_UP_SUCCESS_RU,
    error: {
      render(error) {
        const apiError = error as unknown as FirebaseError;
        return onRenderError(apiError);
      },
    },
  });
  return response;
};

export const toastForNoConnection = (language: string) => {
  if (!navigator.onLine) {
    const text =
      language === 'en' ? TOAST_NO_CONNECTION : TOAST_NO_CONNECTION_RU;
    toast.error(text);
    return true;
  }
};

export const toastSignIn = async (
  language: string,
  onRenderError: (error: FirebaseError) => string,
  signIn: () => Promise<unknown> | (() => Promise<unknown>)
) => {
  const response = await toast.promise(signIn(), {
    pending:
      language === 'en' ? TOAST_SIGN_IN_PENDING : TOAST_SIGN_IN_PENDING_RU,
    success:
      language === 'en' ? TOAST_SIGN_IN_SUCCESS : TOAST_SIGN_IN_SUCCESS_RU,

    error: {
      render(error) {
        const apiError = error as unknown as FirebaseError;
        return onRenderError(apiError);
      },
    },
  });

  return response;
};

export const toastLogout = async (
  language: string,
  onRenderError: (error: FirebaseError) => string,
  logout: () => Promise<unknown> | (() => Promise<unknown>)
) => {
  const response = await toast.promise(logout(), {
    pending:
      language === 'en' ? TOAST_LOG_OUT_PENDING : TOAST_LOG_OUT_PENDING_RU,
    success:
      language === 'en' ? TOAST_LOG_OUT_SUCCESS : TOAST_LOG_OUT_SUCCESS_RU,

    error: {
      render(error) {
        const apiError = error as unknown as FirebaseError;
        return onRenderError(apiError);
      },
    },
  });

  return response;
};
