<script setup lang="ts">
import { useRouter } from "vue-router";
import noServer from "@/assets/status/500.svg?component";

defineOptions({
  name: "500"
});

const router = useRouter();
</script>

<template>
  <div class="flex h-full justify-center items-center">
    <n-result
      status="500"
      title="500 服务器错误"
      description="服务器出错可能说明该雇更多程序员了"
    >
      <template #footer>
        <n-button type="primary" @click="router.push('/')">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>
