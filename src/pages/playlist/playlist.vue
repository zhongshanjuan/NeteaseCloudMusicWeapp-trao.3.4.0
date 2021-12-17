<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script setup>
import { ref } from "vue";
import "./playlist.scss";
import { useDidShow, useRouter } from "@tarojs/taro";

// useDidShow(() => console.log("onShow"));
const router = useRouter();
console.log(router.params.id);

const msg = ref("playlist");
</script>
