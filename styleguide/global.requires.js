import Vue from 'vue'
import {Button, Table, TableColumn} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {importExcel, exportExcel, parseExcel} from '../src/index'

Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

window.importExcel = importExcel
window.exportExcel = exportExcel
window.parseExcel = parseExcel
