import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parseFile from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const currentPath = process.cwd();
  const firstFilePath = path.resolve(currentPath, filepath1);
  const secondFilePath = path.resolve(currentPath, filepath2);
  const firstFile = fs.readFileSync(firstFilePath, 'utf-8');
  const secondFile = fs.readFileSync(secondFilePath, 'utf-8');

  const firstObj = parseFile(firstFile, path.extname(firstFilePath));
  const secondObj = parseFile(secondFile, path.extname(secondFilePath));
  const entries = [...Object.entries(firstObj), ...Object.entries(secondObj)];

  let keys = [];
  let keysAndValues = [];
  entries.map((entry) => {
    keys = _.sortBy(_.uniq([...keys, entry[0]]));
    return keys;
  });

  keys.map((key) => {
    const firstValue = firstObj[key];
    const secondValue = secondObj[key];

    if (Object.hasOwn(firstObj, key) && !Object.hasOwn(secondObj, key)) {
      keysAndValues = [...keysAndValues, [`  - ${key}: ${firstValue}`]];
    } else if (!Object.hasOwn(firstObj, key) && Object.hasOwn(secondObj, key)) {
      keysAndValues = [...keysAndValues, [`  + ${key}: ${secondValue}`]];
    } else if (Object.hasOwn(firstObj, key) && Object.hasOwn(secondObj, key)) {
      if (firstValue !== secondValue) {
        keysAndValues = [...keysAndValues, [`  - ${key}: ${firstValue}`], [`  + ${key}: ${secondValue}`]];
      } else {
        keysAndValues = [...keysAndValues, [`    ${key}: ${firstValue}`]];
      }
    }

    return keysAndValues;
  });

  const stringifiedDiff = keysAndValues.join('\n');
  return `{\n${stringifiedDiff}\n}`;
};

export default genDiff;
/* gendiff /home/kpako3rbp/frontend-project-lvl2/__fixtures__/file1.json
/home/kpako3rbp/frontend-project-lvl2/__fixtures__/file2.json */
