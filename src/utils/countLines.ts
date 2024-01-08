export const countLines = (text1: string, text2: string): number => {
  const lines1 = text1.split('\n').length;
  const lines2 = text2.split('\n').length;
  return Math.max(lines1, lines2);
};
