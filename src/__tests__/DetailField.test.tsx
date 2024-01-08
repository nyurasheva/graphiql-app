import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import { LocalizationProvider } from '../context/LocalContext';
import { DetailedField } from '../components/Docs/components';
import { GraphQLScalarType } from 'graphql';

const dataScalar = new GraphQLScalarType({
  name: 'Data',
  description: 'description',
});

describe('DetailField component', () => {
  it('should match DetailField Page snapshot', () => {
    const { asFragment } = render(
      <LocalizationProvider>
        <Provider store={store}>
          <BrowserRouter>
            <DetailedField value={dataScalar} />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
