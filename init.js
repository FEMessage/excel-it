#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const readlineSync = require('readline-sync')

// Helpers for creating kebab-case/PascalCase versions of string
const pascalify = str => {
  const camelized = str.replace(/-([a-z])/g, c => c[1].toUpperCase())
  return camelized.charAt(0).toUpperCase() + camelized.slice(1)
}
const kebabcase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

// Helper to replace vars in files
const replaceVars = function replaceVars(str, vars) {
  let newstr = str
  Object.keys(vars).forEach(key => {
    const rx = new RegExp('{{\\s?' + key + '\\s?}}', 'g')
    newstr = newstr.replace(rx, vars[key])
  })
  return newstr
}

// Helper to ensure directory exists before writing file to it
const ensureDirectoryExists = filePath => {
  const dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExists(dirname)
  fs.mkdirSync(dirname)
}

// Prompt user for input to populate template files
const npmName = readlineSync.question(
  'What is the npm name of your component? '
)
// const componentName = readlineSync.question('What is the kebab-case tag name for your component? ('+kebabcase(npmName)+') ', {
//     defaultInput: kebabcase(npmName),
// })

const componentName = kebabcase(npmName)

const savePath = path.join(process.cwd(), componentName)

// Stop prompting for input, start processing
const componentNamePascal = pascalify(componentName)
const vars = {
  npmName,
  componentName,
  componentNamePascal,
  licenseYear: new Date().getFullYear(),
  cliVersion: require('./package.json').version
}

const testFileName = 'index.test.js'

// source files
const newFiles = {
  testjs: fs.readFileSync(
    path.join(__dirname, 'templates', 'test', testFileName)
  )
}

newFiles.package = replaceVars(
  fs.readFileSync(path.join(__dirname, 'templates', 'package-json')).toString(),
  vars
)
newFiles.rollupConfig = replaceVars(
  fs
    .readFileSync(
      path.join(__dirname, 'templates', 'build', 'rollup.config.js')
    )
    .toString(),
  vars
)
newFiles.indexjs = replaceVars(
  fs
    .readFileSync(path.join(__dirname, 'templates', 'src', 'index.js'))
    .toString(),
  vars
)
newFiles.component = replaceVars(
  fs
    .readFileSync(path.join(__dirname, 'templates', 'src', 'component.vue'))
    .toString(),
  vars
)
newFiles.license = replaceVars(
  fs.readFileSync(path.join(__dirname, 'templates', 'LICENSE')).toString(),
  vars
)
newFiles.readme = replaceVars(
  fs.readFileSync(path.join(__dirname, 'templates', 'README.md')).toString(),
  vars
)
newFiles.styleguide = replaceVars(
  fs
    .readFileSync(path.join(__dirname, 'templates', 'styleguide.config.js'))
    .toString(),
  vars
)
newFiles.docsBasicDemo = replaceVars(
  fs
    .readFileSync(path.join(__dirname, 'templates', 'docs', 'basic.md'))
    .toString(),
  vars
)

// output files
const paths = {
  package: path.join(savePath, 'package.json'),
  rollupConfig: path.join(savePath, 'build', 'rollup.config.js'),
  indexjs: path.join(savePath, 'src', 'index.js'),
  component: path.join(savePath, 'src', componentName + '.vue'),
  testjs: path.join(savePath, 'test', testFileName),
  license: path.join(savePath, 'LICENSE'),
  readme: path.join(savePath, 'README.md'),
  styleguide: path.join(savePath, 'styleguide.config.js'),
  docsBasicDemo: path.join(savePath, 'docs', 'basic.md')
}

Object.keys(paths).forEach(key => {
  ensureDirectoryExists(paths[key])
  fs.writeFileSync(paths[key], newFiles[key])
})

const copyFiles = [
  '.editorconfig',
  '.prettierignore',
  '.prettierrc',
  '.babelrc',
  '.travis.yml',
  '.grenrc.js'
]

copyFiles.forEach(file => {
  let src = path.join(__dirname, 'templates', file)
  let dest = path.join(savePath, file)
  fs.writeFileSync(dest, fs.readFileSync(src))
})

const ignoreFiles = ['gitignore']

ignoreFiles.forEach(file => {
  let src = path.join(__dirname, 'templates', file)
  let dest = path.join(savePath, '.' + file)
  fs.writeFileSync(dest, fs.readFileSync(src))
})

// Display completion messages
console.log(
  '\n' +
    'Init is complete, your files have been generated and saved into ' +
    'the directory you specified above.' +
    '\n' +
    'Within that directory, use src/' +
    componentName +
    '.vue as a ' +
    'starting point for your SFC.' +
    '\n' +
    "When you're ready, run `npm run build` to generate the redistributable versions." +
    '\n\n'
)
