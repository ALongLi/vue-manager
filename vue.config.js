const path = require("path");
let BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const FileManagerPlugin = require("filemanager-webpack-plugin");
const apiMocker = require("mocker-api");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@mock", resolve("mock"))
      .set("@assets", resolve("src/assets"));
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/css/_global.scss";
        `
      }
    }
  },
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://192.168.9.141/bdap", // 测试外网
        // ws: true, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRequiresRewrite: {
          "/api": "/api"
        }
      }
    },
    before(app) {
      apiMocker(app, path.resolve("./mock/index.js"));
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV == "production") {
      config.plugins.push(
        new FileManagerPlugin({
          onEnd: {
            archive: [{ source: "./dist", destination: "./dist/dist.zip" }]
          }
        })
      );
    }
    if (process.env.use_analyzer) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  }
};
