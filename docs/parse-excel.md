解析 excel

```vue
<template>
  <div>
    <div class="drag-area" @drop="onDrop" @dragover="onDragOver">拖动 .xslx 到此处</div>
    <p>table</p>
    <el-table :data="data">
      <el-table-column
        v-for="col in columns"
        :key="col"
        :label="col"
        :prop="col"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
// In real project, you should import function like this
// import { parseExcel } from '@femessage/excel-it'

export default {
  name: 'ParseExcel',

  data() {
    return {
      columns: [],
      data: []
    }
  },

  methods: {
    onDrop(e) {
      e.preventDefault()

      /**
       * 受限于 styleguide 无法使用 import
       * 因此在 styleguide 配置已经将
       * `parseExcel` 挂载到 `window`
       */
      parseExcel(e.dataTransfer.files[0], [], data => {
        const excelData = data[0] || {}
        this.columns = excelData.columns
        this.data = excelData.data
      })
    },

    onDragOver: e => e.preventDefault()
  },
}
</script>

<style scoped>
.drag-area {
  cursor: pointer;
  text-align: center;
  padding: 20px;
  border: dashed 1px #ccc;
  border-radius: 4px;
  color: #333;
}
.drag-area:hover {
  background-color: #eee;
}
</style>
```