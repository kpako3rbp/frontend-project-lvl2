import _ from 'lodash';

const getDiffArr = (firstObj, secondObj) => {
  const entries = [...Object.entries(firstObj), ...Object.entries(secondObj)];
  const keys = entries.map(([key]) => key);
  const sortedKeys = _.sortBy(_.uniq(keys));

  const diffArr = sortedKeys.map((key) => {
    if (Object.hasOwn(firstObj, key) && Object.hasOwn(secondObj, key)) {
      if (_.isObject(firstObj[key]) && _.isObject(secondObj[key])) {
        return { key, value: getDiffArr(firstObj[key], secondObj[key]), status: 'nested' };
      } if (!_.isObject(firstObj[key]) || !_.isObject(secondObj[key])) {
        if (firstObj[key] !== secondObj[key]) {
          return {
            key, oldValue: firstObj[key], newValue: secondObj[key], status: 'changed',
          };
        }
        return { key, value: firstObj[key], status: 'unchanged' };
      }
    } else if (Object.hasOwn(firstObj, key) && !Object.hasOwn(secondObj, key)) {
      return { key, value: firstObj[key], status: 'removed' };
    }
    return { key, value: secondObj[key], status: 'added' };
  });

  return diffArr;
};

export default getDiffArr;
