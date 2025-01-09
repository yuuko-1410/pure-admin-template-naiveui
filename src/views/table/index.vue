<template>
  <n-card>
    <NaiveUiTable
      :columns="columns"
      :search-props="search"
      :requestApi="getTableList"
      :data-callback="dataCallback"
      :tool-button="false"
    >
      <template #tableHeader>
        <n-space>
          <n-button type="primary">新增</n-button>
          <n-button>导出</n-button>
        </n-space>
      </template>
    </NaiveUiTable>
  </n-card>
</template>
<script setup lang="tsx">
import useColumns from "./index";
import { NaiveUiTable } from "naive-ui-table";
const { columns, dataList, search } = useColumns();

const getTableList = async params => {
  console.log("getTableList", params);
  return [];
};
const dataCallback = data => {
  console.log("dataCallBack", data);
  return { current: 1, size: 10, total: 20, records: dataList.value };
};
</script>
