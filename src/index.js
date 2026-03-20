import parseFile from './parsers.js';
import buildDiff from './diff.js';
import getFormatter from './formatters/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const diff = buildDiff(data1, data2);
  const formatter = getFormatter(format);

  return formatter(diff);
};
