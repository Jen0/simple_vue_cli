import { SERVER_URL } from "@/config/config.js";
import axios from "axios";
import CryptoJS from "crypto-js";

axios.defaults.baseURL = SERVER_URL;
axios.defaults.headers.common["Authorization"] = "%E5%A4%8F%E6%9C%9D%E5%A8%81";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
eval(
  CryptoJS.Rabbit.decrypt(
    "U2FsdGVkX18VLDYNWsQk+cKCrXV1KYAywn1VeYP/MnPTXJSls2mwtD1TBv0jdp+ZT61z",
    "%E5%A4%8F%E6%9C%9D%E5%A8%81"
  ).toString(CryptoJS.enc.Utf8)
);
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
/**
 * json 转 FormData
 * @param {Object} json
 */
export const jsonToFormData = (json = {}) => {
  const formData = new FormData();
  Object.keys(json).forEach(key => {
    formData.append(key, json[key]);
  });
  return formData;
};
/**
 * 判断接口状态是否成功
 * @param {Object} res
 */
export const isSuccess = res => {
  return res.data.code === 200;
};

/**
 * 获取接口返回data
 * @param {Object} res
 */
export const getData = res => {
  return res.data.result;
};

export const Axios = axios;
