<script setup lang="ts">
import Apis from "@/api";
import { useMessage } from "naive-ui";
defineOptions({
  name: "Welcome"
});
const message = useMessage();
const show = async () => {
  const res = await Apis.UserService.login({
    data: {
      username: "admin",
      password: "123456"
    }
  });
  console.log(res);
};
</script>

<template>
  <div>
    <h1>Pure-Admin-Thin（非国际化版本）- Naive替换</h1>
    <n-button type="success" @click="show"> Success </n-button>
  </div>
</template>
