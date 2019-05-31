合并多个具有相同表头的sheet
<br/>
请导入具有多个sheet且多个sheet的表头相同的excel，若表头不同，则只返回第一个sheet的内容

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
// 在你的组件中导入模块使用。如下所示
// import { importExcel } from '@femessage/excel-it'

export default {
  name: 'MultipleSheets',
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
      importExcel([], arr => {
        console.log('导入excel数据：', arr);
        if (!arr[0] || !arr[1]) {
          alert('请导入具有两个sheet且其表头相同的excel来查看此例子结果！')
          return
        }
        let data = []

        // 判断两个header是否相同
        const diffHeader = this.getArrDifference(arr[0].columns, arr[1].columns)
        let columns = arr[0].columns
        if (diffHeader.length) {
          data = arr[0].data
        } else {
          arr.forEach(info => {
            data = data.concat(info.data)
          })
        }
        this.reduceData({header: columns, results: data})
      })
    },
    getArrDifference(...arr) {
      return [].concat(...arr).reduce(function(temp, item, index, list) {
        if (list.indexOf(item) === list.lastIndexOf(item)) {
          temp.push(item)
        }
        return temp
      }, [])
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
