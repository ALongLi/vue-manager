import axios from "axios";
import { Message } from "element-ui";

// FormData 使用 ,json格式不用引入
// import qs from "qs";
// 用户请求设置的方法
const instance = axios.create({
  timeout: 2500
});
// 设置拦截器
instance.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  err => Promise.reject(err)
);
instance.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  err => Promise.reject(err)
);
// 设置响应拦截器
instance.interceptors.response.use(
  res => {
    switch (res.data && res.data.code) {
      case 0:
        break;
      case 1:
        break;
      case 2:
    }
    return Promise.resolve(res.data);
  },
  err => {
    switch (err.response.status) {
      case 401:
        sessionStorage.clear();
        break;
      case 404:
        Message({
          message: err.message || "Error",
          type: "error",
          duration: 5 * 1000
        });
        break;
      case 500:
        break;
      case 502:
        Message({
          message: err.message || "Error",
          type: "error",
          duration: 5 * 1000
        });
    }
    return Promise.reject(err);
  }
);

export default instance;
