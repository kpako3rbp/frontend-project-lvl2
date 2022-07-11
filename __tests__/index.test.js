import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff plain has difference', () => {
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  const expected = readFile('plain.txt');

  expect(actual).toEqual(expected);
});

test('gendiff plain has no difference', () => {
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file3.json'));
  const expected = readFile('plain2.txt');

  expect(actual).toEqual(expected);
});
