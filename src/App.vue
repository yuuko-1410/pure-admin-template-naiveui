<template>
  <NProvider>
    <router-view />
  </NProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NProvider from "@/components/NProvider/index.vue";

export default defineComponent({
  name: "app"
});
</script>
