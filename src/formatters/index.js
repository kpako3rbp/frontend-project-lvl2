import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const doFormat = (formatterName, tree) => {
  let result;

  switch (formatterName) {
    case 'stylish':
      result = stylish(tree, '  ');
      break;
    case 'plain':
      result = plain(tree, '  ');
      break;
    case 'json':
      result = json(tree, '  ');
      break;
    default:
      console.error(`Unknown formatter: "${formatterName}"`);
  }

  return result;
};

export default doFormat;
