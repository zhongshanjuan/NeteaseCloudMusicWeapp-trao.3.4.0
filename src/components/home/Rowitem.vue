<template>
  <view>
    <view class="row-item" @tap="rowItemClick(props.rowvalue.id)">
      <image
        style="width: 200px; height: 200px; background-color: #eeeeee"
        mode="aspectFit"
        :src="props.rowvalue.src"
      >
      </image>
      <text class="row-item-header">{{ props.rowvalue.header }}</text>
    </view>
  </view>
</template>
<script setup>
import { defineProps } from "vue";
import Taro from "@tarojs/taro";

const props = defineProps({
  rowvalue: Object,
});
const rowItemClick = (id) => {
  console.log("rowItemClick" + id);
  Taro.navigateTo({
    url: "/pages/playlist/playlist?id=" + id,
  });
};
// console.log(props.rowvalue);
</script>
<style>
.row-item {
  /* margin: 5px; */
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.row-item-header {
}
</style>
