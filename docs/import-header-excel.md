导入有表头的excel，该例子将会忽略excel中A1到H1范围

```vue
<template>
  <div>
    <el-button type="success" @click="handleUpload">
      选择要导入有表头的 .xlsx 表格
    </el-button>
    <p>例如：</p>
    <img src="https://cdn.nlark.com/yuque/0/2019/png/304775/1563350781876-9ff590fb-da40-4a13-a594-80299132e59c.png" alt="" style="height: 200px;">
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
  name: 'HeaderExcel',
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
      importExcel(['A1', 'H1'], arr => {
        console.log('导入excel数据：', arr);
        if (!arr || !arr.length) {
          alert('请导入有内容的excel!')
          return
        }

        let data = []

        // 判断两个header是否相同
        const diffHeader = this.getArrDifference()
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
