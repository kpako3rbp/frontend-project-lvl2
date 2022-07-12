import yaml from 'js-yaml';

const parseFile = (file, fileExt) => {
  let parsedFile;

  switch (fileExt) {
    case '.json':
      parsedFile = JSON.parse(file);
      break;

    case '.yml' || '.yaml':
      parsedFile = yaml.load(file);
      break;

    default:
      console.error(`Unknown format: ${fileExt}`);
  }
  return parsedFile;
};

export default parseFile;
