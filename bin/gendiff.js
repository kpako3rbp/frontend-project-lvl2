#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';
// import stylish from '../srs/stylish.js';

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('1.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => console
    .log(genDiff(filepath1, filepath2, program.opts().format)));

program.parse();
