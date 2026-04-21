import fs from 'fs'
import path from 'path'
import parse from './parsers.js'
import buildTree from './buildTree.js'
import getFormatter from './formatters/index.js'

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1Raw = fs.readFileSync(filepath1, 'utf-8')
  const data2Raw = fs.readFileSync(filepath2, 'utf-8')

  const ext1 = path.extname(filepath1).toLowerCase().slice(1)
  const ext2 = path.extname(filepath2).toLowerCase().slice(1)

  const data1 = parse(data1Raw, ext1)
  const data2 = parse(data2Raw, ext2)

  const diffTree = buildTree(data1, data2)

  const formatter = getFormatter(formatName)
  return formatter(diffTree)
}
