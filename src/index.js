import fs from 'fs';
import path from 'path';
import parseFile from './parsers.js';
import getDiffArr from './diffarr.js';
import doFormat from './formatters/index.js';

const getExtName = (filePath) => path.extname(filePath).slice(1);

const getFileData = (filePath) => {
  const currentPath = process.cwd();
  const absolutePath = path.resolve(currentPath, filePath);
  const fileData = fs.readFileSync(absolutePath, 'utf-8');
  const extName = getExtName(filePath);
  return parseFile(fileData, extName);
};

const genDiff = (filepath1, filepath2, formatter = 'stylish') => {
  const firstObj = getFileData(filepath1);
  const secondObj = getFileData(filepath2);
  const diffTree = getDiffArr(firstObj, secondObj);

  return doFormat(formatter, diffTree);
};

export default genDiff;
