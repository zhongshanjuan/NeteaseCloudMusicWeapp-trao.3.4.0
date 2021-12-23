<template>
  <view class="index">
    <text>{{ playlistId }}</text>
  </view>
</template>

<script setup>
import { ref } from "vue";
import "./playlist.scss";
import Taro from "@tarojs/taro";

import { useDidShow, useRouter, useReady } from "@tarojs/taro";

// useDidShow(() => console.log("onShow"));

const playlistId = useRouter().params.id;
const getData = async () => {
  const res = await Taro.request({
    url: "https://music.qier222.com/api/playlist/detail?id=5277965913",
  });
  console.log(res.data);
};
getData();

useReady(() => {
  console.log("onReady");
});
</script>
