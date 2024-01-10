import { formatCode } from '../../utils/formatCode';

describe('formatCode function', () => {
  it('should handle empty input code', () => {
    const inputCode = '';
    const expectedOutput = '';

    expect(formatCode(inputCode)).toEqual(expectedOutput);
  });

  it('should handle code with no indentation', () => {
    const inputCode = 'function exampleFunction() {\nconsole.log("Hello");\n}';
    const expectedOutput =
      'function exampleFunction() {\n  console.log("Hello");\n}';

    expect(formatCode(inputCode)).toEqual(expectedOutput);
  });

  it('should handle code with incorrect indentation', () => {
    const inputCode =
      'function exampleFunction() {\n  console.log("Hello");\n}';
    const expectedOutput =
      'function exampleFunction() {\n  console.log("Hello");\n}';

    expect(formatCode(inputCode)).toEqual(expectedOutput);
  });
});
