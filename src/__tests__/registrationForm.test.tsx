import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RegistrationForm } from '../components';
import { LocalizationProvider } from '../context/LocalContext';
import store from '../store/store';

describe('registrationForm component', () => {
  it('should match registrationForm snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <RegistrationForm />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

  // it('should change registrationForm`s input', async () => {
  //   const navigateMock = jest.fn();
  //   (useNavigate as jest.Mock).mockReturnValue(navigateMock);

  //   render(
  //     <LocalizationProvider>
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <RegistrationForm />
  //         </BrowserRouter>
  //       </Provider>
  //     </LocalizationProvider>
  //   );

  //   const input = await screen.findByPlaceholderText('John');
  //   const email = await screen.findByPlaceholderText('email@gmail.com');
  //   const password = document.getElementById('password') as HTMLInputElement;
  //   const confirmPassword = document.getElementById(
  //     'confirmPassword'
  //   ) as HTMLInputElement;

  //   fireEvent.change(input, { target: { value: 'qqq' } });
  //   fireEvent.change(email, { target: { value: 'test@gmail.com' } });
  //   fireEvent.change(password, { target: { value: 'qwertyQ!1' } });
  //   fireEvent.change(confirmPassword, { target: { value: 'qwertyQ!1' } });

  //   const form = document.querySelector('.form') as HTMLFormElement;
  //   fireEvent.submit(form);

  //   expect(navigateMock).toHaveBeenCalled();
  // });
});
