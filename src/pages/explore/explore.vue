<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./explore.scss";

export default {
  setup() {
    const msg = ref("发现");
    return {
      msg,
    };
  },
};
</script>
