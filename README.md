# vue-sfc-cli

[![NPM Download](https://img.shields.io/npm/dm/vue-sfc-cli.svg)](https://www.npmjs.com/package/vue-sfc-cli)
[![NPM Version](https://img.shields.io/npm/v/vue-sfc-cli.svg)](https://www.npmjs.com/package/vue-sfc-cli)
[![NPM License](https://img.shields.io/npm/l/vue-sfc-cli.svg)](https://github.com/FEMessage/vue-sfc-cli/blob/master/LICENSE)

vue-sfc-cli exists to provide the minimal setup necessary to compile a Vue Single File Component (SFC) into a form ready to share via npm.

https://juejin.im/post/5b231f6ff265da595f0d2540

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

# dev
yarn story

# rollup-plugin-vue requires node-sass, so installation may take 4~5 minutes...
# so you may have a cup of tee

# run a test
npm run test

# develop your sfc doc
npm run styleguide

# build your sfc doc
npm run doc

# build your sfc
npm run build

# Ready to publish!
```

## prettier and precommit hook

the generated scaffold use husky as tool for precommit hook, but it require you has `git init` first, that's why `git init` running before
`yarn`


