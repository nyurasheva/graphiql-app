export const formatCode = (code: string) => {
  try {
    let output = '';
    let currentIndent = 0;
    const spaces = '  ';

    const lines = code
      .replace(/[^\S\r\n]{2,}/g, ' ')
      .split(/({|\}\)|})|\n/)
      .filter(Boolean)
      .filter((item) => !/^\s*$/.test(item));

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      if (trimmedLine === '{') {
        output = output.trim();
        output += ` ${trimmedLine}\n${spaces.repeat(currentIndent)}\n`;
        currentIndent++;
      } else if (trimmedLine === '}' || trimmedLine === '})') {
        currentIndent = Math.max(currentIndent - 1, 0);
        output += `\n${spaces.repeat(currentIndent)}${trimmedLine}\n`;
      } else {
        output += `${spaces.repeat(currentIndent)}${trimmedLine}\n`;
      }
    });

    output = output.replace(/^\s*[\r\n]/gm, '');

    return output.trim();
  } catch (error) {
    console.error('Ошибка форматирования кода:', error);
    return code;
  }
};
