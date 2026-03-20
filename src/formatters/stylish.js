// src/formatters/stylish.js

const stringifyValue = (value) => {
  if (typeof value === 'string') {
    return value;
  }
  return String(value);
};

const stylish = (data1, data2) => {
  const allKeys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();

  const lines = allKeys.flatMap((key) => {
    const has1 = Object.hasOwn(data1, key);
    const has2 = Object.hasOwn(data2, key);

    if (!has1 && has2) {
      return `+ ${key}: ${stringifyValue(data2[key])}`;
    }
    if (has1 && !has2) {
      return `- ${key}: ${stringifyValue(data1[key])}`;
    }
    if (data1[key] === data2[key]) {
      return `  ${key}: ${stringifyValue(data1[key])}`;
    }
    return [
      `- ${key}: ${stringifyValue(data1[key])}`,
      `+ ${key}: ${stringifyValue(data2[key])}`,
    ];
  });

  return `{\n${lines.map(line => `  ${line}`).join('\n')}\n}`;
};

export default stylish;