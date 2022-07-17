import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff plain json has difference', () => {
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expected = readFile('result.txt');

  expect(actual).toEqual(expected);
});

test('gendiff plain yaml has difference', () => {
  const actual = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  const expected = readFile('result.txt');

  expect(actual).toEqual(expected);
});
