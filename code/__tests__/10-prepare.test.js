import path from 'path'
import { fileURLToPath } from 'url'
import { describe, test, expect } from 'vitest'
import parseFile from '../src/parsers.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

describe('Парсеры', () => {
  const getFixturePath = filename => path.join(__dirname, '__fixtures__', filename)

  test('парсинг JSON файла', () => {
    const data = parseFile(getFixturePath('file1.json'))
    expect(data).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    })
  })

  test('парсинг YAML файла', () => {
    const data = parseFile(getFixturePath('file1.yml'))
    expect(data).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    })
  })
})
