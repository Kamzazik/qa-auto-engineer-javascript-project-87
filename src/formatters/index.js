import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
}

export default function getFormatter(formatName) {
  if (!formatters[formatName]) {
    throw new Error(`Unsupported format: ${formatName}`)
  }
  return formatters[formatName]
}
