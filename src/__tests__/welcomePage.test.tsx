import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Welcome } from '../pages';
import { LocalizationProvider } from '../context/LocalContext';

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('Welcome Page', () => {
  it('should be equal Welcome Page snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should has tree images of developers', () => {
    render(
      <LocalizationProvider>
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      </LocalizationProvider>
    );

    const imageElements = screen.getAllByRole('img');

    expect(imageElements.length).toBe(13);
  });

  it('should has tree names of developers', () => {
    render(
      <LocalizationProvider>
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      </LocalizationProvider>
    );

    const imageElements = screen.getAllByRole('heading', { level: 3 });

    expect(imageElements.length).toBe(12);
  });
});
