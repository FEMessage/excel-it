# excel-it

[![Build Status](https://travis-ci.com/FEMessage/export-excel.svg?branch=master)](https://travis-ci.com/FEMessage/export-excel)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/export-excel.svg)](https://www.npmjs.com/package/@femessage/export-excel)
[![NPM Version](https://img.shields.io/npm/v/@femessage/export-excel.svg)](https://www.npmjs.com/package/@femessage/export-excel)
[![NPM License](https://img.shields.io/npm/l/@femessage/export-excel.svg)](https://github.com/FEMessage/export-excel/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/export-excel/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

纯前端导入导出 excel

## Table of Contents

* [excel-it](#excel-it)
  * [Table of Contents](#table-of-contents)
  * [Introduction](#introduction)
  * [Feature](#feature)
  * [Install](#install)
  * [Example](#example)
  * [Documentation](#documentation)
    * [exportExcel 方法说明](#exportexcel-方法说明)
    * [importExcel 方法说明](#importexcel-方法说明)
  * [License](#license)

## Introduction

纯前端实现，经测试，1 万条数据导出，除去网络请求时间，导出的占用时间不超过 3 秒。

[⬆ Back to Top](#table-of-contents)

## Feature

[⬆ Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/excel-it
```

## Example

```js
import { exportExcel, importExcel } from '@femessage/excel-it'

// 导出excel
export default {
  data() {
    return {
      columns: [
        {label: 'ID', prop: 'id'},
        {label: '名称', prop: 'name'},
        {label: '创建日期', prop: 'creatDate'},
        {label: '地址', prop: 'address'},
        {label: '邮编', prop: 'zip'}
      ],
      data: [
        {
          id: 1,
          name: 'FairyEver',
          creatDate: new Date(),
          address: '北京市',
          zip: '100000'
        }
      ]
    }
  },
  methods: {
    exportExcel() {
      ExportExcel({
        columns: this.columns,
        data: this.data,
        fileName: '导出excel'
      }, () => {
        // 回调函数
      })
    }
  }
}

<template>
    <button type="success" @click="handleUpload">
      选择要导入有表头的 .xlsx 表格
    </button>
</template>
// 导入excel
export default {
    methods: {
      handleUpload() {
        importExcel([], (arr) => {
            console.log(arr);  // 返回数据为多个sheet的数据，数据格式为[{columns:[...],data:[[...],...]}, ...]
        })
      }
    }
}
```

[⬆ Back to Top](#table-of-contents)

## Documentation

### exportExcel 方法说明

| 参数     | 说明                                                                                      | 类型     | 可选值 | 默认值   |
| -------- | ----------------------------------------------------------------------------------------- | -------- | ------ | -------- |
| columns  | excel 表头数组，数据格式为[{label: '', props: ''}] 与 element-ui table 传入的数据格式一致 | Array    | -      | []       |
| data     | excel 内容数组，数据格式字段名称需要跟 props 一致 与 element-ui table 传入的数据格式一致  | Number   | -      | 1        |
| fileName | 文件名 default download                                                                   | Array    | -      | []       |
| header   | 导出的表头名                                                                              | String   | -      | download |
| merges   | 导出的表头合并的单元格, 数据格式['A1', 'E1']                                              | Array    | -      | []       |
| callback | 文件下载后的回调函数                                                                      | Function | -      | ()=>{}   |

### importExcel 方法说明

| 参数     | 说明                                                                            | 类型     | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------------------------- | -------- | ------ | ------ |
| ignore   | 忽略导出的头部单元格范围，数据格式['A1', 'E1']                                  | Array    | -      | []     |
| callback | 导入文件后的回调函数，返回的数据格式为：[{columns:[...],data:[[...],...]}, ...] | Function | -      | ()=>{} |

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
