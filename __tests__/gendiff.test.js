import { describe, test, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fixturesDir = path.join(__dirname, '..', '__fixtures__')

const expectedStylish = fs.readFileSync(path.join(fixturesDir, 'expected-stylish.txt'), 'utf-8').trim()
const expectedPlain = fs.readFileSync(path.join(fixturesDir, 'expected-plain.txt'), 'utf-8').trim()

const testCases = [
  { name: 'json', file1: 'file1.json', file2: 'file2.json' },
  { name: 'yml', file1: 'file1.yml', file2: 'file2.yml' },
  { name: 'yaml', file1: 'file1.yaml', file2: 'file2.yaml' },
]

describe('gendiff', () => {
  testCases.forEach(({ name, file1, file2 }) => {
    const filepath1 = path.join(fixturesDir, file1)
    const filepath2 = path.join(fixturesDir, file2)

    describe(`Входной формат: ${name}`, () => {
      test('вывод по умолчанию (без опций)', () => {
        const result = genDiff(filepath1, filepath2)
        expect(result).toEqual(expectedStylish)
      })

      test('формат stylish', () => {
        const result = genDiff(filepath1, filepath2, 'stylish')
        expect(result).toEqual(expectedStylish)
      })

      test('формат plain', () => {
        const result = genDiff(filepath1, filepath2, 'plain')
        expect(result).toEqual(expectedPlain)
      })

      test('формат json', () => {
        const result = genDiff(filepath1, filepath2, 'json')
        const expected = fs.readFileSync(path.join(fixturesDir, 'expected-json.txt'), 'utf-8')
        expect(result.trim()).toEqual(expected.trim())
      })
    })
  })
})