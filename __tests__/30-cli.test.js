import { describe, test, expect } from '@jest/globals'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

describe('CLI', () => {
  test('gendiff cli с опцией --format plain', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')
    
    const result = execSync(
      `node bin/gendiff.js --format plain ${filepath1} ${filepath2}`,
      { encoding: 'utf-8' }
    )
    
    expect(result).toContain("Property 'follow' was removed")
    expect(result).toContain("Property 'proxy' was removed")
    expect(result).toContain("Property 'timeout' was updated. From 50 to 20")
    expect(result).toContain("Property 'verbose' was added with value: true")
  })
  
  test('gendiff cli без опции (default stylish)', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')
    
    const result = execSync(
      `node bin/gendiff.js ${filepath1} ${filepath2}`,
      { encoding: 'utf-8' }
    )
    
    expect(result).toContain('- follow: false')
    expect(result).toContain('+ timeout: 20')
  })
})