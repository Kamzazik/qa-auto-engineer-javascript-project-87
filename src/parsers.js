import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parsers = {
  '.json': (data) => JSON.parse(data),
  '.yaml': (data) => yaml.load(data),
  '.yml': (data) => yaml.load(data),
};

export default function parseFile(filepath) {
  const data = fs.readFileSync(filepath, 'utf-8');
  const ext = path.extname(filepath).toLowerCase();
  
  if (!parsers[ext]) {
    throw new Error(`Unsupported file extension: ${ext}`);
  }
  
  return parsers[ext](data);
}