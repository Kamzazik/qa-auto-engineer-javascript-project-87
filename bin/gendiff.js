#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'path to first configuration file')
  .argument('<filepath2>', 'path to second configuration file')
  .action((filepath1, filepath2, options) => {
    try {
      // Вызываем основную функцию и передаем ей пути к файлам
      const diff = genDiff(filepath1, filepath2);
      
      // Если функция вернула результат (не undefined), выводим его
      if (diff) {
        console.log(diff);
      }
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);