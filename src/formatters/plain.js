import _ from 'lodash';

const outputValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const iter = (node, path) => {
    const result = node.flatMap((obj) => {
      const { key, value, status } = obj;
      const valuePath = [...path, key].join('.');
      let line;

      switch (status) {
        case 'nested':
          return iter(value, [valuePath]);
        case 'added':
          line = `Property '${valuePath}' was added with value: ${outputValue(value)}`;
          break;
        case 'removed':
          line = `Property '${valuePath}' was removed`;
          break;
        case 'changed':
          line = `Property '${valuePath}' was updated. From ${outputValue(obj.oldValue)} to ${outputValue(obj.newValue)}`;
          break;
        case 'unchanged':
          line = [];
          break;
        default:
          console.error(`Status "${status}" is unknown`);
      }
      return line;
    });

    return result.join('\n');
  };

  return iter(tree, []);
};

export default plain;
