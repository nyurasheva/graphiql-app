import { act, render, screen, waitFor } from '@testing-library/react';
import EditorSection from '../components/Editor/EditorSection';
import store from '../store/store';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '../context/LocalContext';

describe('EditorSection component', () => {
  it('renders editor section with title', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <LocalizationProvider>
            <EditorSection title="Test Title" />
          </LocalizationProvider>
        </Provider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });
  });
});
