import {configure} from '@storybook/vue'

import Vue from 'vue'

import {Table, TableColumn, Upload, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Register custom components.
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Button)

// Import your component
import Component from '../src/index'

// Register your component
Vue.component('export-excel', Component)

function loadStories() {
  // You can require as many stories as you need.
  require('../stories')
}

configure(loadStories, module)
