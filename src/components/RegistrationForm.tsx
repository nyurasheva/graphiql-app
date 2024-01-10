import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldName } from '../types/types';
import { schema, IForm } from '../utils/schema';
import { registerWithEmailAndPassword } from '../firebase/firebase';
import { toastForNoConnection, toastSignUp } from '../utils/toasts';
import {
  TOAST_INTERNAL_SERVER_ERROR,
  TOAST_INTERNAL_SERVER_ERROR_RU,
  TOAST_SIGN_UP_ERROR,
  TOAST_SIGN_UP_ERROR_RU,
} from '../constants/toastsConst';
import { FirebaseError } from 'firebase/app';
import { MAIN_ROUTE } from '../constants/route';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/types';
import { setIsLogin } from '../store/slice/userSlice';
import { Fields, fieldsEn, fieldsRu } from '../constants/fields';
import { Localization } from '../context/LocalContext';
import { DataForm } from '../types/interface';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { language, translations } = Localization();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onRenderError = (error: FirebaseError) => {
    if (error.code === 'auth/email-already-in-use') {
      if (language === 'en') {
        return TOAST_INTERNAL_SERVER_ERROR;
      }
      return TOAST_INTERNAL_SERVER_ERROR_RU;
    } else {
      return language === 'en' ? TOAST_SIGN_UP_ERROR : TOAST_SIGN_UP_ERROR_RU;
    }
  };

  const onSubmit = async (data: DataForm) => {
    try {
      if (toastForNoConnection(language)) {
        return;
      }
      await toastSignUp(language, onRenderError, () =>
        registerWithEmailAndPassword(data.email, data.password)
      );
      dispatch(setIsLogin(true));
      navigate(MAIN_ROUTE);
    } catch (error) {
      dispatch(setIsLogin(false));
      reset();
    }
  };
  const fields: Fields = useMemo(() => {
    if (language === 'ru') {
      return fieldsRu;
    }
    return fieldsEn;
  }, [language]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ label, name, type, placeholder }) => (
        <label
          key={name}
          className={`label ${errors[name as FieldName] ? 'error' : ''}`}
          htmlFor={name}
        >
          <span>{label}</span>
          <input
            {...register(name as FieldName)}
            type={type}
            id={name}
            placeholder={placeholder}
          />
          {errors[name as FieldName] && (
            <div className="error-message">
              {errors[name as FieldName]?.message}
            </div>
          )}
        </label>
      ))}
      <button className="button button-second" type="submit">
        {translations.registration}
      </button>
    </form>
  );
};

export default RegistrationForm;
