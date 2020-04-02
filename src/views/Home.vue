<template>
  <div class="home">
    <div class="test">{{ poetry }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import api from "@/api/api.js";
import { isSuccess, getData } from "@/utils/axios.js";
import { dataPick } from "data-pick";
import User from "@/bean/User";

const data = {
  id: 1,
  name: "夏朝威",
  phone: "123",
  age: 88,
  birthday: "1959-02-12",
  hobby: [
    {
      id: 1,
      name: "啃玉米",
      type: 1,
      status: 1
    },
    { id: 2, name: "吃龙虾", type: 2, status: 2 }
  ]
};
// 推广一下自制npm插件，实现graphQl类似功能
console.log(dataPick(data, User));

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      poetry: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      api.readPoetry().then(res => {
        if (isSuccess(res)) {
          this.poetry = getData(res);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.test {
  color: red;
  font-size: 40px;
  font-weight: 700;
}
</style>
