const stringifyValue = (value) => {
  if (typeof value === 'string') return `'${value}'`;
  if (value === null || typeof value === 'object') return '[complex value]';
  return String(value);
};

const plain = (diff) => {
  const lines = diff
    .filter(node => node.type !== 'unchanged')
    .map((node) => {
      switch (node.type) {
        case 'added':
          return `Property '${node.key}' was added with value: ${stringifyValue(node.value)}`;
        case 'removed':
          return `Property '${node.key}' was removed`;
        case 'changed':
          return `Property '${node.key}' was updated. From ${stringifyValue(node.oldValue)} to ${stringifyValue(node.newValue)}`;
        default:
          return null;
      }
    })
    .filter(line => line !== null);

  return lines.join('\n');
};

export default plain;
