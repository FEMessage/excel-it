import {storiesOf} from '@storybook/vue'

storiesOf('{{componentName}}', module).add('basic usage', () => ({
  template: '<{{componentName}}></{{componentName}}>'
}))
