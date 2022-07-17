import fs from 'fs';
import path from 'path';
import parseFile from './parsers.js';
import getDiffArr from './helpers.js';
import stylish from './stylish.js';

const genDiff = (filepath1, filepath2, formatter = 'stylish') => {
  const currentPath = process.cwd();
  const firstFilePath = path.resolve(currentPath, filepath1);
  const secondFilePath = path.resolve(currentPath, filepath2);
  const firstFile = fs.readFileSync(firstFilePath, 'utf-8');
  const secondFile = fs.readFileSync(secondFilePath, 'utf-8');

  const firstObj = parseFile(firstFile, path.extname(firstFilePath));
  const secondObj = parseFile(secondFile, path.extname(secondFilePath));

  const tree = getDiffArr(firstObj, secondObj);

  let result;

  switch (formatter) {
    case 'stylish':
      result = stylish(tree, '  ');
      break;
    default:
      console.error(`Unknown formatter: "${formatter}"`);
  }
  return result;
};

export default genDiff;
