const path = require("path");

const createVantPatterns = (componentName) => {
  const fileTypes = ["wxml", "wxs", "wxss"];
  return fileTypes.map((item) => {
    return {
      from: `src/components/vant-weapp/dist/${componentName}/index.${item}`,
      to: `dist/components/vant-weapp/dist/${componentName}/index.${item}`,
    };
  });
};

const config = {
  projectName: "NeteaseCloudMusicWeapp-trao.3.4.0",
  date: "2021-12-17",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  alias: {
    "@/vant": path.resolve(__dirname, "../src/components/vant-weapp/dist"),
  },
  copy: {
    patterns: [
      {
        from: "src/components/vant-weapp/dist/wxs",
        to: "dist/components/vant-weapp/dist/wxs",
      },
      {
        from: "src/components/vant-weapp/dist/common/style",
        to: "dist/components/vant-weapp/dist/common/style",
      },
      {
        from: "src/components/vant-weapp/dist/common/index.wxss",
        to: "dist/components/vant-weapp/dist/common/index.wxss",
      },

      ...createVantPatterns("button"),
      ...createVantPatterns("icon"),
      ...createVantPatterns("loading"),
      ...createVantPatterns("toast"),
      ...createVantPatterns("transition"),
    ],
    options: {},
  },
  framework: "vue3",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: { selectorBlackList: [/van-/] },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
