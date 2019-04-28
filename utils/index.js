const logger = require('./logger')

exports.logger = logger

exports.pascalify = pascalify

exports.kebabcasify = kebabcasify

exports.parseContent = (content, componentName) => {
  return content
    .replace(createRegExp('componentNamePascal'), pascalify(componentName))
    .replace(createRegExp('componentName'), kebabcasify(componentName))
    .replace(createRegExp('cliVersion'), require('../package.json').version)
    .replace(createRegExp('licenseYear'), new Date().getFullYear())
}

function kebabcasify(content) {
  return content
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

function pascalify(content) {
  const camelized = content.replace(/-([a-z])/g, c => c[1].toUpperCase())
  return camelized.charAt(0).toUpperCase() + camelized.slice(1)
}

function createRegExp(str) {
  return new RegExp(`{{\\s?${str}\\s?}}`, 'g')
}
