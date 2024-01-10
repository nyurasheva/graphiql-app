import '@testing-library/jest-dom';
import { NavigationLayout } from '../layout';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '../context/LocalContext';

describe('NavigationLayout component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <NavigationLayout />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
