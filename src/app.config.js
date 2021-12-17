export default {
  pages: [
    "pages/index/index",
    "pages/explore/explore",
    "pages/library/library",
    "pages/playlist/playlist",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#cdedf8",
    selectedColor: "#fe9554",
    backgroundColor: " #00809c",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/explore/explore",
        text: "发现",
      },
      {
        pagePath: "pages/library/library",
        text: "音乐库",
      },
    ],
  },
};
