<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-notification-provider>
        <n-message-provider>
          <message>
            <n-dialog-provider>
              <n-modal-provider>
                <slot />
              </n-modal-provider>
            </n-dialog-provider>
          </message>
        </n-message-provider>
      </n-notification-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { useEpThemeStore } from "@/store/modules/epTheme";
import message from "./components/message.vue";
import { darkTheme, lightTheme } from "naive-ui";
import { effect, ref } from "vue";
const epThemeStore = useEpThemeStore();
const theme = ref(null);
// 切换主题的时
effect(() => {
  theme.value = epThemeStore.epTheme === "light" ? lightTheme : darkTheme;
});
</script>
