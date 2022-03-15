const { getInput } = require('@actions/core');

const kebabToCamelCase = (string) => string.replace(/-[a-z]/g, ([, char]) => char.toUpperCase());

const getInputs = () => [
  'service-url',
  'token',
  'project-id',
  'summary',
  'description',
  'custom-fields',
].reduce((inputs, key) => {
  inputs[kebabToCamelCase(key)] = getInput(key);
  return inputs;
}, {});

module.exports = getInputs;
