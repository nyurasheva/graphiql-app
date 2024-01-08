import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '../context/LocalContext';
import store from '../store/store';
import { NotFound } from '../pages';

describe('EditorSection component', () => {
  it('should be equal EditorSection snapshot', () => {
    let container;

    act(() => {
      ({ container } = render(
        <LocalizationProvider>
          <Provider store={store}>
            <BrowserRouter>
              <NotFound />
            </BrowserRouter>
          </Provider>
        </LocalizationProvider>
      ));
    });

    expect(container).toMatchSnapshot();
  });
});
