const buildDiff = (data1, data2) => {
  const allKeys = [...new Set([...Object.keys(data1), ...Object.keys(data2)])].sort();

  return allKeys.map((key) => {
    const has1 = Object.hasOwn(data1, key);
    const has2 = Object.hasOwn(data2, key);

    if (!has1 && has2) {
      return { key, type: 'added', value: data2[key] };
    }
    if (has1 && !has2) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (data1[key] === data2[key]) {
      return { key, type: 'unchanged', value: data1[key] };
    }
    return {
      key,
      type: 'changed',
      oldValue: data1[key],
      newValue: data2[key],
    };
  });
};

export default buildDiff;
