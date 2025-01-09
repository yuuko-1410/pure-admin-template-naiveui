import type { App } from "vue";
import { createPinia } from "pinia";
import persistedstate from "pinia-plugin-persistedstate";
const store = createPinia();
store.use(persistedstate);

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
