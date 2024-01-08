import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import { LocalizationProvider } from '../context/LocalContext';
import { Login } from '../pages';

describe('Login component', () => {
  it('should match Login Page snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
