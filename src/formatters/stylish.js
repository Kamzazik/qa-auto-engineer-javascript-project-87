const INDENT_SIZE = 4

const getIndent = (type) => {
  if (type === 'unchanged') {
    return ' '.repeat(INDENT_SIZE)
  }
  return ' '.repeat(INDENT_SIZE - 2)
}

export default (diffTree) => {
  const lines = diffTree.map((node) => {
    const indent = getIndent(node.type)

    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${node.value}`
      case 'removed':
        return `${indent}- ${node.key}: ${node.value}`
      case 'changed':
        return `${indent}- ${node.key}: ${node.value1}\n${indent}+ ${node.key}: ${node.value2}`
      case 'unchanged':
        return `${indent}${node.key}: ${node.value}`
    }
  }).flat()

  return `{\n${lines.join('\n')}\n}`
}
