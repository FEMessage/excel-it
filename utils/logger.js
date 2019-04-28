/**
 * Modified from @egoist/sao
 */

const kleur = require('kleur')
const path = require('path')

class Logger {
  log(...args) {
    console.log(...args)
  }

  success(...args) {
    this.log(kleur.green('success'), ...args)
  }

  error(...args) {
    this.log(kleur.red('error'), ...args)
  }

  warn(...args) {
    this.log(kleur.yellow('warning'), ...args)
  }

  done(...args) {
    this.log(kleur.green(process.platform === 'win32' ? '√' : '✔'), ...args)
  }

  tip(...args) {
    this.log(kleur.blue('tip'), ...args)
  }

  info(...args) {
    this.log(kleur.cyan('info'), ...args)
  }

  fileAction(color, type, fp) {
    this.info(
      kleur[color](type), kleur.green(path.relative(process.cwd(), fp))
    )
  }

  fileMoveAction(from, to) {
    this.info(
      kleur.blue('Moved'),
      kleur.green(path.relative(process.cwd(), from)),
      kleur.dim('->'),
      kleur.green(path.relative(process.cwd(), to))
    )
  }
}

module.exports = new Logger()
