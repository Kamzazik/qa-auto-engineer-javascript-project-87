import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
}

export default function format(diffTree, formatName = 'stylish') {
  const formatType = formatName
  if (!formatters[formatType]) {
    throw new Error(`Unsupported format: ${formatType}`)
  }
  return formatters[formatType](diffTree)
}
