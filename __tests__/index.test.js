import genDiff from '../src/index.js';

test('gendiff works with JSON files', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
  
  expect(result).toContain('follow: false');
  expect(result).toContain('host: hexlet.io');
  expect(result).toContain('- proxy: 123.234.53.22');
  expect(result).toContain('- timeout: 50');
  expect(result).toContain('+ timeout: 20');
  expect(result).toContain('+ verbose: true');
});

test('gendiff works with YAML files', () => {
  const result = genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml');
  
  expect(result).toContain('follow: false');
  expect(result).toContain('host: hexlet.io');
  expect(result).toContain('- proxy: 123.234.53.22');
  expect(result).toContain('- timeout: 50');
  expect(result).toContain('+ timeout: 20');
  expect(result).toContain('+ verbose: true');
});

test('gendiff works with mixed formats', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.yml');
  
  expect(result).toContain('follow: false');
  expect(result).toContain('host: hexlet.io');
  expect(result).toContain('- proxy: 123.234.53.22');
  expect(result).toContain('- timeout: 50');
  expect(result).toContain('+ timeout: 20');
  expect(result).toContain('+ verbose: true');
});

test('gendiff with plain format for JSON files', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain');
  
  expect(result).toContain("Property 'follow' was removed");
  expect(result).toContain("Property 'proxy' was removed");
  expect(result).toContain("Property 'timeout' was updated. From 50 to 20");
  expect(result).toContain("Property 'verbose' was added with value: true");
});

test('gendiff with plain format for YAML files', () => {
  const result = genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'plain');
  
  expect(result).toContain("Property 'follow' was removed");
  expect(result).toContain("Property 'proxy' was removed");
  expect(result).toContain("Property 'timeout' was updated. From 50 to 20");
  expect(result).toContain("Property 'verbose' was added with value: true");
});

test('gendiff with json format', () => {
  const result = genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json');
  
  // Парсим обратно в объект для проверки структуры
  const parsed = JSON.parse(result);
  
  // Проверяем, что это массив
  expect(Array.isArray(parsed)).toBe(true);
  
  // Находим нужные элементы по ключам
  const followNode = parsed.find(item => item.key === 'follow');
  const proxyNode = parsed.find(item => item.key === 'proxy');
  const timeoutNode = parsed.find(item => item.key === 'timeout');
  const verboseNode = parsed.find(item => item.key === 'verbose');
  const hostNode = parsed.find(item => item.key === 'host');
  
  // Проверяем типы изменений
  expect(followNode.type).toBe('removed');
  expect(proxyNode.type).toBe('removed');
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