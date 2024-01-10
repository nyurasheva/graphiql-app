import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { IFormLogin, schemaLoginRu } from '../utils/schema';
import { FieldName } from '../types/types';
import { schemaLogin } from '../utils/schema';
import { logInWithEmailAndPassword } from '../firebase/firebase';
import { toastForNoConnection, toastSignIn } from '../utils/toasts';
import {
  TOAST_INTERNAL_SERVER_ERROR,
  TOAST_INTERNAL_SERVER_ERROR_RU,
  TOAST_SIGN_IN_ERROR,
  TOAST_SIGN_IN_ERROR_RU,
} from '../constants/toastsConst';
import { FirebaseError } from 'firebase/app';
import { MAIN_ROUTE } from '../constants/route';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/types';
import { setIsLogin } from '../store/slice/userSlice';
import { Fields, fieldsEn, fieldsRu } from '../constants/fields';
import { Localization } from '../context/LocalContext';
import { DataLogin } from '../types/interface';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { language, translations } = Localization();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormLogin>({
    mode: 'onChange',
    resolver: yupResolver(language === 'en' ? schemaLogin : schemaLoginRu),
  });

  const onRenderError = (error: FirebaseError) => {
    if (error.code === 'auth/email-already-in-use') {
      if (language === 'en') {
        return TOAST_INTERNAL_SERVER_ERROR;
      }
      return TOAST_INTERNAL_SERVER_ERROR_RU;
    } else {
      return language === 'en' ? TOAST_SIGN_IN_ERROR : TOAST_SIGN_IN_ERROR_RU;
    }
  };

  const onSubmit = async (data: DataLogin) => {
    try {
      if (toastForNoConnection(language)) {
        return;
      }
      await toastSignIn(language, onRenderError, () =>
        logInWithEmailAndPassword(data.email, data.password)
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

  const filteredFields = fields.filter(
    (field) => field.name === 'email' || field.name === 'password'
  );

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {filteredFields.map(({ label, name, type, placeholder }) => (
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
        {translations.login}
      </button>
    </form>
  );
};

export default LoginForm;
