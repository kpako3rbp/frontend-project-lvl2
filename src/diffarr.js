import _ from 'lodash';

const getDiffArr = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const diffArr = keys.map((key) => {
    if (!_.has(obj1, key)) return { key, value: obj2[key], status: 'added' };
    if (!_.has(obj2, key)) return { key, value: obj1[key], status: 'removed' };
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) return { key, value: getDiffArr(obj1[key], obj2[key]), status: 'nested' };
    if (obj1[key] !== obj2[key]) {
      return {
        key, oldValue: obj1[key], newValue: obj2[key], status: 'changed',
      };
    }
    return { key, value: obj1[key], status: 'unchanged' };
  });

  return diffArr;
};

export default getDiffArr;
