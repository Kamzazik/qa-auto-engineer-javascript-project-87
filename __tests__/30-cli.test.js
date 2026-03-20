import { execSync } from 'child_process';
import path from 'path';

describe('CLI', () => {
  const getFixturePath = (filename) => path.join(process.cwd(), '__fixtures__', filename);
  
  test('gendiff cli с JSON', () => {
    const result = execSync(
      `node bin/gendiff.js ${getFixturePath('file1.json')} ${getFixturePath('file2.json')}`,
      { encoding: 'utf-8' }
    );
    expect(result).toContain('follow: false');
  });
  
  test('gendiff cli с опцией --format', () => {
    const result = execSync(
      `node bin/gendiff.js -f plain ${getFixturePath('file1.json')} ${getFixturePath('file2.json')}`,
      { encoding: 'utf-8' }
    );
    expect(result).toContain('Property \'follow\' was removed');
  });
});