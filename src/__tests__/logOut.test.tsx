import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import { LocalizationProvider } from '../context/LocalContext';
import { LogOut } from '../components/Logout';

describe('logOut component', () => {
  it('should match logOut Page snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <LogOut />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
