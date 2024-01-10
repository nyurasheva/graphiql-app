import '@testing-library/jest-dom';
import { errorDatabase } from '../../constants/errors';

describe('errorDatabase object', () => {
  it('should has 2 fields', () => {
    const localization = Object.keys(errorDatabase).length;
    expect(localization).toBe(2);
  });
});
