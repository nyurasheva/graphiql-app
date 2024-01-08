import '@testing-library/jest-dom';
import { checkVariables } from '../../utils/checkVariables';

describe('checkVariables fn', () => {
  it('should return JSON', () => {
    const data = JSON.stringify({ data: 'test' });
    const result = checkVariables(data);

    expect(result).toEqual({ data: 'test' });
  });

  it('should return empty object', () => {
    const result = checkVariables('data');
    expect(result).toEqual({});
  });
});
