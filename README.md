# excel-it

[![Build Status](https://travis-ci.com/FEMessage/export-excel.svg?branch=master)](https://travis-ci.com/FEMessage/export-excel)
[![NPM Download](https://img.shields.io/npm/dm/@femessage/export-excel.svg)](https://www.npmjs.com/package/@femessage/export-excel)
[![NPM Version](https://img.shields.io/npm/v/@femessage/export-excel.svg)](https://www.npmjs.com/package/@femessage/export-excel)
[![NPM License](https://img.shields.io/npm/l/@femessage/export-excel.svg)](https://github.com/FEMessage/export-excel/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/export-excel/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

纯前端导入导出 excel

## Table of Contents

* **[excel-it](#excel-it)**
* **[Introduction](#introduction)**
* **[Install](#install)**
* **[Documentation](#documentation)**
* **[Example](#example)**
* **[导出 excel](#export-excel)**
* **[导入 excel](#import-excel)**
* **[License](#license)**

## Introduction

纯前端实现导入导出 excel，经测试，1 万条数据导出，除去网络请求时间，导出的占用时间不超过 3 秒。

[⬆ Back to Top](#table-of-contents)

## Install

```sh
yarn add @femessage/excel-it
```

## Documentation

**[doc and online demo](https://femessage.github.io/excel-it/)**

[⬆ Back to Top](#table-of-contents)

## Example

### export-excel

```html
<template>
    <button @click="handleExport">
      导出Excel
    </button>
</template>

<script>
import { exportExcel } from '@femessage/excel-it'

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
    handleExport() {
      exportExcel({
        columns: this.columns,
        data: this.data,
        fileName: '导出excel'
      }, () => {
        // 回调函数
      })
    }
  }
}
</script>
```

### import-excel

```html
<template>
    <button @click="handleImport">
      导入Excel
    </button>
</template>

<script>
import { importExcel } from '@femessage/excel-it'

export default {
  methods: {
    handleImport() {
      importExcel([], (arr) => {
          console.log(arr);  // 返回数据为多个sheet的数据，数据格式为[{columns:[...],data:[[...],...]}, ...]，具体请查阅文档
      })
    }
  }
}
</script>
```

**[更多例子请查阅文档](https://femessage.github.io/excel-it/)**

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
