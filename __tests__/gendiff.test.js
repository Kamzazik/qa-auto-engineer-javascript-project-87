import { describe, test, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/diff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fixturesDir = path.join(__dirname, '..', '__fixtures__')

const testCases = [
  { file: 'file1.json', ext: 'json' },
  { file: 'file1.yml', ext: 'yml' },
]

describe('gendiff', () => {
  test.each(testCases)('compare $ext files with stylish format', ({ file }) => {
    const filepath1 = path.join(fixturesDir, file)
    const filepath2 = path.join(fixturesDir, 'file2.json')
    const result = genDiff(filepath1, filepath2, 'stylish')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-stylish.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test.each(testCases)('compare $ext files with plain format', ({ file }) => {
    const filepath1 = path.join(fixturesDir, file)
    const filepath2 = path.join(fixturesDir, 'file2.json')
    const result = genDiff(filepath1, filepath2, 'plain')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-plain.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test.each(testCases)('compare $ext files with json format', ({ file }) => {
    const filepath1 = path.join(fixturesDir, file)
    const filepath2 = path.join(fixturesDir, 'file2.json')
    const result = genDiff(filepath1, filepath2, 'json')
    expect(() => JSON.parse(result)).not.toThrow()
    const parsed = JSON.parse(result)
    expect(Array.isArray(parsed)).toBe(true)
  })
})
