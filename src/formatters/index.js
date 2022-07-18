import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const doFormat = (formatterName, tree) => {
  switch (formatterName) {
    case 'stylish':
      return stylish(tree, '  ');
    case 'plain':
      return plain(tree, '  ');
    case 'json':
      return json(tree, '  ');
    default:
      return `${console.error(`Unknown formatter: "${formatterName}"`)}`;
  }
};

export default doFormat;
