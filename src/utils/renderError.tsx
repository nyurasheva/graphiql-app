import {
  TOAST_API_ERROR,
  TOAST_API_ERROR_RU,
  TOAST_REQUSET_ERROR,
  TOAST_REQUSET_ERROR_RU,
} from '../constants/toastsConst';

export const onRenderError = (error: string | undefined, lang: string) => {
  if (error?.match('TypeError')) {
    if (lang === 'ru') {
      return TOAST_API_ERROR_RU;
    }
    return TOAST_API_ERROR;
  } else {
    return lang === 'ru' ? TOAST_REQUSET_ERROR_RU : TOAST_REQUSET_ERROR;
  }
};
