<template>
  <view>
    <text class="row-header">For you</text>
    <!-- 2*2 -->
    <view class="row" v-for="(row, index) in forYouList">
      <Rowitem v-for="item in row" :rowvalue="item" />
    </view>
  </view>
</template>
<script setup>
import Rowitem from "../../components/home/Rowitem.vue";
import { reactive, computed } from "vue";
import _ from "lodash";

const forYous = reactive([
  { id: 1, src: "https://picsum.photos/200/200?1", header: "Happy Hits" },
  { id: 2, src: "https://picsum.photos/200/200?2", header: "Happy Hits" },
]);

const forYouList = computed(() => {
  return _.chunk(forYous, 2);
});
</script>

<style>
.row-header {
  font-size: large;
  font-weight: bold;
}
.row {
  display: flex;
  justify-content: center;
}
</style>
