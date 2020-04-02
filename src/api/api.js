import { Axios, jsonToFormData } from "@/utils/axios.js";
/**
 * controller
 */
export default {
  /**
   * 获取唐诗
   * @param {Object} data
   */
  readPoetry(data = {}) {
    return Axios({
      methods: "get",
      url: "/recommendPoetry",
      data: jsonToFormData(data)
    });
  }
};
