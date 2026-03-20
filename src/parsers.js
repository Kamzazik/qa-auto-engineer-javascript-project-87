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

  if (extension === '.json') {
    return JSON.parse(fileContent);
  }
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(fileContent);
  }
  throw new Error(`Unsupported file format: ${extension}`);
};

export default parseFile;
