## exportExcel 方法说明

| 参数     | 说明                                             | 类型     | 默认值                              |
| -------- | ------------------------------------------------ | -------- | ----------------------------------- |
| options  | 配置选项 具体请查看 exportExcel options 选项说明 | Object   | 请查看 exportExcel options 选项说明 |
| callback | 文件下载后的回调函数                             | Function | ()=>{}                              |

## exportExcel options 选项说明

| 参数     | 说明                                                                                                        | 类型   | 默认值   |
| -------- | ----------------------------------------------------------------------------------------------------------- | ------ | -------- |
| columns  | excel 表头数组，数据格式为`[{label: '', prop: ''}]` 与 element-ui table 传入的数据格式一致                  | Array  | []       |
| data     | excel 内容数组，数据格式字段名称 key 需要跟 prop 一致 与 element-ui table 传入的数据格式一致                | Array  | []       |
| fileName | 导出的文件名                                                                                                | String | download |
| header   | 如果传入该值，那么该值将显示在导出的 excel 头部（第一行第一列），columns 与 data 的内容会退到第二行之后显示 | String | -        |
| merges   | 导出的 excel 要合并单元格的范围， eg: ['A1', 'E1'] 那么 A1 到 E1 的单元格将会被合并                         | Array  | []       |

## importExcel 方法说明

| 参数     | 说明                                                                                                                                                                                                      | 类型     | 默认值 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------ |
| ignore   | 要忽略的表头单元格范围，eg: ['A1', 'E1'] 那么 excel 中 A1 到 E1 的内容将不会被导入                                                                                                                        | Array    | []     |
| callback | 导入文件后的回调函数，返回 excel 数据组成的数组，数组中的每一项对应一个[sheet](https://baike.baidu.com/item/%E5%B7%A5%E4%BD%9C%E8%A1%A8/2826887?fr=aladdin)的数据，格式为`[{columns:[], data:[{}]}, ...]` | Function | ()=>{} |

## importExcel callback 回传的数组项属性说明

| 属性名  | 属性值说明                 | 类型  |
| ------- | -------------------------- | ----- |
| columns | excel 第一行的数据         | Array |
| data    | excel 第一行外其他行的数据 | Array |