const stringifyValue = (value) => {
  if (typeof value === 'string') return value;
  return String(value);
};

const stylish = (diff) => {
  const lines = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return `+ ${node.key}: ${stringifyValue(node.value)}`;
      case 'removed':
        return `- ${node.key}: ${stringifyValue(node.value)}`;
      case 'unchanged':
        return `  ${node.key}: ${stringifyValue(node.value)}`;
      case 'changed':
        return [
          `- ${node.key}: ${stringifyValue(node.oldValue)}`,
          `+ ${node.key}: ${stringifyValue(node.newValue)}`,
        ];
      default:
        return [];
    }
  }).flat();

  return `{\n${lines.map(line => `  ${line}`).join('\n')}\n}`;
};

export default stylish;
