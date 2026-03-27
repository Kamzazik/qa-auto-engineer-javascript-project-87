import parseFile from './parsers.js';

function buildDiff(data1, data2) {
  const keys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();
  
  return keys.map(key => {
    if (!Object.hasOwn(data1, key)) {
      return {
        key,
        type: 'added',
        value: data2[key],
      };
    }
    
    if (!Object.hasOwn(data2, key)) {
      return {
        key,
        type: 'removed',
        value: data1[key],
      };
    }
    
    if (data1[key] !== data2[key]) {
      return {
        key,
        type: 'changed',
        oldValue: data1[key],
        newValue: data2[key],
      };
    }
    
    return {
      key,
      type: 'unchanged',
      value: data1[key],
    };
  });
}

function formatStylish(diffTree) {
  const lines = diffTree.map(node => {
    switch (node.type) {
      case 'added':
        return `  + ${node.key}: ${node.value}`;
      case 'removed':
        return `  - ${node.key}: ${node.value}`;
      case 'changed':
        return `  - ${node.key}: ${node.oldValue}\n  + ${node.key}: ${node.newValue}`;
      case 'unchanged':
        return `    ${node.key}: ${node.value}`;
    }
  }).flat();
  
  return `{\n${lines.join('\n')}\n}`;
}

function formatPlain(diffTree, parentKey = '') {
  const lines = diffTree.map(node => {
    const property = parentKey ? `${parentKey}.${node.key}` : node.key;
    
    switch (node.type) {
      case 'added':
        return `Property '${property}' was added with value: ${formatValue(node.value)}`;
      case 'removed':
        return `Property '${property}' was removed`;
      case 'changed':
        return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
      case 'unchanged':
        return null;
    }
  }).filter(line => line !== null);
  
  return lines.join('\n');
}

function formatValue(value) {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
}

export default function genDiff(filepath1, filepath2, formatName = 'stylish') {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  
  const diffTree = buildDiff(data1, data2);
  
  if (formatName === 'plain') {
    return formatPlain(diffTree);
  }
  
  return formatStylish(diffTree);
}