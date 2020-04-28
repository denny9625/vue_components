// tslint:disable
import axios, { AxiosResponse } from "axios";
import store from "@/store";
import { Toast } from "vant";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  (config: any) => {
    Toast.loading({
      message: "请稍候...",
      forbidClick: true,
      duration: 0,
    });
    const token: string = store.state.userToken;
    const deviceNumber: string = store.state.deviceNumber;
    if (token) {
      config.headers.Authorization = token;
      config.headers.deviceNumber = deviceNumber;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use((res: AxiosResponse) => {
    Toast.clear();
  return res;
});

export default axios;
