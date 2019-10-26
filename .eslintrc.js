module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    document: true,
    navigator: true,
    window: true,
    echarts: true,
    equire: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
