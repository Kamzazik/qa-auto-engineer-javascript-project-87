const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return value
}

const getPropertyPath = (parentKey, currentKey) => {
  return parentKey ? `${parentKey}.${currentKey}` : currentKey
}

export default (diffTree, parentKey = '') => {
  const lines = diffTree.map((node) => {
    const property = getPropertyPath(parentKey, node.key)

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
