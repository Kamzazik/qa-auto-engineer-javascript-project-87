import { describe, test, expect } from 'vitest'
import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

describe('CLI', () => {
  const execApp = (filepath1, filepath2, format = null) => {
    const formatFlag = format ? `--format ${format}` : ''
    return execSync(
      `node bin/gendiff.js ${formatFlag} ${filepath1} ${filepath2}`,
      { encoding: 'utf-8' },
    ).trim()
  }

  const expectedStylish = readFileSync(
    path.join(__dirname, '__fixtures__', 'expected-stylish.txt'),
    'utf-8',
  ).trim()

  const expectedPlain = readFileSync(
    path.join(__dirname, '__fixtures__', 'expected-plain.txt'),
    'utf-8',
  ).trim()

  test('gendiff cli with plain format', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')

    const result = execApp(filepath1, filepath2, 'plain')

    expect(result).toEqual(expectedPlain)
  })

  test('gendiff cli default stylish format', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')

    const result = execApp(filepath1, filepath2)

    expect(result).toEqual(expectedStylish)
  })

  test('gendiff cli with yaml files', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.yml')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.yml')

    const result = execApp(filepath1, filepath2)

    expect(result).toEqual(expectedStylish)
  })

  test('gendiff cli with json format', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')

    const result = execApp(filepath1, filepath2, 'json')

    expect(() => JSON.parse(result)).not.toThrow()
    const parsed = JSON.parse(result)
    expect(Array.isArray(parsed)).toBe(true)
  })
})
