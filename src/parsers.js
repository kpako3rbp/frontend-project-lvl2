import yaml from 'js-yaml';

const parseFile = (file, fileExt) => {
  switch (fileExt) {
    case '.json':
      return JSON.parse(file);

    case '.yml' || '.yaml':
      return yaml.load(file);

    default:
      console.error(`Unknown format: ${fileExt}`);
  }  
};

export default parseFile;
