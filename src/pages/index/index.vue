<template>
  <view class="index">

    <view>
      <Row />
    </view>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.scss";
import Logo from "../../components/Logo.vue";
import Row from "../../components/home/Row.vue";
export default {
  components: {
    Logo,
    Row,
  },
  setup() {
    const msg = ref("Hello world");
    const btnClick = () => {
      console.log("btnClick");
    };

    return {
      msg,
      btnClick,
    };
  },
};
</script>
