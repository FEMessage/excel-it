const { logger } = require('../utils')
const { parseContent } = require('../utils')
const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')

module.exports = class FileActions {
  constructor(opts = {}) {
    this.opts = Object.assign({}, opts)

    this.templates = glob.sync(path.join(this.opts.templatesDir, '**'), {
      nodir: true,
      dot: true
    })
  }

  create() {
    this.templates.forEach(filepath => {
      const fileName = path.relative(this.opts.templatesDir, filepath)
      const target = path.join(this.opts.outDir, fileName)
      const content = parseContent(fs.readFileSync(filepath, 'utf8'), this.opts.componentName)

      fs.outputFileSync(target, content)

      logger.fileAction('magenta', 'Created', path.relative(process.cwd(), target))
    })
  }

  move(opts = {
    patterns: {}
  }) {
    Object.keys(opts.patterns).forEach(pattern => {
      const files = glob.sync(pattern, {
        cwd: this.opts.outDir,
        absolute: true
      })

      const from = files[0]
      const to = path.join(this.opts.outDir, opts.patterns[pattern])
      fs.moveSync(from, to, {
        overwrite: true
      })

      logger.fileMoveAction(from, to)
    })
  }
}
