import { InferType, object, ref, string } from 'yup';

export const schema = object({
  email: string()
    .max(255)
    .email('Please enter a valid email (e.g., user@example.com)')
    .required('Email is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-zA-ZÀ-ÿА-яΑ-ω])/,
      'Password must contain at least one letter'
    )
    .matches(/^(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Password must contain at least one special character'
    )
    .required('Password is a required field'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const schemaRu = object({
  email: string()
    .max(255)
    .email(
      'Пожалуйста, введите корректный адрес электронной почты (например, user@example.com)'
    )
    .required('Адрес электронной почты обязателен для заполнения'),
  password: string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(
      /^(?=.*[a-zA-ZÀ-ÿА-яΑ-ω])/,
      'Пароль должен содержать как минимум одну букву'
    )
    .matches(/^(?=.*[0-9])/, 'Пароль должен содержать как минимум одну цифру')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Пароль должен содержать как минимум один спецсимвол'
    )
    .required('Пароль обязателен для заполнения'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Пароли должны совпадать')
    .required('Подтверждение пароля обязательно для заполнения'),
});

export type IForm = InferType<typeof schema>;

export const schemaLogin = object({
  email: string()
    .max(255)
    .email('Please enter a valid email (e.g., user@example.com)')
    .required('Email is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-zA-ZÀ-ÿА-яΑ-ω])/,
      'Password must contain at least one letter'
    )
    .matches(/^(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Password must contain at least one special character'
    )
    .required('Password is a required field'),
});

export const schemaLoginRu = object({
  email: string()
    .max(255)
    .email(
      'Пожалуйста, введите корректный адрес электронной почты (например, user@example.com)'
    )
    .required('Адрес электронной почты обязателен для заполнения'),
  password: string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .matches(
      /^(?=.*[a-zA-ZÀ-ÿА-яΑ-ω])/,
      'Пароль должен содержать как минимум одну букву'
    )
    .matches(/^(?=.*[0-9])/, 'Пароль должен содержать как минимум одну цифру')
    .matches(
      /^(?=.*[!@#$%^&*])/,
      'Пароль должен содержать как минимум один спецсимвол'
    )
    .required('Пароль обязателен для заполнения'),
});

export type IFormLogin = InferType<typeof schemaLogin>;
