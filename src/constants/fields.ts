const fieldsRu = [
  {
    label: 'Имя:',
    name: 'firstName',
    type: 'text',
    placeholder: 'Иван',
  },
  {
    label: 'Email:',
    name: 'email',
    type: 'text',
    placeholder: 'email@gmail.com',
  },
  {
    label: 'Пароль (минимум 8 символов, включая цифру, букву и спецсимвол):',
    name: 'password',
    type: 'password',
  },
  {
    label: 'Подтверждение пароля:',
    name: 'confirmPassword',
    type: 'password',
  },
];

const fieldsEn = [
  {
    label: 'Name:',
    name: 'firstName',
    type: 'text',
    placeholder: 'John',
  },
  {
    label: 'Email:',
    name: 'email',
    type: 'text',
    placeholder: 'email@gmail.com',
  },
  {
    label:
      'Password (minimum 8 symbols, including a digit, letter, and special character)',
    name: 'password',
    type: 'password',
  },
  {
    label: 'Confirm Password:',
    name: 'confirmPassword',
    type: 'password',
  },
];

type Fields = typeof fieldsRu;

export { fieldsRu, fieldsEn };
export type { Fields };
