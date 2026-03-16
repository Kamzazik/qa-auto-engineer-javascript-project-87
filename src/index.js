// src/index.js
import parseFile from './parsers.js';
import buildDiff from './diff.js';

/**
 * Главная функция, которая сравнивает два файла конфигурации
 * @param {string} filepath1 - путь к первому файлу
 * @param {string} filepath2 - путь ко второму файлу
 * @returns {string} - строка с различиями
 */
export default (filepath1, filepath2) => {
  // Парсим оба файла
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  
  // Возвращаем результат сравнения
  return buildDiff(data1, data2);
};