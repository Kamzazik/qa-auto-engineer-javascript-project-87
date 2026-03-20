import path from 'path';
import parseFile from '../src/parsers.js';

describe('Парсеры', () => {
  const getFixturePath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
  
  test('парсинг JSON файла', () => {
    const data = parseFile(getFixturePath('file1.json'));
    expect(data).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    });
  });
  
  test('парсинг YAML файла', () => {
    const data = parseFile(getFixturePath('file1.yml'));
    expect(data).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    });
  });
});