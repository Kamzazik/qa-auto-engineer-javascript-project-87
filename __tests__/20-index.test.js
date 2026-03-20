import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const normalize = (str) => str.replace(/\r\n/g, '\n').trim();

describe('Генерация diff', () => {
  test('stylish формат для JSON', () => {
    const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
    const expected = readFile('expected.txt');
    expect(normalize(result)).toBe(normalize(expected));
  });
  
  test('plain формат для JSON', () => {
    const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
    const expected = readFile('expected-plain.txt');
    expect(normalize(result)).toBe(normalize(expected));
  });
  
  test('json формат для JSON', () => {
    const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json');
    const parsed = JSON.parse(result);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.find(n => n.key === 'timeout').type).toBe('changed');
  });
  
  test('stylish формат для YAML', () => {
    const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish');
    const expected = readFile('expected.txt');
    expect(normalize(result)).toBe(normalize(expected));
  });
});