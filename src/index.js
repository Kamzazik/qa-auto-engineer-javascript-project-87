import { Command } from 'commander';
import genDiff from './diff.js';

export default function run() {
  const program = new Command();

  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format', 'stylish')
    .argument('<filepath1>', 'path to first file')
    .argument('<filepath2>', 'path to second file')
    .action((filepath1, filepath2, options) => {
      const result = genDiff(filepath1, filepath2, options.format);
      console.log(result);
    });

  program.parse();
}