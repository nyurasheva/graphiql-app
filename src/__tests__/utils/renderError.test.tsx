import '@testing-library/jest-dom';
import { onRenderError } from '../../utils/renderError';

describe('onRenderError fn', () => {
  const TYPE_ERROR = 'TypeError';
  const language = 'en';
  it('should return incorrect API string', () => {
    const error = onRenderError(TYPE_ERROR, language);

    expect(error).toEqual('Incorrect API. Please try again!');
  });

  it('should return incorrect requset string', () => {
    const error = onRenderError('any error', language);

    expect(error).toEqual('Incorrect requset. Please try again!');
  });
});
