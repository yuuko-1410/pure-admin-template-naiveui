<script setup lang="ts">
import { useRouter } from "vue-router";

defineOptions({
  name: "403"
});

const router = useRouter();
</script>

<template>
  <div class="flex h-full justify-center items-center">
    <n-result
      status="403"
      title="403 禁止访问"
      description="总有些门是对你关闭的"
    >
      <template #footer>
        <n-button type="primary" @click="router.push('/')">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>
