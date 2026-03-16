import genDiff from '../src/index.js';

test('gendiff works', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');

  // Просто проверяем, что результат не пустой
  expect(result).toBeTruthy();

  // И содержит ключевые слова
  expect(result).toContain('follow: false');
  expect(result).toContain('host: hexlet.io');
  expect(result).toContain('proxy');
  expect(result).toContain('timeout');
  expect(result).toContain('verbose');
});