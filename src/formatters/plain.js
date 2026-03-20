// src/formatters/plain.js

const stringifyValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`; // строки в кавычках
  }
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  return String(value);
};

const plain = (data1, data2) => {
  const allKeys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();
  
  const lines = allKeys.flatMap((key) => {
    const has1 = Object.hasOwn(data1, key);
    const has2 = Object.hasOwn(data2, key);

    if (!has1 && has2) {
      return `Property '${key}' was added with value: ${stringifyValue(data2[key])}`;
    }
    if (has1 && !has2) {
      return `Property '${key}' was removed`;
    }
    if (data1[key] === data2[key]) {
      return []; // ничего не выводим для одинаковых значений
    }
    return `Property '${key}' was updated. From ${stringifyValue(data1[key])} to ${stringifyValue(data2[key])}`;
  });

  return lines.join('\n');
};

export default plain;