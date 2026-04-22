function formatValue(value) {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return value
}

export default function formatPlain(diffTree, parentKey = '') {
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
