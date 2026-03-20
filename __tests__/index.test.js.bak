import fs from 'fs';
import genDiff from '../src/index.js';

const readFile = (filename) => fs.readFileSync(`./__fixtures__/${filename}`, 'utf-8').trim();

const normalize = (str) => str.replace(/\r\n/g, '\n').trim();

test('gendiff stylish format with JSON', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'stylish');
  const expected = readFile('expected.txt');
  expect(normalize(result)).toBe(normalize(expected));
});

test('gendiff plain format with JSON', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain');
  const expected = readFile('expected-plain.txt');
  expect(normalize(result)).toBe(normalize(expected));
});

test('gendiff with json format', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json');

  // Проверяем, что результат можно распарсить
  expect(() => JSON.parse(result)).not.toThrow();

  const parsed = JSON.parse(result);

  // Проверяем, что это массив
  expect(Array.isArray(parsed)).toBe(true);

  // Проверяем, что массив не пустой
  expect(parsed.length).toBeGreaterThan(0);

  // Находим нужные элементы по ключам
  const timeoutNode = parsed.find(item => item.key === 'timeout');
  const verboseNode = parsed.find(item => item.key === 'verbose');
  const hostNode = parsed.find(item => item.key === 'host');

  // Проверяем типы изменений
  expect(timeoutNode.type).toBe('changed');
  expect(verboseNode.type).toBe('added');
  expect(hostNode.type).toBe('unchanged');

  // Проверяем значения для changed
  expect(timeoutNode.oldValue).toBe(50);
  expect(timeoutNode.newValue).toBe(20);

  // Проверяем значение для added
  expect(verboseNode.value).toBe(true);

  // Проверяем значение для unchanged
  expect(hostNode.value).toBe('hexlet.io');
});

test('gendiff works with YAML files', () => {
  const result = genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'stylish');
  const expected = readFile('expected.txt');
  expect(normalize(result)).toBe(normalize(expected));
});
