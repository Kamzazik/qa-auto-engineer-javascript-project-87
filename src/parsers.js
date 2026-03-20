
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFileExtension = (filepath) => path.extname(filepath).toLowerCase();

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

const parseFile = (filepath) => {
  const fileContent = readFile(filepath);
  const extension = getFileExtension(filepath);

  switch (extension) {
    case '.json':
      return JSON.parse(fileContent);
    case '.yml':
    case '.yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

export default parseFile;