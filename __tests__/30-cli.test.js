import { describe, test, expect } from 'vitest'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

describe('CLI', () => {
  const execApp = (filepath1, filepath2, format = null) => {
    const formatFlag = format ? `--format ${format}` : ''
    return execSync(
      `node bin/gendiff.js ${formatFlag} ${filepath1} ${filepath2}`,
      { encoding: 'utf-8' }
    )
  }

  test('gendiff cli with plain format', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')
    
    const result = execApp(filepath1, filepath2, 'plain')
    
    expect(result).toContain("Property 'follow' was removed")
    expect(result).toContain("Property 'proxy' was removed")
    expect(result).toContain("Property 'timeout' was updated. From 50 to 20")
    expect(result).toContain("Property 'verbose' was added with value: true")
  })
  
  test('gendiff cli default stylish format', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')
    
    const result = execApp(filepath1, filepath2)
    
    expect(result).toContain('- follow: false')
    expect(result).toContain('+ timeout: 20')
  })

  test('gendiff cli with yaml files', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.yml')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.yml')
    
    const result = execApp(filepath1, filepath2)
    
    expect(result).toContain('- follow: false')
    expect(result).toContain('+ timeout: 20')
  })
})