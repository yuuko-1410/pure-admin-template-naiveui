import { useEpThemeStoreHook } from "@/store/modules/epTheme";
import { createDiscreteApi, darkTheme, lightTheme } from "naive-ui";
import { watchEffect, ref } from "vue";

const epThemeStore = useEpThemeStoreHook();
const discreteApiRef = ref(null);

const getDiscrete = () => {
  if (discreteApiRef.value) {
    return discreteApiRef.value;
  }

  const configProviderPropsRef = () => ({
    theme: epThemeStore.epTheme === "light" ? lightTheme : darkTheme
  });

  discreteApiRef.value = createDiscreteApi(
    ["message", "dialog", "notification", "loadingBar", "modal"],
    {
      configProviderProps: configProviderPropsRef()
    }
  );

  // 监听主题变化，重新创建 discreteApi
  watchEffect(() => {
    if (epThemeStore.epTheme) {
      discreteApiRef.value = createDiscreteApi(
        ["message", "dialog", "notification", "loadingBar", "modal"],
        {
          configProviderProps: configProviderPropsRef()
        }
      );
    }
  });

  return discreteApiRef.value;
};

export { getDiscrete };
