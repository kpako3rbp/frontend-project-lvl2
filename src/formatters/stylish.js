import _ from 'lodash';

const stringify = (value, currentDepth, indent) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const currentIndent = (currentDepth === 1)
      ? indent.repeat(depth + currentDepth)
      : indent.repeat(depth + 1);
    const bracketIndent = (currentDepth === 1)
      ? indent.repeat(depth - currentDepth)
      : indent.repeat(depth - 1);

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 2)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, currentDepth + 2);
};

const stylish = (tree, indent = '  ') => {
  const iter = (node, depth) => {
    const currentIndent = indent.repeat(depth);

    const result = node.map((obj) => {
      const { key, value, status } = obj;
      let line;

      switch (status) {
        case 'nested':
          line = `${currentIndent}  ${key}: {\n${iter(value, depth + 2)}\n${currentIndent}  }`;
          break;
        case 'removed':
          line = `${currentIndent}- ${key}: ${stringify(obj.value, depth, indent)}`;
          break;
        case 'added':
          line = `${currentIndent}+ ${key}: ${stringify(obj.value, depth, indent)}`;
          break;
        case 'changed':
          line = `${currentIndent}- ${key}: ${stringify(obj.oldValue, depth, indent)}\n${currentIndent}+ ${key}: ${stringify(obj.newValue, depth, indent)}`;
          break;
        case 'unchanged':
          line = `${currentIndent}  ${key}: ${stringify(obj.value, depth, indent)}`;
          break;
        default:
          console.error(`Status "${status}" is unknown`);
      }

      return line;
    });

    return result.join('\n');
  };

  return `{\n${iter(tree, 1)}\n}`;
};

export default stylish;
