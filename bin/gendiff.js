#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format') // Добавляем опцию для формата
  .argument('<filepath1>', 'path to first configuration file') // Первый обязательный аргумент
  .argument('<filepath2>', 'path to second configuration file') // Второй обязательный аргумент
  .action((filepath1, filepath2, options) => {
    // Здесь будет логика обработки файлов
    console.log('filepath1:', filepath1);
    console.log('filepath2:', filepath2);
    console.log('format:', options.format); // Выводим выбранный формат
  });

program.parse(process.argv);