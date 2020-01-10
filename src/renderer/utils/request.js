import axios from "axios";
import store from "../store/index.js";
import * as types from "../store/types.js";
import router from "../router/index.js";
import {
  Message
} from "element-ui";
import {
  timeout,
  baseURL
} from "./config.js";
axios.defaults.timeout = timeout;
axios.defaults.baseURL = baseURL;
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `Bearer ${store.state.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(types.LOGOUT);
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.path
            }
          });
      }
      const message = error.response.data.message ?
        error.response.data.message :
        error.response.status == 401 ?
        "登录过期，请重新登录" :
        "服务器异常";
      Message.error(message);
    } else if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
      Message.error("请求已超时");
    }
    return Promise.reject(error);
  }
);
export const gl_ajax = params => {
  return axios({
      method: params.method.toLowerCase(),
      url: `${axios.defaults.baseURL}${params.url}`,
      data: params.method != "get" ? params.data : "",
      params: params.method == "get" ? params.data : "",
      responseType: params.file ? "blob" : ""
    })
    .then(res => {
      params.success && params.success(res);
    })
    .catch(err => {
      params.error && params.error(err);
    });
};