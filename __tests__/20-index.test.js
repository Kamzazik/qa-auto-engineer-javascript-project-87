import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { describe, test, expect } from 'vitest'
import genDiff from '../src/diff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

describe('genDiff', () => {
  test('should generate correct diff for flat json files', () => {
    const filepath1 = path.join(__dirname, '__fixtures__', 'file1.json')
    const filepath2 = path.join(__dirname, '__fixtures__', 'file2.json')

    const result = genDiff(filepath1, filepath2)

    const expected = readFileSync(
      path.join(__dirname, '__fixtures__', 'expected.txt'),
      'utf-8'
    )

    expect(result).toEqual(expected)
  })
})