export default function formatStylish(diffTree) {
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