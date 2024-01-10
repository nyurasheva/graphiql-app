import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import { toastSignIn } from '../../../utils/toasts';

describe('toasts Sign In', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls toast promise', async () => {
    const toastSignInMock = jest.fn(() =>
      Promise.resolve('toastSignIn success')
    );
    const toastMock = jest.spyOn(toast, 'promise');

    const onRenderErrorMock = jest.fn();
    const language = 'en';

    await toastSignIn(language, onRenderErrorMock, toastSignInMock);

    expect(toastMock).toHaveBeenCalled();
  });
});
