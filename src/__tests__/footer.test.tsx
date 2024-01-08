import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Footer } from '../layout';

describe('Footer component', () => {
  it('should be equal Welcome Page snapshot', () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
