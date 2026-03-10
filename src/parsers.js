// src/parsers.js
import fs from 'fs';
import path from 'path';

// Функция для получения расширения файла
const getFileExtension = (filepath) => path.extname(filepath).toLowerCase();

// Функция для чтения файла
const readFile = (filepath) => {
  // Получаем абсолютный путь к файлу
  const absolutePath = path.resolve(process.cwd(), filepath);
  
  // Читаем файл синхронно
  return fs.readFileSync(absolutePath, 'utf-8');
};

// Основная функция парсинга
const parseFile = (filepath) => {
  const fileContent = readFile(filepath);
  const extension = getFileExtension(filepath);

  // Определяем парсер в зависимости от расширения
  switch (extension) {
    case '.json':
      return JSON.parse(fileContent);
    case '.yaml':
    case '.yml':
      // Пока заглушка для yaml (добавим позже)
      throw new Error(`YAML parsing not implemented yet: ${filepath}`);
    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

export default parseFile;