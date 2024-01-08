import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import { toastForNoConnection, toastSignUp } from '../../../utils/toasts';

describe('toast Sign up', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls toast promise', async () => {
    const signUpMock = jest.fn(() => Promise.resolve('Sign up success'));
    const toastMock = jest.spyOn(toast, 'promise');

    const onRenderErrorMock = jest.fn();
    const language = 'en';

    await toastSignUp(language, onRenderErrorMock, signUpMock);

    expect(toastMock).toHaveBeenCalled();
  });

  test('calls toast promise with arguments', async () => {
    const signUpMock = jest.fn(() => Promise.resolve('Sign up success'));
    const toastMock = jest.spyOn(toast, 'promise');

    const onRenderErrorMock = jest.fn();
    const language = 'en';

    await toastSignUp(language, onRenderErrorMock, signUpMock);

    expect(toastMock).toHaveBeenCalledWith(signUpMock(), {
      error: expect.objectContaining({
        render: expect.any(Function),
      }),
      pending: 'Signing up...',
      success: 'Sign up successful!',
    });
  });

  test('calls toastForNoConnection', async () => {
    const result = toastForNoConnection('err');

    console.log(result);
  });
});
