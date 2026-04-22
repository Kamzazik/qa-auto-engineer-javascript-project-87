import yaml from 'js-yaml'

const parsers = {
  json: data => JSON.parse(data),
  yaml: data => yaml.load(data),
  yml: data => yaml.load(data),
}

export default (data, format) => {
  if (!parsers[format]) {
    throw new Error(`Unsupported format: ${format}`)
  }
  return parsers[format](data)
}
