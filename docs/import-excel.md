Import excel example

```vue
<template>
  <div>
    <el-button type="success" @click="handleUpload">
      选择要导入的 .xlsx 表格
    </el-button>

    <p>table</p>
    <el-table v-bind="table">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// in real project, you should import function like this
// import { importExcel } from '@femessage/excel-it'

export default {
  name: 'ImportXlsx',
  data() {
    return {
      table: {
        columns: [],
        data: []
      }
    }
  },
  methods: {
    handleUpload() {
      /**
       * 受限于 styleguide 无法使用 import
       * 因此在 styleguide 配置已经将
       * `importExcel` 挂载到 `window`
       */
      importExcel([], arr => {
        console.log('导入excel数据：', arr);
        const {columns = [], data = []} = arr[0] || {}
        this.reduceData({header: columns, results: data})
      })
    },
    reduceData({header, results}) {
      // 1、将header聚合成一个对象
      // 2、计算在header数组里面出现的次数
      // 3、生成对应的columns（label与props不一致）
      const headerItemAppearNum = header.reduce((res, cur) => {
        if (res[cur]) {
          res[cur].num++
        } else {
          res[cur] = {
            startIndex: 0,
            num: 1
          }
        }
        return res
      }, {})
      const columns = header.map(item => {
        headerItemAppearNum[item].startIndex++

        if (
          headerItemAppearNum[item].num === 1 ||
          headerItemAppearNum[item].startIndex === 1
        ) {
          return {
            label: item,
            prop: item
          }
        } else {
          return {
            label: item,
            prop: `${item}_${headerItemAppearNum[item].startIndex - 1}`
          }
        }
      })
      this.table.columns = columns
      this.table.data = results
    }
  }
}
</script>
```
