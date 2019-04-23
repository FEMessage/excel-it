# vue-sfc-cli

[![Build Status](https://travis-ci.com/FEMessage/vue-sfc-cli.svg?branch=master)](https://travis-ci.com/FEMessage/vue-sfc-cli)
[![NPM Download](https://img.shields.io/npm/dm/vue-sfc-cli.svg)](https://www.npmjs.com/package/vue-sfc-cli)
[![NPM Version](https://img.shields.io/npm/v/vue-sfc-cli.svg)](https://www.npmjs.com/package/vue-sfc-cli)
[![NPM License](https://img.shields.io/npm/l/vue-sfc-cli.svg)](https://github.com/FEMessage/vue-sfc-cli/blob/master/LICENSE)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

vue-sfc-cli exists to provide the minimal setup necessary to compile a Vue Single File Component (SFC) into a form ready to share via npm.

[for detail look at this article](https://github.com/levy9527/blog/issues/2)

## requirement
Node.js 8.x

## Usage
```bash
npx vue-sfc-cli init

# 接下来会有一串的提示，请务必填写
# 推荐kebab-case风格，小写字母，多个单词用-（dash）分隔，如my-component

# 填充完提示后
cd my-component

# to use precommit hook
git init

# install dependencies
yarn

# develop your sfc 
yarn dev

# build your sfc
yarn build

# Ready to publish!
```

## docs

You can write *.md files host in `docs/` as code example.

When you run `yarn dev` these markdown files will become live demos.

Every time you add a new *.md file, you should re-run `yarn dev` to load new *.md file.

## dotenv

You might wanna use environment variable while development. 

According to best practice, encourage using `dotenv` to config environment variable.

```sh
yarn add dotenv --dev
```

```js
// styleguide.config.js
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
  webpackConfig: {
    // ...
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed)
      })
    ]
  }
}
```

## prettier and precommit hook

the generated scaffold use husky as tool for precommit hook, but it require you has `git init` first, that's why `git init` running before
`yarn`


