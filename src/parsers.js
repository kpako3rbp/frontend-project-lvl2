import yaml from 'js-yaml';

const parseFile = (file, fileExt) => {
  switch (fileExt.toLowerCase()) {
    case 'json':
      return JSON.parse(file);

    case 'yml' || 'yaml':
      return yaml.load(file);

    default:
      throw new Error(`Unknown format: ${fileExt}`);
  }
};

export default parseFile;
