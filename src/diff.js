import fs from 'fs'
import path from 'path'
import parse from './parsers.js'
import buildTree from './buildTree.js'

function formatStylish(diffTree) {
  const lines = diffTree.map((node) => {
    switch (node.type) {
      case 'added':
        return `  + ${node.key}: ${node.value}`
      case 'removed':
        return `  - ${node.key}: ${node.value}`
      case 'changed':
        return `  - ${node.key}: ${node.oldValue}\n  + ${node.key}: ${node.newValue}`
      case 'unchanged':
        return `    ${node.key}: ${node.value}`
    }
  }).flat()

  return `{\n${lines.join('\n')}\n}`
}

function formatPlain(diffTree, parentKey = '') {
  const lines = diffTree.map((node) => {
    const property = parentKey ? `${parentKey}.${node.key}` : node.key

    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.value)}`
      case 'removed':
        return `Property '${property}' was removed`
      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`
      case 'unchanged':
        return null
    }
  }).filter(line => line !== null)

  return lines.join('\n')
}

function formatValue(value) {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return value
}

function formatJson(diffTree) {
  return JSON.stringify(diffTree, null, 2)
}

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1Raw = fs.readFileSync(filepath1, 'utf-8')
  const data2Raw = fs.readFileSync(filepath2, 'utf-8')
  
  const ext1 = path.extname(filepath1).toLowerCase().slice(1)
  const ext2 = path.extname(filepath2).toLowerCase().slice(1)
  
  const data1 = parse(data1Raw, ext1)
  const data2 = parse(data2Raw, ext2)

  const diffTree = buildTree(data1, data2)

  if (formatName === 'plain') {
    return formatPlain(diffTree)
  }

  if (formatName === 'json') {
    return formatJson(diffTree)
  }

  return formatStylish(diffTree)
}