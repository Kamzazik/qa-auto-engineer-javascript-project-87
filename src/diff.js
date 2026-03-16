// src/diff.js

// Функция для преобразования значения в строку (без кавычек у строк)
const stringifyValue = (value) => {
  if (typeof value === 'string') {
    return value; // строки без кавычек
  }
  return String(value); // числа, булевы и т.д.
};

// Основная функция построения diff
const buildDiff = (data1, data2) => {
  // Собираем все уникальные ключи из обоих объектов и сортируем
  const allKeys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();

  // Для каждого ключа создаём одну или две строки
  const lines = allKeys.flatMap((key) => {
    const has1 = Object.hasOwn(data1, key);
    const has2 = Object.hasOwn(data2, key);

    // Ключ только во втором файле
    if (!has1 && has2) {
      return `+ ${key}: ${stringifyValue(data2[key])}`;
    }
    // Ключ только в первом файле
    if (has1 && !has2) {
      return `- ${key}: ${stringifyValue(data1[key])}`;
    }
    // Ключ есть в обоих
    if (data1[key] === data2[key]) {
      // Значения одинаковые
      return `  ${key}: ${stringifyValue(data1[key])}`;
    }
    // Значения разные – возвращаем две строки: сначала из первого файла, потом из второго
    return [
      `- ${key}: ${stringifyValue(data1[key])}`,
      `+ ${key}: ${stringifyValue(data2[key])}`,
    ];
  });

  // Собираем итоговую строку с обрамляющими фигурными скобками
  return `{\n${lines.map(line => `  ${line}`).join('\n')}\n}`;
};

export default buildDiff;