导出excel，该例子有1w条数据来自接口。

```vue
<template>
  <div>
    <el-button
      type="success"
      @click="handleExportExcel"
      style="padding: 8px 20px; cursor: pointer">
      {{loading ? '加载中...' : '导出excel'}}
    </el-button>
  </div>
</template>

<script>
/*
  由于vue-styleguidist不支持import，所以该例子使用require代替。
  在vue中请使用 import
*/

// import { exportExcel } from '@femessage/excel-it'
let { exportExcel } = require('../src/index.js')

export default {
  name: 'StaticJsonExportToExcel',
  data() {
    return {
      loading: false,
      columns: [
        {label: 'ID', prop: 'id'},
        {label: '名称', prop: 'name'},
        {label: '创建日期', prop: 'createDate'},
        {label: '地址', prop: 'address'},
        {label: '邮编', prop: 'zip'}
      ],
      data: [
        {
          id: 1,
          name: 'FairyEver',
          createDate: new Date(1553496965307),
          address: '北京市',
          zip: '100000'
        }
      ]
    }
  },
  methods: {
    handleExportExcel() {
      this.loading = true

      fetch(
        'https://easy-mock.com/mock/5c1b3895fe5907404e654045/femessage-mock/export-excel'
      )
        .then(function(response) {
          return response.json()
        })
        .then(resp => {

          // 这里导出的是接口的数据，格式与this.data一致
          exportExcel({
            columns: this.columns,
            data: resp.data,
            fileName: 'json2excel'
          }, () => {
            this.loading = false
          })
        })
    }
  }
}
</script>
```
