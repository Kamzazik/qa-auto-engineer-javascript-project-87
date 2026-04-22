import { describe, test, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fixturesDir = path.join(__dirname, '..', '__fixtures__')

describe('gendiff', () => {
  // JSON tests
  test('json files with stylish format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.json')
    const filepath2 = path.join(fixturesDir, 'file2.json')
    const result = genDiff(filepath1, filepath2, 'stylish')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-stylish.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test('json files with plain format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.json')
    const filepath2 = path.join(fixturesDir, 'file2.json')
    const result = genDiff(filepath1, filepath2, 'plain')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-plain.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test('json files with json format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.json')
    const filepath2 = path.join(fixturesDir, 'file2.json')
    const result = genDiff(filepath1, filepath2, 'json')
    expect(() => JSON.parse(result)).not.toThrow()
    const parsed = JSON.parse(result)
    expect(Array.isArray(parsed)).toBe(true)
  })

  // YML tests
  test('yml files with stylish format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.yml')
    const filepath2 = path.join(fixturesDir, 'file2.yml')
    const result = genDiff(filepath1, filepath2, 'stylish')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-stylish.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test('yml files with plain format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.yml')
    const filepath2 = path.join(fixturesDir, 'file2.yml')
    const result = genDiff(filepath1, filepath2, 'plain')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-plain.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test('yml files with json format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.yml')
    const filepath2 = path.join(fixturesDir, 'file2.yml')
    const result = genDiff(filepath1, filepath2, 'json')
    expect(() => JSON.parse(result)).not.toThrow()
    const parsed = JSON.parse(result)
    expect(Array.isArray(parsed)).toBe(true)
  })

  // YAML tests
  test('yaml files with stylish format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.yaml')
    const filepath2 = path.join(fixturesDir, 'file2.yaml')
    const result = genDiff(filepath1, filepath2, 'stylish')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-stylish.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test('yaml files with plain format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.yaml')
    const filepath2 = path.join(fixturesDir, 'file2.yaml')
    const result = genDiff(filepath1, filepath2, 'plain')
    const expected = fs.readFileSync(path.join(fixturesDir, 'expected-plain.txt'), 'utf-8')
    expect(result).toEqual(expected.trim())
  })

  test('yaml files with json format', () => {
    const filepath1 = path.join(fixturesDir, 'file1.yaml')
    const filepath2 = path.join(fixturesDir, 'file2.yaml')
    const result = genDiff(filepath1, filepath2, 'json')
    expect(() => JSON.parse(result)).not.toThrow()
    const parsed = JSON.parse(result)
    expect(Array.isArray(parsed)).toBe(true)
  })
})
