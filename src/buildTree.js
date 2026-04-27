export default (oldData, newData) => {
  const keys = [...new Set([...Object.keys(oldData), ...Object.keys(newData)])].sort()

  return keys.map((key) => {
    if (!Object.hasOwn(oldData, key)) {
      return {
        key,
        type: 'added',
        value: newData[key],
      }
    }

    if (!Object.hasOwn(newData, key)) {
      return {
        key,
        type: 'removed',
        value: oldData[key],
      }
    }

    if (oldData[key] !== newData[key]) {
      return {
        key,
        type: 'changed',
        oldValue: oldData[key],
        newValue: newData[key],
      }
    }

    return {
      key,
      type: 'unchanged',
      value: oldData[key],
    }
  })
}