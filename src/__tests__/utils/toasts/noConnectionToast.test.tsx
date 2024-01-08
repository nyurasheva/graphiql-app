import { toastForNoConnection } from '../../../utils/toasts';

jest.mock('react-toastify', () => ({
  error: jest.fn(),
}));

const originalNavigator = { ...navigator };

beforeEach(() => {
  Object.defineProperty(global, 'navigator', {
    value: { ...originalNavigator, onLine: true },
    configurable: true,
    writable: true,
  });
});

afterEach(() => {
  jest.clearAllMocks();
  Object.defineProperty(global, 'navigator', {
    value: originalNavigator,
    configurable: true,
    writable: true,
  });
});

describe('toastForNoConnection', () => {
  test('does not show a toast when online', () => {
    const language = 'en';
    const result = toastForNoConnection(language);

    expect(result).toBeUndefined();
  });
});
