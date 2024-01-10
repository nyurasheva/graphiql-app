import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Main } from '../pages';
import { LocalizationProvider } from '../context/LocalContext';

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

jest.mock('./../components/Editor/EditorSection');
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('main component', () => {
  test('should match snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <Main />
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
