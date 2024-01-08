import { countLines } from '../../utils/countLines';

describe('countLines', () => {
  test('returns the correct number of lines', () => {
    const text1 = 'This is line 1.\nThis is line 2.\nThis is line 3.';
    const text2 = 'Another line 1.\nAnother line 2.';

    const result = countLines(text1, text2);

    expect(result).toBe(3);
  });

  test('handles empty strings', () => {
    const text1 = '';
    const text2 = '';

    const result = countLines(text1, text2);

    expect(result).toBe(1);
  });

  test('handles different line endings', () => {
    const text1 = 'Line 1\r\nLine 2\rLine 3';
    const text2 = 'Another line 1\nAnother line 2';

    const result = countLines(text1, text2);

    expect(result).toBe(2);
  });
});
