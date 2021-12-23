import { createApp } from "vue";
// import { createUI } from "taro-ui";
// import "taro-ui/dist/style/index.scss";
// import Varlet from "@varlet/ui";
// import "@varlet/ui/es/style.js";
import Taro from "@tarojs/taro";

import "./app.scss";

const App = createApp({
  onShow(options) {
    console.log("onShow");
  },
  mounted() {
    console.log("mounted");
  },
  onLunch() {
    console.log("onLunch");
  },
  onHide() {
    console.log("onHide");
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
// App.use(Varlet);

export default App;
