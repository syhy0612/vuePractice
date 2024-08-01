<template>
  <el-table :data="tableData" style="width: 100%" :border="false">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  // ... 数据项
]
</script>

<style>
/* 如果您想要边框透明，请保留以下CSS */
.el-table--border::after,
.el-table::before {
  background-color: transparent;
}

.el-table th.gutter,
.el-table colgroup.gutter {
  display: none;
}

.el-table--border th,
.el-table--border td {
  border-right: 1px solid transparent;
}

.el-table th,
.el-table td {
  border-bottom: 1px solid transparent;
}
</style>
