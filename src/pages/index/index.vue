<template>
  <view class="index">
    <van-toast id="van-toast" />
    <van-button type="primary">Button</van-button>
    <!-- <van-toast id="van-toast" /> -->
    <!-- {{ indexData.foryoulist }} -->
    <view>
      <Row :list="indexData.foryoulist" :number="indexData.number" />
    </view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import "./index.scss";
// import Logo from "../../components/Logo.vue";
import Row from "../../components/home/Row.vue";
import Taro from "@tarojs/taro";
import { useReady } from "@tarojs/taro";
import Toast from "../../components/vant-weapp/dist/toast/toast";
Taro.showToast({
  title: '成功',
  icon: 'success',
  duration: 2000
})
let indexData = reactive({ foryoulist: [], number: 12 });
console.log("setup");
const getData = async () => {
  const res = await Taro.request({ url: "https://example/index/foryou" });
  // Toast.success("success");
  indexData.foryoulist = res.data;
  indexData.number = 13;
  console.log("getData");
};
getData();
// useReady(() => {
// console.log("onReady");
// const getData = async () => {
//   const res = await Taro.request({ url: "https://example/index/foryou" });
//   indexData.foryoulist = res.data;
//   indexData.number = 13;
// };
// getData();
// });
</script>
<!-- <script>
import { reactive } from "vue";
import "./index.scss";
import Row from "../../components/home/Row.vue";
import Taro from "@tarojs/taro";
 export default {
  name: "Index",
  components: { Row },

  onLoad() {
    console.log("onload!!");
    console.log(this.indexData);

    const getData = async () => {
      const res = await Taro.request({ url: "https://example/index/foryou" });
      console.log(res);
      console.log(this.indexData);
      this.indexData.foryoulist = res.data;
      this.indexData.number = 13;
    };
    getData();
  },

  setup() {
    let indexData = reactive({ foryoulist: [], number: 12 });
    console.log("setup");
    return {
      indexData,
    };
  },
};
</script> -->

<style></style>
