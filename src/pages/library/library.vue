<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./library.scss";

export default {
  setup() {
    const msg = ref("音乐库");
    return {
      msg,
    };
  },
};
</script>
