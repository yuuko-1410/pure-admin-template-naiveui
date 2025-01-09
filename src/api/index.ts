import { createAlova } from "alova";
import fetchAdapter from "alova/fetch";
import vueHook from "alova/vue";
import { createApis, withConfigType } from "./createApis";
import { getDiscrete } from "@/utils/message";

export const alovaInstance = createAlova({
  baseURL: "api/",
  statesHook: vueHook,
  // 关闭缓存
  cacheFor: null,
  requestAdapter: fetchAdapter(),
  beforeRequest: method => {
    const whiteList = ["/login"];
    let isWhiteUrl = whiteList.some(url => method.url.endsWith(url));
    console.log(`白名单：${isWhiteUrl}`);
    if (!isWhiteUrl) {
      // todo: 执行鉴权
    }
  },
  responded: async res => {
    if (res.status != 200) {
      getDiscrete().message.error("网络异常");
      return null;
    }
    if (res.headers.get("content-type") === "application/json") {
      const resp = await res.json();
      if (resp?.data?.code != 200) {
        // 请求出错
        getDiscrete().message.error(resp?.data?.msg);
      }
      if (resp?.data?.code === 401) {
        // token过期
        getDiscrete().message.error(resp.message);
      }
      return resp;
    }
    // 不是JSON类型返回为Blob类型，可自行调整
    return res.blob();
  }
});

export const $$userConfigMap = withConfigType({});

const Apis = createApis(alovaInstance, $$userConfigMap);

export default Apis;
