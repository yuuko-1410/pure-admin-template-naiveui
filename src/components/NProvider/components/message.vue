<template>
  <slot />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage();
onMounted(() => {
  // @ts-ignore
  window.$message = message;
});
</script>
