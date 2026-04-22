import fs from 'fs'
import path from 'path'
import parse from './parsers.js'
import buildTree from './buildTree.js'
import format from './formatters/index.js'

const readData = (filepath) => {
  const rawData = fs.readFileSync(filepath, 'utf-8')
  const ext = path.extname(filepath).toLowerCase().slice(1)
  return parse(rawData, ext)
}

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1 = readData(filepath1)
  const data2 = readData(filepath2)

  const diffTree = buildTree(data1, data2)

  return format(diffTree, formatName)
}
