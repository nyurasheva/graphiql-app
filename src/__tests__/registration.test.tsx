import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '../context/LocalContext';
import { Registration } from '../pages';
import store from '../store/store';

describe('Registration component', () => {
  it('should match Registration Page snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Registration />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
