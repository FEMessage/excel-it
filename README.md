# vue-sfc-cli

vue-sfc-cli exists to provide the minimal setup necessary to compile a Vue Single File Component (SFC) into a form ready to share via npm.

## TL;DR
```bash
npx vue-sfc-cli init

# fill in prompts
cd my-component
vue serve ./src/my-component.vue # Or other live-refresh coding

# to use precommit hook
git init

# install dependencies
yarn

# rollup-plugin-vue requires node-sass, so installation may take 4~5 minutes...
# so you may have a cup of tee

# Do dev stuff...
npm run build

# Ready to publish!
```

## prettier and precommit hook

the generated scaffold use husky as tool for precommit hook, but it require you has `git init` first, that's why `git init` running before
`yarn`


