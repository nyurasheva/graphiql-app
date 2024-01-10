import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import { toastLogout } from '../../../utils/toasts';

describe('toasts LogOut', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls toast promise', async () => {
    const LogOutToastMock = jest.fn(() =>
      Promise.resolve('LogOutToast success')
    );
    const toastMock = jest.spyOn(toast, 'promise');

    const onRenderErrorMock = jest.fn();
    const language = 'en';

    await toastLogout(language, onRenderErrorMock, LogOutToastMock);

    expect(toastMock).toHaveBeenCalled();
  });
});
